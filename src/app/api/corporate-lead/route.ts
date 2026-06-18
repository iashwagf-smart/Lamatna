import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { company, contact, phone, email, eventType, budget, cadence, employees, notes } = body;

  if (!company || !contact || !phone) {
    return NextResponse.json({ error: "بيانات ناقصة" }, { status: 400 });
  }

  const lead = await prisma.corporateLead.create({
    data: {
      company, contact, phone, email, eventType,
      budget: budget ? parseFloat(budget) : undefined,
      cadence,
      employees: employees ? parseInt(employees) : undefined,
      notes,
    },
  });

  return NextResponse.json(lead);
}
