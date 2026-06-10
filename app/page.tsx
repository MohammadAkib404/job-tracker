import * as actions from "@/lib/actions";
import prisma from "@/lib/prisma";
import { Menu, Plus } from "lucide-react";

export default async function Home() {
  const applications = await prisma.application.findMany();

  return (
    <section className="">
      <div className="bg-white max-w-7xl mx-auto p-8">
        <div>
          <h3 className="font-bold text-3xl mb-6">Job Application Tracker</h3>
          <span className="bg-gray-200 inline-flex items-center text-xs gap-1 rounded-full px-3 py-1.5">
            <Menu className="size-4" /> <span>Application History</span>
          </span>
        </div>
        <div className="flex justify-end">
          <button className="bg-green-400 flex items-center justify-center size-8 p-1.5 rounded-full"><Plus className="size-6"/></button>
        </div>
        <table className="w-full text-sm mx-auto mt-8">
         <thead>
           <tr className="*:border *:border-gray-300 text-gray-700 *:p-2">
            <th>Company</th>
            <th>Postion</th>
            <th>Status</th>
            <th>ApplicationDate</th>
            <th>Salary</th>
            <th>Notes</th>
            <th>Contact</th>
          </tr>
         </thead>
          <tbody>
            {applications.map((a, i) => (
            <tr key={i} className="*:border *:border-gray-300 *:p-2">
              <td>{a.company}</td>
              <td>{a.position}</td>
              <td>{a.status}</td>
              <td>{a.appliedAt.toDateString()}</td>
              <td>₹ {a.salary.toLocaleString("en-IN")}</td>
              <td>{a.notes}</td>
              <td>{a.contact}</td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
