"use server";
import { revalidatePath } from "next/cache";
import prisma from "./prisma";

export async function addTask(formData: FormData) {
  const title = formData.get("task-input") as string;
  await prisma.task.create({
    data: {
      title,
    },
  });
  revalidatePath("/");
}

export async function getTasks() {
  const allTasks = await prisma.task.findMany({
    orderBy: {
      createdAt: "asc",
    },
  });

  return allTasks;
}

export async function updateTask(id: string, formData: FormData) {
  console.log(id);
  const title = formData.get("edit-input") as string;
  console.log(title);
  await prisma.task.update({
    where: {id},
    data: {title}
  })
  revalidatePath("/")
}

export async function deleteTask(id: string){
  await prisma.task.delete({
    where: {id}
  })
  revalidatePath("/")
}

export async function toggleTaskCompletion(id: string, completed: boolean){
  await prisma.task.update({
    where: {id},
    data: {completed}
  })
  revalidatePath("/")
}
