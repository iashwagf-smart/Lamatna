import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

function generateOtp() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

export async function POST(req: NextRequest) {
  const { name, phone, role } = await req.json();

  if (!name || !phone) {
    return NextResponse.json({ error: "الاسم والهاتف مطلوبان" }, { status: 400 });
  }

  const existing = await prisma.user.findUnique({ where: { phone } });
  if (existing) {
    return NextResponse.json({ error: "رقم الهاتف مسجل بالفعل" }, { status: 409 });
  }

  const user = await prisma.user.create({
    data: { name, phone, role: role ?? "CLIENT" },
  });

  const code = generateOtp();
  const expiresAt = new Date(Date.now() + 5 * 60 * 1000);
  await prisma.otpToken.create({ data: { userId: user.id, code, expiresAt } });

  if (process.env.NODE_ENV === "development") {
    console.log(`Register OTP for ${phone}: ${code}`);
  }

  return NextResponse.json({ success: true });
}
