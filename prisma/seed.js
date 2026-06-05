const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  // Colleges
  const iit = await prisma.college.create({
    data: {
      name: "IIT Hyderabad",
      location: "Hyderabad",
      fees: 250000,
      rating: 4.8,
    },
  });

  const nit = await prisma.college.create({
    data: {
      name: "NIT Warangal",
      location: "Warangal",
      fees: 180000,
      rating: 4.6,
    },
  });

  const jntuh = await prisma.college.create({
    data: {
      name: "JNTUH",
      location: "Hyderabad",
      fees: 120000,
      rating: 4.2,
    },
  });

  const iiit = await prisma.college.create({
    data: {
      name: "IIIT Hyderabad",
      location: "Hyderabad",
      fees: 300000,
      rating: 4.9,
    },
  });

  const osmania = await prisma.college.create({
    data: {
      name: "Osmania University",
      location: "Hyderabad",
      fees: 50000,
      rating: 4.1,
    },
  });

  const vit = await prisma.college.create({
    data: {
      name: "VIT Vellore",
      location: "Vellore",
      fees: 220000,
      rating: 4.5,
    },
  });

  const bits = await prisma.college.create({
    data: {
      name: "BITS Pilani",
      location: "Pilani",
      fees: 450000,
      rating: 4.9,
    },
  });

  const iitm = await prisma.college.create({
    data: {
      name: "IIT Madras",
      location: "Chennai",
      fees: 260000,
      rating: 4.9,
    },
  });

  // IIT Courses
  await prisma.course.createMany({
    data: [
      { name: "B.Tech CSE", duration: "4 Years", collegeId: iit.id },
      { name: "B.Tech ECE", duration: "4 Years", collegeId: iit.id },
      { name: "B.Tech AI & ML", duration: "4 Years", collegeId: iit.id },
      { name: "B.Tech Mechanical", duration: "4 Years", collegeId: iit.id },
      { name: "B.Tech Civil", duration: "4 Years", collegeId: iit.id },
      { name: "B.Tech Electrical", duration: "4 Years", collegeId: iit.id },
      { name: "B.Tech Chemical", duration: "4 Years", collegeId: iit.id },
      { name: "M.Tech CSE", duration: "2 Years", collegeId: iit.id },
      { name: "M.Tech AI", duration: "2 Years", collegeId: iit.id },
      { name: "MBA", duration: "2 Years", collegeId: iit.id },
    ],
  });

  // NIT Courses
  await prisma.course.createMany({
    data: [
      { name: "B.Tech CSE", duration: "4 Years", collegeId: nit.id },
      { name: "B.Tech IT", duration: "4 Years", collegeId: nit.id },
      { name: "B.Tech ECE", duration: "4 Years", collegeId: nit.id },
      { name: "B.Tech EEE", duration: "4 Years", collegeId: nit.id },
      { name: "M.Tech CSE", duration: "2 Years", collegeId: nit.id },
    ],
  });

  // JNTUH Courses
  await prisma.course.createMany({
    data: [
      { name: "B.Tech CSE", duration: "4 Years", collegeId: jntuh.id },
      { name: "B.Tech ECE", duration: "4 Years", collegeId: jntuh.id },
      { name: "B.Tech Civil", duration: "4 Years", collegeId: jntuh.id },
    ],
  });

  // IIIT Courses
  await prisma.course.createMany({
    data: [
      { name: "B.Tech CSE", duration: "4 Years", collegeId: iiit.id },
      { name: "B.Tech AI", duration: "4 Years", collegeId: iiit.id },
      { name: "B.Tech Data Science", duration: "4 Years", collegeId: iiit.id },
    ],
  });

  await prisma.course.createMany({
    data: [
      { name: "B.Tech CSE", duration: "4 Years", collegeId: vit.id },
      { name: "B.Tech AI & ML", duration: "4 Years", collegeId: vit.id },
      { name: "B.Tech Data Science", duration: "4 Years", collegeId: vit.id },
      { name: "B.Tech IT", duration: "4 Years", collegeId: vit.id },
      { name: "B.Tech ECE", duration: "4 Years", collegeId: vit.id },
      { name: "B.Tech EEE", duration: "4 Years", collegeId: vit.id },
      { name: "M.Tech CSE", duration: "2 Years", collegeId: vit.id },
      { name: "MBA", duration: "2 Years", collegeId: vit.id },
    ],
  });

  await prisma.course.createMany({
    data: [
      { name: "B.E CSE", duration: "4 Years", collegeId: bits.id },
      { name: "B.E Electronics", duration: "4 Years", collegeId: bits.id },
      { name: "B.E Mechanical", duration: "4 Years", collegeId: bits.id },
      { name: "B.E Chemical", duration: "4 Years", collegeId: bits.id },
      { name: "B.E Civil", duration: "4 Years", collegeId: bits.id },
      { name: "B.E AI", duration: "4 Years", collegeId: bits.id },
      { name: "M.E Software Systems", duration: "2 Years", collegeId: bits.id },
      { name: "MBA", duration: "2 Years", collegeId: bits.id },
    ],
  });

  await prisma.course.createMany({
    data: [
      { name: "B.Tech CSE", duration: "4 Years", collegeId: osmania.id },
      { name: "B.Tech ECE", duration: "4 Years", collegeId: osmania.id },
      { name: "B.Tech Mechanical", duration: "4 Years", collegeId: osmania.id },
      { name: "B.Tech Civil", duration: "4 Years", collegeId: osmania.id },
      {
        name: "B.Sc Computer Science",
        duration: "3 Years",
        collegeId: osmania.id,
      },
      { name: "BCA", duration: "3 Years", collegeId: osmania.id },
      { name: "MBA", duration: "2 Years", collegeId: osmania.id },
      { name: "MCA", duration: "2 Years", collegeId: osmania.id },
    ],
  });

  await prisma.course.createMany({
    data: [
      { name: "B.Tech CSE", duration: "4 Years", collegeId: iitm.id },
      { name: "B.Tech AI", duration: "4 Years", collegeId: iitm.id },
      { name: "B.Tech Mechanical", duration: "4 Years", collegeId: iitm.id },
      { name: "B.Tech Civil", duration: "4 Years", collegeId: iitm.id },
      { name: "B.Tech Electrical", duration: "4 Years", collegeId: iitm.id },
      { name: "B.Tech Aerospace", duration: "4 Years", collegeId: iitm.id },
      { name: "M.Tech CSE", duration: "2 Years", collegeId: iitm.id },
      { name: "MBA", duration: "2 Years", collegeId: iitm.id },
    ],
  });

  // Placements
  await prisma.placement.create({
    data: {
      averageCTC: 18,
      highestCTC: 65,
      collegeId: iit.id,
    },
  });

  await prisma.placement.create({
    data: {
      averageCTC: 14,
      highestCTC: 42,
      collegeId: nit.id,
    },
  });

  await prisma.placement.create({
    data: {
      averageCTC: 8,
      highestCTC: 22,
      collegeId: jntuh.id,
    },
  });

  await prisma.placement.create({
    data: {
      averageCTC: 22,
      highestCTC: 80,
      collegeId: iiit.id,
    },
  });

  await prisma.placement.create({
    data: {
      averageCTC: 7,
      highestCTC: 18,
      collegeId: osmania.id,
    },
  });

  await prisma.placement.create({
    data: {
      averageCTC: 12,
      highestCTC: 45,
      collegeId: vit.id,
    },
  });

  await prisma.placement.create({
    data: {
      averageCTC: 28,
      highestCTC: 90,
      collegeId: bits.id,
    },
  });

  await prisma.placement.create({
    data: {
      averageCTC: 20,
      highestCTC: 70,
      collegeId: iitm.id,
    },
  });

  // IIT Reviews
  await prisma.review.createMany({
    data: [
      {
        userName: "Rahul",
        comment: "Excellent placements",
        rating: 4.8,
        collegeId: iit.id,
      },
      {
        userName: "Priya",
        comment: "Great campus",
        rating: 4.5,
        collegeId: iit.id,
      },
      {
        userName: "Arjun",
        comment: "Amazing research opportunities",
        rating: 4.9,
        collegeId: iit.id,
      },
      {
        userName: "Sneha",
        comment: "Top faculty members",
        rating: 4.7,
        collegeId: iit.id,
      },
      {
        userName: "Vikas",
        comment: "Strong coding culture",
        rating: 4.8,
        collegeId: iit.id,
      },
    ],
  });

  await prisma.review.createMany({
    data: [
      {
        userName: "Kiran",
        comment: "Good faculty and labs",
        rating: 4.6,
        collegeId: nit.id,
      },
      {
        userName: "Divya",
        comment: "Excellent hostel facilities",
        rating: 4.5,
        collegeId: nit.id,
      },
      { userName: "Ajay", comment: "Good ROI", rating: 4.7, collegeId: nit.id },
      {
        userName: "Pooja",
        comment: "Strong placements",
        rating: 4.6,
        collegeId: nit.id,
      },
      {
        userName: "Harsha",
        comment: "Good coding clubs",
        rating: 4.4,
        collegeId: nit.id,
      },
    ],
  });

  await prisma.review.createMany({
    data: [
      {
        userName: "Anjali",
        comment: "Affordable education",
        rating: 4.2,
        collegeId: jntuh.id,
      },
      {
        userName: "Rakesh",
        comment: "Large campus",
        rating: 4.1,
        collegeId: jntuh.id,
      },
      {
        userName: "Teja",
        comment: "Good professors",
        rating: 4.0,
        collegeId: jntuh.id,
      },
      {
        userName: "Siri",
        comment: "Decent placements",
        rating: 4.1,
        collegeId: jntuh.id,
      },
      {
        userName: "Mounika",
        comment: "Good value for money",
        rating: 4.3,
        collegeId: jntuh.id,
      },
    ],
  });

  await prisma.review.createMany({
    data: [
      {
        userName: "Nikhil",
        comment: "Best AI curriculum",
        rating: 4.9,
        collegeId: iiit.id,
      },
      {
        userName: "Sathish",
        comment: "Excellent coding culture",
        rating: 5.0,
        collegeId: iiit.id,
      },
      {
        userName: "Meghana",
        comment: "Strong research",
        rating: 4.9,
        collegeId: iiit.id,
      },
      {
        userName: "Deepak",
        comment: "Industry exposure",
        rating: 4.8,
        collegeId: iiit.id,
      },
      {
        userName: "Akhil",
        comment: "Top tech college",
        rating: 5.0,
        collegeId: iiit.id,
      },
    ],
  });

  await prisma.review.createMany({
    data: [
      {
        userName: "Rani",
        comment: "Affordable and reputed",
        rating: 4.2,
        collegeId: osmania.id,
      },
      {
        userName: "Venu",
        comment: "Historic university",
        rating: 4.1,
        collegeId: osmania.id,
      },
      {
        userName: "Charan",
        comment: "Good faculty",
        rating: 4.0,
        collegeId: osmania.id,
      },
      {
        userName: "Naveen",
        comment: "Decent placements",
        rating: 4.1,
        collegeId: osmania.id,
      },
      {
        userName: "Kavya",
        comment: "Good campus life",
        rating: 4.3,
        collegeId: osmania.id,
      },
    ],
  });

  await prisma.review.createMany({
    data: [
      {
        userName: "Vamsi",
        comment: "Modern infrastructure",
        rating: 4.5,
        collegeId: vit.id,
      },
      {
        userName: "Sowmya",
        comment: "Good placements",
        rating: 4.6,
        collegeId: vit.id,
      },
      {
        userName: "Pranay",
        comment: "Many opportunities",
        rating: 4.5,
        collegeId: vit.id,
      },
      {
        userName: "Anu",
        comment: "Good clubs",
        rating: 4.4,
        collegeId: vit.id,
      },
      {
        userName: "Abhi",
        comment: "Industry focused",
        rating: 4.6,
        collegeId: vit.id,
      },
    ],
  });

  await prisma.review.createMany({
    data: [
      {
        userName: "Rohit",
        comment: "Top private college",
        rating: 4.9,
        collegeId: bits.id,
      },
      {
        userName: "Varun",
        comment: "Excellent startup culture",
        rating: 5.0,
        collegeId: bits.id,
      },
      {
        userName: "Nandini",
        comment: "Amazing academics",
        rating: 4.8,
        collegeId: bits.id,
      },
      {
        userName: "Surya",
        comment: "Great placements",
        rating: 4.9,
        collegeId: bits.id,
      },
      {
        userName: "Keerthi",
        comment: "Flexible curriculum",
        rating: 4.9,
        collegeId: bits.id,
      },
    ],
  });

  await prisma.review.createMany({
    data: [
      {
        userName: "Aravind",
        comment: "Excellent research",
        rating: 4.9,
        collegeId: iitm.id,
      },
      {
        userName: "Bhavana",
        comment: "Top IIT experience",
        rating: 4.9,
        collegeId: iitm.id,
      },
      {
        userName: "Sai",
        comment: "Amazing faculty",
        rating: 5.0,
        collegeId: iitm.id,
      },
      {
        userName: "Krishna",
        comment: "Strong placements",
        rating: 4.8,
        collegeId: iitm.id,
      },
      {
        userName: "Manasa",
        comment: "Best campus life",
        rating: 4.9,
        collegeId: iitm.id,
      },
    ],
  });

  console.log("Seeded Successfully");
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
