import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function GET(_: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const dispute = await prisma.dispute.findUnique({
    where: { id },
    include: { order: { include: { vendor: true, event: true } } },
  });
  return NextResponse.json(dispute);
}

export async function PATCH(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const session = await auth();
  if (!session?.user?.id) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { id } = await params;
  const { status, resolution, action } = await req.json();

  const dispute = await prisma.dispute.update({
    where: { id },
    data: { status, resolution, resolvedAt: status === "RESOLVED" ? new Date() : undefined },
  });

  if (action === "RELEASE" && dispute.orderId) {
    await prisma.$transaction([
      prisma.escrowEntry.updateMany({
        where: { orderId: dispute.orderId },
        data: { status: "RELEASED", releasedAt: new Date() },
      }),
      prisma.order.update({
        where: { id: dispute.orderId },
        data: { status: "RELEASED" },
      }),
    ]);
  } else if (action === "REFUND" && dispute.orderId) {
    await prisma.$transaction([
      prisma.escrowEntry.updateMany({
        where: { orderId: dispute.orderId },
        data: { status: "REFUNDED" },
      }),
      prisma.order.update({
        where: { id: dispute.orderId },
        data: { status: "CANCELLED" },
      }),
    ]);
  }

  return NextResponse.json(dispute);
}
