import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F7F7F7] px-4">
      <div className="bg-white rounded-3xl shadow-xl p-10 max-w-md w-full text-center">
        <div className="text-7xl font-black text-[#3D3A5C] opacity-10 mb-2">404</div>
        <div className="text-5xl mb-4">🔍</div>
        <h1 className="text-2xl font-black text-[#3D3A5C] mb-2">الصفحة غير موجودة</h1>
        <p className="text-gray-500 text-sm mb-6">
          الصفحة التي تبحث عنها غير موجودة أو تم نقلها.
        </p>
        <Link
          href="/"
          className="inline-block px-8 py-3 rounded-2xl text-white font-bold"
          style={{ background: "linear-gradient(to right, #3D3A5C, #C46878)" }}
        >
          العودة للرئيسية
        </Link>
      </div>
    </div>
  );
}
