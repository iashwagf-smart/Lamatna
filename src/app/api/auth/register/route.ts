import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { sendOtpEmail } from "@/lib/mailer";

function generateOtp() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

export async function POST(req: NextRequest) {
  const { name, email, role } = await req.json();

  if (!name || !email) {
    return NextResponse.json({ error: "الاسم والبريد الإلكتروني مطلوبان" }, { status: 400 });
  }

  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) {
    return NextResponse.json({ error: "البريد الإلكتروني مسجل بالفعل" }, { status: 409 });
  }

  const user = await prisma.user.create({
    data: { name, email, role: role ?? "CLIENT" },
  });

  const code = generateOtp();
  const expiresAt = new Date(Date.now() + 5 * 60 * 1000);
  await prisma.otpToken.create({ data: { userId: user.id, code, expiresAt } });

  await sendOtpEmail(email, name, code);

  return NextResponse.json({ success: true });
}
