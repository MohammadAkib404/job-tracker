-- CreateEnum
CREATE TYPE "JobStatus" AS ENUM ('Applied', 'Interview', 'Rejected', 'Offer');

-- CreateTable
CREATE TABLE "Application" (
    "id" TEXT NOT NULL,
    "company" TEXT NOT NULL,
    "position" TEXT NOT NULL,
    "status" "JobStatus" NOT NULL,
    "appliedAt" TIMESTAMP(3) NOT NULL,
    "salary" INTEGER NOT NULL,
    "contact" TEXT NOT NULL,
    "notes" TEXT NOT NULL,

    CONSTRAINT "Application_pkey" PRIMARY KEY ("id")
);
