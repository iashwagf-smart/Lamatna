import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function GET(_: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const session = await auth();
  if (!session?.user?.id) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { id } = await params;
  const polls = await prisma.poll.findMany({
    where: { eventId: id },
    include: { options: { include: { votes: true } }, votes: true },
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json(polls);
}

export async function POST(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const session = await auth();
  if (!session?.user?.id) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { id } = await params;
  const { question, options, closedAt } = await req.json();

  const poll = await prisma.poll.create({
    data: {
      eventId: id,
      question,
      closedAt: closedAt ? new Date(closedAt) : undefined,
      options: {
        create: options.map((opt: { label: string; imageUrl?: string; vendorId?: string }) => ({
          label: opt.label,
          imageUrl: opt.imageUrl,
          vendorId: opt.vendorId,
        })),
      },
    },
    include: { options: true },
  });

  return NextResponse.json(poll);
}
