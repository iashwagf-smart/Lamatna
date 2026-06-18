import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// Expire catalog items past their expiry date
export async function GET() {
  const result = await prisma.catalogItem.updateMany({
    where: { available: true, expiresAt: { lt: new Date() } },
    data: { available: false },
  });

  return NextResponse.json({ expired: result.count });
}
