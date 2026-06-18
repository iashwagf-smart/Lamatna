import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-cairo",
  display: "swap",
});

export const metadata: Metadata = {
  title: "لمتنا – منصة تنظيم الفعاليات الاجتماعية",
  description:
    "منصة لمتنا لتنظيم الفعاليات الاجتماعية بشكل جماعي وتشاركي. احتفل بلحظاتك المميزة مع عائلتك وأصدقائك.",
  keywords: ["لمتنا", "فعاليات", "حفلات", "تخرج", "زفاف", "مجموعة"],
  openGraph: {
    title: "لمتنا – منصة تنظيم الفعاليات",
    description: "نظّم فعاليتك المثالية مع مجموعتك",
    locale: "ar_SA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className={cairo.variable}>
      <body className="font-[family-name:var(--font-cairo)] bg-[#FFFBF5] text-[#1a1a2e]">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
