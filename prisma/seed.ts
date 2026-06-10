import "dotenv/config";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import { JobStatus, PrismaClient } from "@/app/generated/prisma/client";

const connectionString = `${process.env.DATABASE_URL}`;
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

const applications = [
  {
    company: "Google",
    position: "Software Engineer Intern",
    status: JobStatus.Interview,
    appliedAt: new Date("2026-05-01"),
    salary: 1800000,
    contact: "recruiting@google.com",
    notes: "Completed OA and scheduled technical interview."
  },
  {
    company: "Microsoft",
    position: "Frontend Developer Intern",
    status: JobStatus.Applied,
    appliedAt: new Date("2026-05-04"),
    salary: 1500000,
    contact: "careers@microsoft.com",
    notes: "Applied through careers portal."
  },
  {
    company: "Amazon",
    position: "SDE Intern",
    status: JobStatus.Rejected,
    appliedAt: new Date("2026-04-15"),
    salary: 1700000,
    contact: "studentprograms@amazon.com",
    notes: "Rejected after online assessment."
  },
  {
    company: "Meta",
    position: "Frontend Engineer Intern",
    status: JobStatus.Interview,
    appliedAt: new Date("2026-05-03"),
    salary: 1900000,
    contact: "internships@meta.com",
    notes: "Recruiter screening completed."
  },
  {
    company: "Netflix",
    position: "Software Engineer Intern",
    status: JobStatus.Applied,
    appliedAt: new Date("2026-05-10"),
    salary: 2200000,
    contact: "jobs@netflix.com",
    notes: "Application submitted via referral."
  },
  {
    company: "Adobe",
    position: "Full Stack Developer Intern",
    status: JobStatus.Offer,
    appliedAt: new Date("2026-04-02"),
    salary: 1600000,
    contact: "university@adobe.com",
    notes: "Received offer after final round."
  },
  {
    company: "Atlassian",
    position: "Software Engineer Intern",
    status: JobStatus.Applied,
    appliedAt: new Date("2026-05-07"),
    salary: 1750000,
    contact: "careers@atlassian.com",
    notes: "Awaiting recruiter response."
  },
  {
    company: "Stripe",
    position: "Backend Engineer Intern",
    status: JobStatus.Interview,
    appliedAt: new Date("2026-04-28"),
    salary: 2500000,
    contact: "jobs@stripe.com",
    notes: "Phone screen cleared."
  },
  {
    company: "Airbnb",
    position: "Software Engineer Intern",
    status: JobStatus.Applied,
    appliedAt: new Date("2026-05-08"),
    salary: 2100000,
    contact: "internships@airbnb.com",
    notes: "Applied through company website."
  },
  {
    company: "Uber",
    position: "Backend Engineer Intern",
    status: JobStatus.Rejected,
    appliedAt: new Date("2026-04-20"),
    salary: 1800000,
    contact: "careers@uber.com",
    notes: "Did not proceed after resume screening."
  },
  {
    company: "LinkedIn",
    position: "Software Engineer Intern",
    status: JobStatus.Applied,
    appliedAt: new Date("2026-05-12"),
    salary: 1700000,
    contact: "students@linkedin.com",
    notes: "Application submitted through LinkedIn Jobs."
  },
  {
    company: "NVIDIA",
    position: "Developer Technology Intern",
    status: JobStatus.Offer,
    appliedAt: new Date("2026-03-30"),
    salary: 2400000,
    contact: "careers@nvidia.com",
    notes: "Offer accepted."
  },
  {
    company: "Oracle",
    position: "Software Developer Intern",
    status: JobStatus.Applied,
    appliedAt: new Date("2026-05-06"),
    salary: 1400000,
    contact: "graduates@oracle.com",
    notes: "Applied through campus hiring."
  },
  {
    company: "Salesforce",
    position: "Full Stack Intern",
    status: JobStatus.Interview,
    appliedAt: new Date("2026-04-25"),
    salary: 1800000,
    contact: "university@salesforce.com",
    notes: "Technical interview next week."
  },
  {
    company: "Intel",
    position: "Software Engineering Intern",
    status: JobStatus.Applied,
    appliedAt: new Date("2026-05-02"),
    salary: 1300000,
    contact: "careers@intel.com",
    notes: "Application under review."
  },
  {
    company: "IBM",
    position: "Associate Developer",
    status: JobStatus.Applied,
    appliedAt: new Date("2026-05-11"),
    salary: 900000,
    contact: "recruitment@ibm.com",
    notes: "Applied through company portal."
  },
  {
    company: "Infosys",
    position: "Systems Engineer",
    status: JobStatus.Interview,
    appliedAt: new Date("2026-04-29"),
    salary: 650000,
    contact: "campus@infosys.com",
    notes: "HR round completed."
  },
  {
    company: "TCS",
    position: "Software Engineer",
    status: JobStatus.Applied,
    appliedAt: new Date("2026-05-09"),
    salary: 700000,
    contact: "careers@tcs.com",
    notes: "Applied through NQT process."
  },
  {
    company: "Wipro",
    position: "Project Engineer",
    status: JobStatus.Rejected,
    appliedAt: new Date("2026-04-10"),
    salary: 650000,
    contact: "recruitment@wipro.com",
    notes: "Not shortlisted after assessment."
  },
  {
    company: "Zoho",
    position: "Web Developer",
    status: JobStatus.Interview,
    appliedAt: new Date("2026-05-05"),
    salary: 1000000,
    contact: "jobs@zohocorp.com",
    notes: "Coding round cleared."
  },
  {
    company: "Razorpay",
    position: "Software Development Intern",
    status: JobStatus.Applied,
    appliedAt: new Date("2026-05-14"),
    salary: 1500000,
    contact: "careers@razorpay.com",
    notes: "Applied via careers page."
  },
  {
    company: "Flipkart",
    position: "SDE Intern",
    status: JobStatus.Interview,
    appliedAt: new Date("2026-04-27"),
    salary: 1600000,
    contact: "campus@flipkart.com",
    notes: "Technical round scheduled."
  },
  {
    company: "Swiggy",
    position: "Backend Engineer Intern",
    status: JobStatus.Applied,
    appliedAt: new Date("2026-05-15"),
    salary: 1400000,
    contact: "jobs@swiggy.in",
    notes: "Applied through referral."
  },
  {
    company: "Zomato",
    position: "Software Engineer",
    status: JobStatus.Rejected,
    appliedAt: new Date("2026-04-18"),
    salary: 1300000,
    contact: "careers@zomato.com",
    notes: "Position closed before interview."
  },
  {
    company: "PhonePe",
    position: "Software Engineer Intern",
    status: JobStatus.Offer,
    appliedAt: new Date("2026-03-20"),
    salary: 1800000,
    contact: "recruitment@phonepe.com",
    notes: "Offer accepted after final round."
  }
];

async function main() {
  console.log("🌱 Seeding database...");

  await prisma.application.deleteMany();

  // createMany expects enum-typed status; cast status strings to Prisma.JobStatus
  await prisma.application.createMany({
    data: applications
  });

  console.log(`✅ Seeded ${applications.length} applications`);
}
main()
  .then(async () => {
    await prisma.$disconnect();
    await pool.end();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    await pool.end();
    process.exit(1);
  });
