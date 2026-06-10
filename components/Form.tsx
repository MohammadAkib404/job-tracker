export default function Form() {
  return (
    <section className="max-w-5xl w-full mx-auto rounded-xl border border-gray-200 bg-white shadow-sm p-8">
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900">Application Info</h2>
      </div>

      <form className="grid grid-cols-2 gap-6">
        {/* Company */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="company"
            className="text-sm font-medium text-gray-500"
          >
            Company
          </label>
          <input
            id="company"
            name="company"
            type="text"
            placeholder="Google"
            className="h-11 rounded-md border border-gray-200 px-3 text-gray-900 text-sm shadow-sm transition focus:border-gray-400 focus:outline-none focus:ring-2 focus:ring-black/10"
          />
        </div>

        {/* Position */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="role"
            className="text-sm font-medium text-gray-500"
          >
            Position
          </label>
          <input
            id="role"
            name="role"
            type="text"
            placeholder="Software Engineer Intern"
            className="h-11 rounded-md border border-gray-200 px-3 text-gray-900 text-sm shadow-sm transition focus:border-gray-400 focus:outline-none focus:ring-2 focus:ring-black/10"
          />
        </div>

        {/* Status */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="status"
            className="text-sm font-medium text-gray-500"
          >
            Status
          </label>
          <select
            id="status"
            name="status"
            className="h-11 rounded-md border border-gray-200 bg-white px-3 text-gray-900 text-sm shadow-sm transition focus:border-gray-400 focus:outline-none focus:ring-2 focus:ring-black/10"
          >
            <option value="Applied">Applied</option>
            <option value="Interview">Interview</option>
            <option value="Rejected">Rejected</option>
            <option value="Offer">Offer</option>
          </select>
        </div>

        {/* Application Date */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="appliedAt"
            className="text-sm font-medium text-gray-500"
          >
            Application Date
          </label>
          <input
            id="appliedAt"
            name="appliedAt"
            type="date"
            className="h-11 rounded-md border border-gray-200 px-3 text-gray-900 text-sm shadow-sm transition focus:border-gray-400 focus:outline-none focus:ring-2 focus:ring-black/10"
          />
        </div>

        {/* Salary */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="salary"
            className="text-sm font-medium text-gray-500"
          >
            Salary
          </label>
          <input
            id="salary"
            name="salary"
            type="number"
            placeholder="1200000"
            className="h-11 rounded-md border border-gray-200 px-3 text-sm shadow-sm transition focus:border-gray-400 focus:outline-none focus:ring-2 focus:ring-black/10"
          />
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="contact"
            className="text-sm font-medium text-gray-500"
          >
            Contact
          </label>
          <input
            id="contact"
            name="contact"
            type="email"
            placeholder="recruiter@company.com"
            className="h-11 rounded-md border border-gray-200 px-3 text-gray-900 text-sm shadow-sm transition focus:border-gray-400 focus:outline-none focus:ring-2 focus:ring-black/10"
          />
        </div>

        {/* Notes */}
        <div className="col-span-2 flex flex-col gap-2">
          <label
            htmlFor="notes"
            className="text-sm font-medium text-gray-500"
          >
            Notes
          </label>
          <textarea
            id="notes"
            name="notes"
            placeholder="Applied through referral. Waiting for recruiter response..."
            className="min-h-32 resize-none rounded-md border border-gray-200 px-3 py-3 text-gray-900 text-sm shadow-sm transition focus:border-gray-400 focus:outline-none focus:ring-2 focus:ring-black/10"
          />
        </div>

        {/* Actions */}
        <div className="col-span-2 flex justify-end gap-3 pt-2">
          <button
            type="button"
            className="rounded-md border border-gray-200 px-4 py-2 text-sm font-medium text-gray-900 transition hover:bg-gray-50"
          >
            Cancel
          </button>

          <button
            type="submit"
            className="rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-gray-800"
          >
            Save Application
          </button>
        </div>
      </form>
    </section>
  );
}