/*
  Warnings:

  - You are about to drop the `Task` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "JobStatus" AS ENUM ('Applied', 'Interview', 'Rejected', 'Offer');

-- DropTable
DROP TABLE "Task";

-- CreateTable
CREATE TABLE "Application" (
    "id" TEXT NOT NULL,
    "company" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "status" "JobStatus" NOT NULL,
    "appliedAt" TIMESTAMP(3) NOT NULL,
    "notes" TEXT,
    "link" TEXT,

    CONSTRAINT "Application_pkey" PRIMARY KEY ("id")
);
