import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const session = await auth();
  if (!session?.user?.id) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  await params; // eventId not needed here, pollId is in body
  const { pollId, optionId, comment } = await req.json();

  const vote = await prisma.vote.upsert({
    where: { pollId_userId: { pollId, userId: session.user.id } },
    create: { pollId, optionId, userId: session.user.id, comment },
    update: { optionId, comment },
  });

  // Check for deadlock
  const poll = await prisma.poll.findUnique({
    where: { id: pollId },
    include: {
      options: { include: { votes: true } },
      votes: true,
      event: { include: { members: true } },
    },
  });

  if (poll && poll.status === "OPEN") {
    const totalEligible = poll.event.members.length + 1;
    const totalVoted = poll.votes.length;

    if (totalVoted >= totalEligible) {
      const tallies = poll.options.map((o) => o.votes.length);
      const max = Math.max(...tallies);
      const topCount = tallies.filter((t) => t === max).length;

      await prisma.poll.update({
        where: { id: pollId },
        data: { status: topCount > 1 ? "DEADLOCKED" : "CLOSED" },
      });
    }
  }

  return NextResponse.json(vote);
}
