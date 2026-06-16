"use client";

import { JobStatus } from "@/app/generated/prisma/enums";
import { ReactHTMLElement, useState } from "react";
import { ST } from "./Applications";

export type AP = {
  id: string;
  company: string;
  position: string;
  status: JobStatus;
  appliedAt: Date;
  salary: Number;
  contact: string;
  notes: string;
};

// ─── Status badge config ────────────────────────────────────────────────────
const STATUS_STYLES: Record<string, string> = {
  Applied: "bg-[#EEF2FF] text-[#4F46E5]",
  Interview: "bg-amber-50 text-amber-700",
  Offer: "bg-emerald-50 text-emerald-700",
  Rejected: "bg-red-50 text-red-400",
};

export function StatusBadge({ status }: { status: JobStatus | string }) {
  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${STATUS_STYLES[status] ?? "bg-surface text-subtle"}`}>
      {status}
    </span>
  );
}

// ─── Stats summary bar ───────────────────────────────────────────────────────
export function StatsBar({ apps, selected, setSelected }: { apps: AP[]; selected: ST; setSelected: React.Dispatch<React.SetStateAction<ST>> }) {
  const counts = apps.reduce(
    (acc, application) => ({
      ...acc,
      [application.status]: (acc[application.status] ?? 0) + 1,
    }),
    {} as Record<string, number>,
  );

  const stats = [
    { label: "Total", value: apps.length, color: "text-primary" },
    { label: "Applied", value: counts.Applied ?? 0, color: "text-[#4F46E5]" },
    { label: "Interview", value: counts.Interview ?? 0, color: "text-amber-600" },
    { label: "Offer", value: counts.Offer ?? 0, color: "text-emerald-600" },
    { label: "Rejected", value: counts.Rejected ?? 0, color: "text-red-400" },
  ];

  return (
    <div className="grid grid-cols-5 gap-4 rounded-xl border border-border bg-card py-4 mb-6">
      {stats.map(({ label, value, color }) => (
        <div onClick={() => setSelected(label as ST)} key={label} className={`flex flex-col items-center gap-0.5`}>
          <div className={`flex flex-col items-center size-16 p-3 ${label === selected ? "bg-surface border border-border rounded-lg" : ""}`}>
            <span className={`text-xl font-semibold tabular-nums ${color}`}>{value}</span>
            <span className="text-xs text-subtle">{label}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
