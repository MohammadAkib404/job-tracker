"use client";

import { JobStatus } from "@/app/generated/prisma/enums";
import Form from "@/components/Form";
import { getApplications } from "@/lib/actions";
import { Menu, Plus } from "lucide-react";
import { useEffect, useState } from "react";

type AP = {
  id: string;
  company: string;
  position: string;
  status: JobStatus;
  appliedAt: Date;
  salary: Number;
  contact: string;
  notes: string;
};

export default function Applications({ allApplications }: { allApplications: AP[] }) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

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
          <button onClick={() => setIsOpen(prev => !prev)} className="bg-green-400 flex items-center justify-center size-8 p-1.5 rounded-full">
            <Plus className="size-6" />
          </button>
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
            {allApplications.map((a, i) => (
              <tr key={i} className="*:border *:border-gray-300 *:p-2">
                <td>{a.company}</td>
                <td>{a.position}</td>
                <td>{a.status}</td>
                <td>{a.appliedAt.toDateString()}</td>
                <td>₹ {a.salary.toLocaleString("en-IN")}</td>
                <td>{a.contact}</td>
                <td>{a.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {isOpen && <div className="bg-white/70 fixed inset-0 z-50 backdrop-blur-xs flex items-center justify-center">
        <Form setIsOpen={setIsOpen} />
      </div>}
    </section>
  );
}
