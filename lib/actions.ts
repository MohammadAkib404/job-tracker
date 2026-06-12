"use server";

import { JobStatus } from "@/app/generated/prisma/enums";
import prisma from "./prisma";
import { revalidatePath } from "next/cache";

export async function createOrUpdateApplication(id: string | undefined, formData: FormData) {
  const company = formData.get("company") as string;
  const position = formData.get("position") as string;
  const status = formData.get("status") as JobStatus;
  const appliedAt = new Date(formData.get("appliedAt") as string);
  const salary = Number(formData.get("salary") as string);
  const contact = formData.get("contact") as string;
  const notes = formData.get("notes") as string;

  if (!company && !position && !status && !appliedAt && !salary && !contact && !notes) return;

  const applicationData = {
    company,
    position,
    status,
    appliedAt,
    contact,
    salary,
    notes,
  };

  if (!id) {
    await prisma.application.create({
      data: applicationData,
    });
  } else {
    await prisma.application.update({
      where: { id },
      data: applicationData,
    });
  }
  revalidatePath("/");
}
export async function getApplications() {
  return await prisma.application.findMany();
}

export async function findApplication(id: string) {
  return await prisma.application.findUnique({
    where: { id: id },
  });
}
export async function deleteApplication(id: string) {
  await prisma.application.delete({
    where: { id: id },
  });
  revalidatePath("/");
}
