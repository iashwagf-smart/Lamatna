import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { signIn } from "@/lib/auth";

export async function POST(req: NextRequest) {
  const { phone, otp } = await req.json();

  if (!phone || !otp) {
    return NextResponse.json({ error: "البيانات ناقصة" }, { status: 400 });
  }

  const user = await prisma.user.findUnique({ where: { phone } });
  if (!user) return NextResponse.json({ error: "مستخدم غير موجود" }, { status: 404 });

  const token = await prisma.otpToken.findFirst({
    where: {
      userId: user.id,
      code: otp,
      used: false,
      expiresAt: { gt: new Date() },
    },
    orderBy: { createdAt: "desc" },
  });

  if (!token) return NextResponse.json({ error: "الرمز غير صحيح أو منتهي" }, { status: 401 });

  await prisma.otpToken.update({ where: { id: token.id }, data: { used: true } });
  if (!user.verified) {
    await prisma.user.update({ where: { id: user.id }, data: { verified: true } });
  }

  return NextResponse.json({ success: true, role: user.role });
}
