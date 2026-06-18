import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const session = await auth();
  if (!session?.user?.id) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { id } = await params;
  const { orderId } = await req.json();

  const entry = await prisma.escrowEntry.findFirst({
    where: { orderId, escrow: { eventId: id } },
  });
  if (!entry) return NextResponse.json({ error: "Not found" }, { status: 404 });

  await prisma.$transaction([
    prisma.escrowEntry.update({
      where: { id: entry.id },
      data: { status: "RELEASED", releasedAt: new Date() },
    }),
    prisma.order.update({
      where: { id: orderId },
      data: { status: "RELEASED" },
    }),
  ]);

  return NextResponse.json({ success: true });
}
