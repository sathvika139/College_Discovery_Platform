import { prisma } from "@/lib/prisma";

export async function getAllColleges() {
  return prisma.college.findMany();
}

export async function getCollegeById(id: string) {
  return prisma.college.findUnique({
    where: { id },
    include: {
      courses: true,
      placements: true,
      reviews: true,
    },
  });
}
