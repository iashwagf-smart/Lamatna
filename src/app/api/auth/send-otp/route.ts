import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { sendOtpEmail } from "@/lib/mailer";
import { rateLimit } from "@/lib/rateLimit";

function generateOtp() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for") ?? "unknown";
  const { allowed } = rateLimit(`otp:${ip}`, 5, 10 * 60 * 1000); // 5 requests per 10 min
  if (!allowed) {
    return NextResponse.json({ error: "كثرة المحاولات. حاول بعد 10 دقائق." }, { status: 429 });
  }

  const { email } = await req.json();
  if (!email) return NextResponse.json({ error: "البريد الإلكتروني مطلوب" }, { status: 400 });

  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) {
    return NextResponse.json({ error: "المستخدم غير موجود. سجّل أولاً." }, { status: 404 });
  }

  const code = generateOtp();
  const expiresAt = new Date(Date.now() + 5 * 60 * 1000);

  await prisma.otpToken.create({
    data: { userId: user.id, code, expiresAt },
  });

  await sendOtpEmail(email, user.name, code);

  return NextResponse.json({ success: true });
}
