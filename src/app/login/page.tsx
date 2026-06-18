import { Suspense } from "react";
import { LoginForm } from "./LoginForm";

export default function LoginPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#ffffff] flex items-center justify-center">جارٍ التحميل...</div>}>
      <LoginForm />
    </Suspense>
  );
}
