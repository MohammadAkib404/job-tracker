"use client";
import { createOrUpdateApplication } from "@/lib/actions";
import { AP } from "./UtilsComp";
import { X } from "lucide-react";

type FormProps = {
  applicationData: AP | null;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Form({ applicationData, setIsOpen }: FormProps) {
  const handleSubmit = async (formData: FormData) => {
    await createOrUpdateApplication(applicationData?.id, formData);
    setIsOpen((prev) => !prev);
  };

  const isEditing = Boolean(applicationData?.id);

  return (
    <section className="w-full max-w-2xl mx-auto rounded-2xl border border-border bg-card shadow-xl shadow-black/10 overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-border px-7 py-5">
        <div>
          <h2 className="text-base font-semibold text-primary">{isEditing ? "Edit Application" : "New Application"}</h2>
          <p className="text-xs text-subtle mt-0.5">{isEditing ? "Update the details below." : "Fill in the details to track a new role."}</p>
        </div>
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          className="flex h-8 w-8 items-center justify-center rounded-lg text-subtle transition-colors hover:bg-surface hover:text-primary"
        >
          <X className="h-4 w-4" />
        </button>
      </div>

      {/* Body */}
      <form action={(formData) => handleSubmit(formData)} className="px-7 py-6 grid grid-cols-2 gap-5">
        {/* Company */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="company" className="text-xs font-medium text-subtle uppercase tracking-wide">
            Company
          </label>
          <input
            id="company"
            name="company"
            type="text"
            defaultValue={applicationData?.company}
            placeholder="Google"
            className="h-10 rounded-lg border border-border bg-surface px-3 text-sm text-primary placeholder:text-subtle transition focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
          />
        </div>

        {/* Position */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="position" className="text-xs font-medium text-subtle uppercase tracking-wide">
            Position
          </label>
          <input
            id="position"
            name="position"
            type="text"
            defaultValue={applicationData?.position}
            placeholder="Software Engineer"
            className="h-10 rounded-lg border border-border bg-surface px-3 text-sm text-primary placeholder:text-subtle transition focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
          />
        </div>

        {/* Status */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="status" className="text-xs font-medium text-subtle uppercase tracking-wide">
            Status
          </label>
          <select
            id="status"
            name="status"
            defaultValue={applicationData?.status?.toLowerCase() ?? "applied"}
            className="h-10 rounded-lg border border-border bg-surface px-3 text-sm text-primary transition focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
          >
            <option value="applied">Applied</option>
            <option value="interview">Interview</option>
            <option value="rejected">Rejected</option>
            <option value="offer">Offer</option>
          </select>
        </div>

        {/* Application Date */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="appliedAt" className="text-xs font-medium text-subtle uppercase tracking-wide">
            Applied Date
          </label>
          <input
            id="appliedAt"
            name="appliedAt"
            type="date"
            defaultValue={applicationData?.appliedAt.toISOString().split("T")[0]}
            className="h-10 rounded-lg border border-border bg-surface px-3 text-sm text-primary transition focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
          />
        </div>

        {/* Salary */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="salary" className="text-xs font-medium text-subtle uppercase tracking-wide">
            Salary (₹)
          </label>
          <input
            id="salary"
            name="salary"
            type="number"
            defaultValue={isNaN(Number(applicationData?.salary)) ? 0 : Number(applicationData?.salary)}
            placeholder="1200000"
            className="h-10 rounded-lg border border-border bg-surface px-3 text-sm text-primary placeholder:text-subtle transition focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
          />
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="contact" className="text-xs font-medium text-subtle uppercase tracking-wide">
            Contact Email
          </label>
          <input
            id="contact"
            name="contact"
            type="email"
            defaultValue={applicationData?.contact}
            placeholder="recruiter@company.com"
            className="h-10 rounded-lg border border-border bg-surface px-3 text-sm text-primary placeholder:text-subtle transition focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
          />
        </div>

        {/* Notes */}
        <div className="col-span-2 flex flex-col gap-1.5">
          <label htmlFor="notes" className="text-xs font-medium text-subtle uppercase tracking-wide">
            Notes
          </label>
          <textarea
            id="notes"
            name="notes"
            defaultValue={applicationData?.notes}
            placeholder="Applied through referral. Awaiting recruiter response..."
            rows={3}
            className="resize-none rounded-lg border border-border bg-surface px-3 py-2.5 text-sm text-primary placeholder:text-subtle transition focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
          />
        </div>

        {/* Actions */}
        <div className="col-span-2 flex justify-end gap-2 pt-1 border-t border-border">
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="rounded-lg border border-border px-4 py-2 text-sm font-medium text-subtle transition hover:bg-surface hover:text-primary"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-lg bg-brand px-5 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-hover active:scale-[0.98]"
          >
            {isEditing ? "Save Changes" : "Add Application"}
          </button>
        </div>
      </form>
    </section>
  );
}
