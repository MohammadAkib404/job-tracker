"use server";

import { JobStatus } from "@/app/generated/prisma/enums";
import prisma from "./prisma";

export async function createApplication(formData: FormData) {
  const company = formData.get("company") as string;
  const position = formData.get("position") as string;
  const status = formData.get("status") as JobStatus;
  const appliedAt = new Date(formData.get("appliedAt") as string);
  const salary = Number(formData.get("salary") as string);
  const contact = formData.get("contact") as string;
  const notes = formData.get("notes") as string;

  if (!company && !position && !status && !appliedAt && !salary && !contact && !notes) return;

  await prisma.application.create({
    data: {
      company,
      position,
      status,
      appliedAt,
      contact,
      salary,
      notes,
    },
  });
}
