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
    role: "Software Engineer Intern",
    status: JobStatus.Interview,
    appliedAt: new Date("2026-04-12"),
    notes: "Completed OA. Waiting for technical round.",
    link: "https://careers.google.com",
  },
  {
    company: "Microsoft",
    role: "Frontend Developer Intern",
    status: JobStatus.Applied,
    appliedAt: new Date("2026-05-01"),
    notes: "Applied through careers portal.",
    link: "https://careers.microsoft.com",
  },
  {
    company: "Amazon",
    role: "SDE Intern",
    status: JobStatus.Rejected,
    appliedAt: new Date("2026-03-15"),
    notes: "Rejected after OA.",
    link: "https://www.amazon.jobs",
  },
  {
    company: "Meta",
    role: "Frontend Engineer Intern",
    status: JobStatus.Applied,
    appliedAt: new Date("2026-04-20"),
    notes: "Recruiter screening scheduled.",
    link: "https://www.metacareers.com",
  },
  {
    company: "Netflix",
    role: "Software Engineer Intern",
    status: JobStatus.Interview,
    appliedAt: new Date("2026-05-18"),
    notes: "Applied via referral.",
    link: "https://jobs.netflix.com",
  },
  {
    company: "Adobe",
    role: "Full Stack Developer Intern",
    status: JobStatus.Offer,
    appliedAt: new Date("2026-02-10"),
    notes: "Received internship offer.",
    link: "https://careers.adobe.com",
  },
  {
    company: "Atlassian",
    role: "Software Engineer Intern",
    status: JobStatus.Applied,
    appliedAt: new Date("2026-05-10"),
    notes: "Resume shortlisted.",
    link: "https://www.atlassian.com/company/careers",
  },
  {
    company: "Spotify",
    role: "Frontend Engineer",
    status: JobStatus.Rejected,
    appliedAt: new Date("2026-01-25"),
    notes: "Rejected after resume screening.",
    link: "https://www.lifeatspotify.com",
  },
  {
    company: "Airbnb",
    role: "Software Engineer Intern",
    status: JobStatus.Interview,
    appliedAt: new Date("2026-04-08"),
    notes: "Technical interview next week.",
    link: "https://careers.airbnb.com",
  },
  {
    company: "Uber",
    role: "Backend Engineer Intern",
    status: JobStatus.Applied,
    appliedAt: new Date("2026-05-05"),
    notes: "Applied through campus drive.",
    link: "https://www.uber.com/careers",
  },
  {
    company: "LinkedIn",
    role: "Software Engineer Intern",
    status: JobStatus.Rejected,
    appliedAt: new Date("2026-02-14"),
    notes: "Did not pass OA.",
    link: "https://careers.linkedin.com",
  },
  {
    company: "Stripe",
    role: "Backend Engineer",
    status: JobStatus.Interview,
    appliedAt: new Date("2026-03-28"),
    notes: "Phone screen completed.",
    link: "https://stripe.com/jobs",
  },
  {
    company: "Coinbase",
    role: "Software Engineer Intern",
    status: JobStatus.Applied,
    appliedAt: new Date("2026-05-14"),
    notes: "Awaiting recruiter response.",
    link: "https://www.coinbase.com/careers",
  },
  {
    company: "Dropbox",
    role: "Frontend Engineer",
    status: JobStatus.Rejected,
    appliedAt: new Date("2026-03-05"),
    notes: "Position filled.",
    link: "https://jobs.dropbox.com",
  },
  {
    company: "Oracle",
    role: "Software Developer Intern",
    status: JobStatus.Applied,
    appliedAt: new Date("2026-05-12"),
    notes: "Applied through LinkedIn.",
    link: "https://www.oracle.com/careers",
  },
  {
    company: "Salesforce",
    role: "Full Stack Intern",
    status: JobStatus.Interview,
    appliedAt: new Date("2026-04-17"),
    notes: "Manager round pending.",
    link: "https://careers.salesforce.com",
  },
  {
    company: "Intel",
    role: "Software Engineering Intern",
    status: JobStatus.Applied,
    appliedAt: new Date("2026-05-02"),
    notes: "Campus hiring application.",
    link: "https://jobs.intel.com",
  },
  {
    company: "NVIDIA",
    role: "Developer Technology Intern",
    status: JobStatus.Offer,
    appliedAt: new Date("2026-02-22"),
    notes: "Offer received after final round.",
    link: "https://www.nvidia.com/en-us/about-nvidia/careers",
  },
  {
    company: "Cisco",
    role: "Software Engineer Intern",
    status: JobStatus.Rejected,
    appliedAt: new Date("2026-03-19"),
    notes: "Rejected after interview.",
    link: "https://jobs.cisco.com",
  },
  {
    company: "IBM",
    role: "Associate Developer",
    status: JobStatus.Interview,
    appliedAt: new Date("2026-05-20"),
    notes: "Application submitted.",
    link: "https://www.ibm.com/careers",
  },
  {
    company: "Infosys",
    role: "Systems Engineer",
    status: JobStatus.Applied,
    appliedAt: new Date("2026-04-30"),
    notes: "HR round completed.",
    link: "https://career.infosys.com",
  },
  {
    company: "TCS",
    role: "Software Engineer",
    status: JobStatus.Applied,
    appliedAt: new Date("2026-05-15"),
    notes: "NQT-based application.",
    link: "https://www.tcs.com/careers",
  },
  {
    company: "Wipro",
    role: "Project Engineer",
    status: JobStatus.Rejected,
    appliedAt: new Date("2026-02-28"),
    notes: "Not shortlisted.",
    link: "https://careers.wipro.com",
  },
  {
    company: "Zoho",
    role: "Web Developer",
    status: JobStatus.Applied,
    appliedAt: new Date("2026-04-09"),
    notes: "Coding round cleared.",
    link: "https://www.zoho.com/careers",
  },
  {
    company: "Razorpay",
    role: "Software Development Intern",
    status: JobStatus.Interview,
    appliedAt: new Date("2026-05-17"),
    notes: "Applied through careers page.",
    link: "https://razorpay.com/jobs",
  },
  {
    company: "Flipkart",
    role: "SDE Intern",
    status: JobStatus.Applied,
    appliedAt: new Date("2026-04-24"),
    notes: "Technical round scheduled.",
    link: "https://www.flipkartcareers.com",
  },
  {
    company: "Swiggy",
    role: "Backend Engineer Intern",
    status: JobStatus.Applied,
    appliedAt: new Date("2026-05-08"),
    notes: "Referral application.",
    link: "https://careers.swiggy.com",
  },
  {
    company: "Zomato",
    role: "Software Engineer",
    status: JobStatus.Rejected,
    appliedAt: new Date("2026-03-12"),
    notes: "Position closed.",
    link: "https://www.zomato.com/careers",
  },
  {
    company: "Paytm",
    role: "Frontend Developer",
    status: JobStatus.Applied,
    appliedAt: new Date("2026-05-11"),
    notes: "Applied through job portal.",
    link: "https://paytm.com/careers",
  },
  {
    company: "PhonePe",
    role: "Software Engineer Intern",
    status: JobStatus.Offer,
    appliedAt: new Date("2026-02-18"),
    notes: "Offer accepted.",
    link: "https://www.phonepe.com/careers",
  },
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
