import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

function generateOtp() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

export async function POST(req: NextRequest) {
  const { phone } = await req.json();
  if (!phone) return NextResponse.json({ error: "رقم الهاتف مطلوب" }, { status: 400 });

  const user = await prisma.user.findUnique({ where: { phone } });
  if (!user) {
    return NextResponse.json({ error: "المستخدم غير موجود. سجّل أولاً." }, { status: 404 });
  }

  const code = generateOtp();
  const expiresAt = new Date(Date.now() + 5 * 60 * 1000); // 5 minutes

  await prisma.otpToken.create({
    data: { userId: user.id, code, expiresAt },
  });

  // In production: send via Twilio
  // const twilio = require('twilio')(process.env.TWILIO_SID, process.env.TWILIO_TOKEN)
  // await twilio.messages.create({ body: `رمز التحقق: ${code}`, from: process.env.TWILIO_FROM, to: phone })

  if (process.env.NODE_ENV === "development") {
    console.log(`OTP for ${phone}: ${code}`);
  }

  return NextResponse.json({ success: true });
}
