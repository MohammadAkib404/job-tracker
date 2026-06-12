"use client";

import { AP, StatsBar, StatusBadge } from "@/components/UtilsComp";
import Form from "@/components/Form";
import { deleteApplication, findApplication } from "@/lib/actions";
import { Edit2, Plus, Trash2, Briefcase } from "lucide-react";
import { useEffect, useState } from "react";

export type ST = "Total" | "Applied" | "Interview" | "Offer" | "Rejected";

export default function Applications({ allApplications }: { allApplications: AP[] }) {
  const [isOpen, setIsOpen] = useState(false);
  const [applicationData, setApplicationData] = useState<AP | null>(null);
  const [selected, setSelected] = useState<ST>("Total");

  let applications = selected === "Total" ? allApplications : allApplications.filter((a) => a.status === selected);

  const handleAdd = () => {
    setApplicationData(null);
    setIsOpen(true);
  };

  const handleEdit = async (id: string) => {
    const data = await findApplication(id);
    setApplicationData(data);
    setIsOpen(true);
  };

  return (
    <div className="min-h-screen bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-10">
        {/* Page header */}
        <div className="flex items-start justify-between mb-8">
          <div>
            <h1 className="text-3xl font-semibold text-primary tracking-tight">Applications</h1>
          </div>
          <button
            onClick={handleAdd}
            className="inline-flex items-center gap-2 rounded-lg bg-brand px-4 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-hover active:scale-[0.98]"
          >
            <Plus className="h-4 w-4" />
            Add Application
          </button>
        </div>

        {/* Stats */}
        {allApplications.length > 0 && <StatsBar apps={allApplications} selected={selected} setSelected={setSelected} />}

        {/* Table card */}
        <div className="rounded-xl border border-border bg-card overflow-hidden">
          {allApplications.length === 0 ? (
            /* Empty state */
            <div className="flex flex-col items-center justify-center py-20 gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-light">
                <Briefcase className="h-6 w-6 text-brand" />
              </div>
              <p className="text-sm font-medium text-primary">No applications yet</p>
              <p className="text-xs text-muted">Click "Add Application" to start tracking roles.</p>
            </div>
          ) : (
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-surface">
                  {["#", "Company", "Position", "Status", "Applied", "Salary", "Contact", "Notes", ""].map((h) => (
                    <th key={h} className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wide text-subtle first:pl-5 last:pr-5">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {applications.map((a, i) => (
                  <tr key={a.id} className="group transition-colors hover:bg-surface">
                    <td className="pl-5 pr-4 py-3.5 text-xs text-subtle tabular-nums w-8">{i + 1}</td>
                    <td className="px-4 py-3.5 font-medium text-primary whitespace-nowrap">{a.company}</td>
                    <td className="px-4 py-3.5 text-muted whitespace-nowrap">{a.position}</td>
                    <td className="px-4 py-3.5">
                      <StatusBadge status={a.status} />
                    </td>
                    <td className="px-4 py-3.5 text-muted whitespace-nowrap text-xs">
                      {a.appliedAt.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
                    </td>
                    <td className="px-4 py-3.5 text-muted whitespace-nowrap tabular-nums text-xs">₹&nbsp;{Number(a.salary).toLocaleString("en-IN")}</td>
                    <td className="px-4 py-3.5 text-muted text-xs">{a.contact}</td>
                    <td className="px-4 py-3.5 text-muted text-xs max-w-50 truncate">{a.notes}</td>
                    <td className="pl-4 pr-5 py-3.5">
                      <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button
                          onClick={() => handleEdit(a.id)}
                          className="flex h-7 w-7 items-center justify-center rounded-md text-muted transition hover:bg-brand-light hover:text-brand"
                          title="Edit"
                        >
                          <Edit2 className="h-3.5 w-3.5" />
                        </button>
                        <button
                          onClick={async () => deleteApplication(a.id)}
                          className="flex h-7 w-7 items-center justify-center rounded-md text-muted transition hover:bg-red-50 hover:text-red-500"
                          title="Delete"
                        >
                          <Trash2 className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>

      {/* Modal overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsOpen(false);
          }}
        >
          <Form applicationData={applicationData} setIsOpen={setIsOpen} />
        </div>
      )}
    </div>
  );
}
