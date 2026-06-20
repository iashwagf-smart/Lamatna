import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function GET(_: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const escrow = await prisma.escrow.findUnique({
    where: { eventId: id },
    include: { entries: { include: { vendor: true, order: true } } },
  });
  return NextResponse.json(escrow);
}

export async function POST(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const session = await auth();
  if (!session?.user?.id) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { id } = await params;
  const orders = await prisma.order.findMany({
    where: { eventId: id, status: "CONFIRMED" },
  });

  const totalLocked = orders.reduce((sum: number, o) => sum + o.amount, 0);

  const escrow = await prisma.escrow.create({
    data: {
      eventId: id,
      totalLocked,
      entries: {
        create: orders.map((o) => ({
          orderId: o.id,
          vendorId: o.vendorId,
          amount: o.amount,
        })),
      },
    },
    include: { entries: true },
  });

  await prisma.order.updateMany({
    where: { id: { in: orders.map((o) => o.id) } },
    data: { status: "LOCKED" },
  });

  return NextResponse.json(escrow);
}
