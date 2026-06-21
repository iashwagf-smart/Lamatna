"use client";

import { useEffect } from "react";

export default function AdminPortalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => { console.error(error); }, [error]);

  return (
    <div className="flex-1 flex items-center justify-center p-8">
      <div className="bg-white rounded-3xl shadow p-8 max-w-sm w-full text-center">
        <div className="text-4xl mb-3">⚠️</div>
        <h2 className="text-lg font-black text-[#3D3A5C] mb-2">خطأ في لوحة الإدارة</h2>
        <p className="text-gray-400 text-sm mb-5">تعذّر تحميل هذه الصفحة.</p>
        <button
          onClick={reset}
          className="px-6 py-2 rounded-2xl text-white font-bold text-sm"
          style={{ background: "#3D3A5C" }}
        >
          حاول مجدداً
        </button>
      </div>
    </div>
  );
}
