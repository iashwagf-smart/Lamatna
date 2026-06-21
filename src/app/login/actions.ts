"use server";

import { signIn } from "@/lib/auth";
import { AuthError } from "next-auth";

export async function loginWithOtp(email: string, otp: string, callbackUrl: string) {
  try {
    await signIn("email-otp", { email, otp, redirectTo: callbackUrl });
  } catch (error) {
    if (error instanceof AuthError) {
      return { error: "الرمز غير صحيح أو منتهي الصلاحية" };
    }
    throw error;
  }
}
