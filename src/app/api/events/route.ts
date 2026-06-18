import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const session = await auth();
  if (!session?.user?.id) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const events = await prisma.event.findMany({
    where: {
      OR: [
        { ownerId: session.user.id },
        { members: { some: { userId: session.user.id } } },
      ],
    },
    include: { milestones: true, _count: { select: { members: true } } },
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json(events);
}

export async function POST(req: NextRequest) {
  const session = await auth();
  if (!session?.user?.id) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await req.json();
  const { type, title, date, budget, headcount, locationText } = body;

  const event = await prisma.event.create({
    data: {
      ownerId: session.user.id,
      type,
      title,
      date: new Date(date),
      budget: parseFloat(budget),
      headcount: parseInt(headcount),
      locationText,
    },
  });

  // Auto-generate budget lines
  const lines = [
    { category: "القاعة", pct: 0.4 },
    { category: "الضيافة", pct: 0.3 },
    { category: "التصوير", pct: 0.15 },
    { category: "الديكور", pct: 0.1 },
    { category: "الترفيه", pct: 0.05 },
  ];
  await prisma.budgetLine.createMany({
    data: lines.map((l) => ({
      eventId: event.id,
      category: l.category,
      allocated: event.budget * l.pct,
    })),
  });

  return NextResponse.json(event);
}
