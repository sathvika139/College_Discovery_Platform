import {
  getAllColleges,
  getCollegeById,
} from "@/repositories/college.repository";

export async function fetchColleges() {
  return getAllColleges();
}

export async function fetchCollege(id: string) {
  return getCollegeById(id);
}
