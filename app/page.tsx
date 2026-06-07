import TaskList from "@/components/TaskList";
import * as actions from "@/lib/actions";

export default async function Home() {
  const tasks = await actions.getTasks();
  console.log(tasks)

  return (
   <TaskList tasks={tasks}/>
  );
}