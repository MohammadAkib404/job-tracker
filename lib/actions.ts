"use server";
import { revalidatePath } from "next/cache";
import prisma from "./prisma";

export async function addTask(formData: FormData) {
  const title = formData.get("task-input") as string;
  await prisma.task.create({
    data:{
      title,
    },
  })
  revalidatePath("/")
}

export async function getTasks(){
  const allTasks = await prisma.task.findMany({
    orderBy:{
      createdAt: "asc"
    }
  })

  return allTasks;
}

