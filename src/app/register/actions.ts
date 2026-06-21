"use server";

import { signIn } from "@/lib/auth";
import { AuthError } from "next-auth";

export async function registerWithOtp(email: string, otp: string, role: string) {
  const dest = role === "VENDOR" ? "/partner/dashboard" : "/user/dashboard";
  try {
    await signIn("email-otp", { email, otp, redirectTo: dest });
  } catch (error) {
    if (error instanceof AuthError) {
      return { error: "الرمز غير صحيح أو منتهي الصلاحية" };
    }
    throw error;
  }
}
