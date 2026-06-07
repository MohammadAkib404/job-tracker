"use client" 
import { useState } from "react";
import * as actions from "../lib/actions";
import {Plus, Save, X } from "lucide-react";

type Task = {
  id: string,
  title: string,
  completed: boolean,
  createdAt: Date,
}

export default function TaskList({ tasks } : {tasks: Task[]}) {
  const [editingId, setEditingId] = useState<string | null>(null);

  const handleSubmit = async (formData: FormData) => {
    if (!editingId) return;
    await actions.updateTask(editingId, formData);
    setEditingId(null);
  }

  return (
    <section className="min-h-screen bg-slate-100 p-6">
      <div className="mx-auto max-w-2xl">
        <h1 className="mb-18 mt-3 text-center text-4xl font-bold">Task Flow 💻</h1>

        <div className="">
          <form action={actions.addTask} className="flex gap-3 bg-white p-5 rounded-lg">
            <input
              name="task-input"
              type="text"
              placeholder="Add your task..."
              className="bg-white flex-1 rounded-lg border border-gray-400 px-4 py-3 outline-none transition focus:ring-purple-300 focus:ring-2"
            />

            <button type="submit" className="bg-blue-600 rounded-lg p-3 text-white transition hover:scale-105 active:scale-95">
              <Plus strokeWidth={3} />
            </button>
          </form>
        </div>

        <div className="mt-8 space-y-3">
          {tasks.length === 0 ? (
            <div className="rounded-xl border bg-white p-6 text-center text-gray-500 shadow-sm">No tasks yet 🚀</div>
          ) : (
            tasks.map((task) => {
              return editingId === task.id ? (
                <form key={task.id} action={handleSubmit} className="flex gap-3 bg-white p-5 rounded-lg">
                  <input hidden readOnly type="text" name="id-input" value={task.id} />
                  <input
                    name="edit-input"
                    type="text"
                    placeholder="Edit your task..."
                    className="bg-white flex-1 rounded-lg border px-4 py-3 outline-none transition focus:ring-2"
                    defaultValue={task.title}
                  />
                  <button type="submit" className="inline-flex font-semibold space-x-2 bg-blue-600 rounded-md p-3 text-white transition hover:scale-105">
                    <Save strokeWidth={2} /> <span>Save</span>
                  </button>
                  <button onClick={() => setEditingId(null)} className="inline-flex font-semibold space-x-2 bg-red-500 rounded-md p-3 text-white transition hover:scale-105">
                    <X strokeWidth={3} /> <span>Cancel</span>
                  </button>
                </form>
              ) : (
                <div key={task.id} className="flex items-center justify-between rounded-xl border bg-white p-4 shadow-sm transition hover:shadow-md">
                  <p className="font-medium">{task.title}</p>

                  <div className="flex gap-2">
                    <button onClick={() => setEditingId(task.id)} className="rounded-md border px-3 py-1 text-sm hover:bg-gray-100">Edit</button>

                    <button className="rounded-md border px-3 py-1 text-sm hover:bg-gray-100">Delete</button>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
}
