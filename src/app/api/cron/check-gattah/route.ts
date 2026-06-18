import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// Check Gattah funding windows
export async function GET() {
  const expired = await prisma.gattah.findMany({
    where: { status: "OPEN", windowClosesAt: { lt: new Date() } },
    include: { contributions: true, event: true },
  });

  for (const gattah of expired) {
    if (gattah.raisedAmount >= gattah.targetAmount) {
      await prisma.gattah.update({ where: { id: gattah.id }, data: { status: "FUNDED" } });
    } else if (gattah.shortfallOption === "BETA_AUTO_CANCEL") {
      // Cancel event bookings and set refund state
      await prisma.$transaction([
        prisma.gattah.update({ where: { id: gattah.id }, data: { status: "CANCELLED" } }),
        prisma.event.update({ where: { id: gattah.eventId }, data: { status: "CANCELLED" } }),
      ]);
    } else {
      // ALPHA: host covers the rest — notify only
      await prisma.gattah.update({ where: { id: gattah.id }, data: { status: "SHORTFALL" } });
      await prisma.notification.create({
        data: {
          userId: gattah.event.ownerId,
          type: "GATTAH_SHORTFALL",
          title: "نقص في القطّة",
          body: `تبقّى ${(gattah.targetAmount - gattah.raisedAmount).toLocaleString("ar")} ر.س للوصول للهدف. سيُخصم من حسابك كمضيف.`,
        },
      });
    }
  }

  return NextResponse.json({ processed: expired.length });
}
