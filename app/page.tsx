import * as actions from "@/lib/actions";
import { Plus } from "lucide-react";

export default async function Home() {
  const tasks = await actions.getTasks();

  return (
    <main className="min-h-screen bg-slate-100 p-6">
      <div className="mx-auto max-w-2xl">
        <h1 className="mb-8 text-center text-4xl font-bold">
          Task Flow 💻
        </h1>

        <div className="rounded-xl border bg-white p-6 shadow-sm">
          <form action={actions.addTask} className="flex gap-3">
            <input
              name="task-input"
              type="text"
              placeholder="Add your task..."
              className="flex-1 rounded-lg border px-4 py-3 outline-none transition focus:ring-2"
            />

            <button
              type="submit"
              className="bg-green-400 rounded-full p-3 text-white transition hover:scale-105 active:scale-95"
            >
              <Plus strokeWidth={3}/>
            </button>
          </form>
        </div>

        <div className="mt-8 space-y-3">
          {tasks.length === 0 ? (
            <div className="rounded-xl border bg-white p-6 text-center text-gray-500 shadow-sm">
              No tasks yet 🚀
            </div>
          ) : (
            tasks.map((task) => (
              <div
                key={task.id}
                className="flex items-center justify-between rounded-xl border bg-white p-4 shadow-sm transition hover:shadow-md"
              >
                <p className="font-medium">{task.title}</p>

                <div className="flex gap-2">
                  <button className="rounded-md border px-3 py-1 text-sm hover:bg-gray-100">
                    Edit
                  </button>

                  <button className="rounded-md border px-3 py-1 text-sm hover:bg-gray-100">
                    Delete
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </main>
  );
}