import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { businessName, contactName, phone, email, category, city, notes } = body;

  if (!businessName || !contactName || !phone || !category) {
    return NextResponse.json({ error: "بيانات ناقصة" }, { status: 400 });
  }

  const application = await prisma.partnerApplication.create({
    data: { businessName, contactName, phone, email, category, city, notes },
  });

  return NextResponse.json(application);
}
