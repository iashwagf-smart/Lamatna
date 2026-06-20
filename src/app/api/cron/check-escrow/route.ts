import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// Auto-release escrow entries 48h after event window with no sign-off
export async function GET() {
  const cutoff = new Date(Date.now() - 48 * 60 * 60 * 1000);

  const staleEntries = await prisma.escrowEntry.findMany({
    where: {
      status: "LOCKED",
      order: { event: { date: { lt: cutoff } } },
    },
    include: { order: true },
  });

  const ids = staleEntries.map((e: { id: string }) => e.id);
  const orderIds = staleEntries.map((e: { orderId: string }) => e.orderId);

  if (ids.length > 0) {
    await prisma.$transaction([
      prisma.escrowEntry.updateMany({
        where: { id: { in: ids } },
        data: { status: "AUTO_RELEASED", releasedAt: new Date() },
      }),
      prisma.order.updateMany({
        where: { id: { in: orderIds } },
        data: { status: "RELEASED" },
      }),
    ]);
  }

  return NextResponse.json({ released: ids.length });
}
