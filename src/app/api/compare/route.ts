import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: NextRequest) {
  const { ids } = await request.json();

  const colleges = await prisma.college.findMany({
    where: {
      id: {
        in: ids,
      },
    },
    include: {
      placements: true,
    },
  });

  return NextResponse.json(colleges);
}
