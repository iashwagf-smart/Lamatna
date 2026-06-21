"use server";

import { prisma } from "@/lib/prisma";
import { encode } from "next-auth/jwt";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function loginWithOtp(email: string, otp: string, callbackUrl: string) {
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) return { error: "البريد الإلكتروني غير مسجل" };

  const token = await prisma.otpToken.findFirst({
    where: {
      userId: user.id,
      code: otp,
      used: false,
      expiresAt: { gt: new Date() },
    },
    orderBy: { createdAt: "desc" },
  });

  if (!token) return { error: "الرمز غير صحيح أو منتهي الصلاحية" };

  await prisma.otpToken.update({ where: { id: token.id }, data: { used: true } });
  if (!user.verified) {
    await prisma.user.update({ where: { id: user.id }, data: { verified: true } });
  }

  const secret = process.env.AUTH_SECRET ?? process.env.NEXTAUTH_SECRET!;
  const isProduction = process.env.NODE_ENV === "production";
  const cookieName = isProduction
    ? "__Secure-authjs.session-token"
    : "authjs.session-token";

  const sessionToken = await encode({
    secret,
    salt: cookieName,
    token: {
      sub: user.id,
      id: user.id,
      email: user.email,
      name: user.name,
      role: user.role,
    },
    maxAge: 30 * 24 * 60 * 60,
  });

  const cookieStore = await cookies();
  cookieStore.set(cookieName, sessionToken, {
    httpOnly: true,
    secure: isProduction,
    sameSite: "lax",
    maxAge: 30 * 24 * 60 * 60,
    path: "/",
  });

  redirect(callbackUrl);
}
