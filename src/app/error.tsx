"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F7F7F7] px-4">
      <div className="bg-white rounded-3xl shadow-xl p-10 max-w-md w-full text-center">
        <div className="text-6xl mb-4">😕</div>
        <h1 className="text-2xl font-black text-[#3D3A5C] mb-2">حدث خطأ ما</h1>
        <p className="text-gray-500 text-sm mb-6">
          نعتذر عن هذا الخطأ. يمكنك المحاولة مجدداً أو العودة للرئيسية.
        </p>
        <div className="flex gap-3 justify-center">
          <button
            onClick={reset}
            className="px-6 py-2 rounded-2xl text-white font-bold text-sm"
            style={{ background: "linear-gradient(to right, #3D3A5C, #C46878)" }}
          >
            حاول مجدداً
          </button>
          <Link
            href="/"
            className="px-6 py-2 rounded-2xl border-2 border-gray-200 font-bold text-sm text-gray-600 hover:border-[#3D3A5C]"
          >
            الرئيسية
          </Link>
        </div>
      </div>
    </div>
  );
}
