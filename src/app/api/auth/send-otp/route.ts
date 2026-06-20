import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function generateOtp() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

export async function POST(req: NextRequest) {
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

  await resend.emails.send({
    from: "Lamatna <onboarding@resend.dev>",
    to: email,
    subject: "رمز التحقق - لمتنا",
    html: `
      <div dir="rtl" style="font-family: Arial, sans-serif; max-width: 400px; margin: 0 auto; padding: 32px; background: #f9f9f9; border-radius: 12px;">
        <h2 style="color: #3D3A5C; margin-bottom: 8px;">مرحباً ${user.name} 👋</h2>
        <p style="color: #555;">رمز التحقق الخاص بك:</p>
        <div style="background: #3D3A5C; color: #fff; font-size: 36px; font-weight: bold; letter-spacing: 8px; text-align: center; padding: 20px; border-radius: 8px; margin: 24px 0;">
          ${code}
        </div>
        <p style="color: #888; font-size: 13px;">صالح لمدة 5 دقائق. لا تشاركه مع أحد.</p>
      </div>
    `,
  });

  return NextResponse.json({ success: true });
}
