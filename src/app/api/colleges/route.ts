import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: NextRequest) {
  const search = request.nextUrl.searchParams.get("search") || "";

  const page = Number(request.nextUrl.searchParams.get("page") || "1");

  const limit = 2;

  const colleges = await prisma.college.findMany({
    where: {
      name: {
        contains: search,
        mode: "insensitive",
      },
    },
    skip: (page - 1) * limit,
    take: limit,
  });

  return NextResponse.json(colleges);
}
