import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;

  const college = await prisma.college.findUnique({
    where: { id },
    include: {
      courses: true,
      placements: true,
      reviews: true,
    },
  });

  return NextResponse.json(college);
}
