import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { generateInviteToken } from "@/lib/utils";

export async function GET(_: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const gattah = await prisma.gattah.findUnique({
    where: { eventId: id },
    include: { contributions: { include: { user: true } } },
  });
  return NextResponse.json(gattah);
}

export async function POST(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const session = await auth();
  if (!session?.user?.id) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { id } = await params;
  const { mode, targetAmount, windowClosesAt, shortfallOption } = await req.json();

  const gattah = await prisma.gattah.create({
    data: {
      eventId: id,
      mode,
      targetAmount: parseFloat(targetAmount),
      windowClosesAt: new Date(windowClosesAt),
      shortfallOption,
      poolLink: mode === "OPEN_POOL" ? generateInviteToken() : undefined,
    },
  });

  return NextResponse.json(gattah);
}

export async function PATCH(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const session = await auth();
  if (!session?.user?.id) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { id } = await params;
  const { amount } = await req.json();

  const gattah = await prisma.gattah.findUnique({ where: { eventId: id } });
  if (!gattah) return NextResponse.json({ error: "Not found" }, { status: 404 });

  const newRaised = gattah.raisedAmount + parseFloat(amount);
  const funded = newRaised >= gattah.targetAmount;

  const [contribution, updated] = await prisma.$transaction([
    prisma.gattahContribution.create({
      data: { gattahId: gattah.id, userId: session.user.id, amount: parseFloat(amount) },
    }),
    prisma.gattah.update({
      where: { id: gattah.id },
      data: { raisedAmount: newRaised, status: funded ? "FUNDED" : "OPEN" },
    }),
  ]);

  return NextResponse.json({ contribution, gattah: updated });
}
