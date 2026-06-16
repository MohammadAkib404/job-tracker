import { SearchIcon } from "lucide-react";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { VT } from "./Applications";

export default function Search({ variator, setVariator }: { variator: VT; setVariator: React.Dispatch<React.SetStateAction<VT>> }) {
  return (
    <section>
      <div className="flex justify-between bg-card border border-border px-6 py-3 rounded-lg w-full mb-10 text-subtle">
        <div className="flex items-center gap-2 focus:outline-2">
          <Select value={variator.searchField} onValueChange={(val) => setVariator((prev) => ({ ...prev, searchField: val as VT["searchField"] }))}>
            <SelectTrigger className="w-full max-w-27">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="company">Company</SelectItem>
              <SelectItem value="position">Position</SelectItem>
            </SelectContent>
          </Select>
          <input
            onChange={(e) => setVariator((prev) => ({ ...prev, searchValue: e.target.value }))}
            type="text"
            name="field-value"
            placeholder="Search.."
            className="focus:outline-none text-primary max-w-35 text-sm"
          />
          <SearchIcon className="max-size-4 size-full" />
        </div>
        <div className="flex">
          <Select value={variator.status} onValueChange={(val) => setVariator((prev) => ({ ...prev, status: val as VT["status"] }))}>
            <SelectTrigger className="w-full max-w-48">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="total">Total</SelectItem>
              <SelectItem value="applied">Applied</SelectItem>
              <SelectItem value="interview">Interview</SelectItem>
              <SelectItem value="rejected">Rejected</SelectItem>
              <SelectItem value="offer">Offer</SelectItem>
            </SelectContent>
          </Select>

          <Select value={variator.sortBy} onValueChange={(val) => setVariator((prev) => ({ ...prev, sortBy: val as VT["sortBy"] }))}>
            <SelectTrigger className="w-full max-w-48">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Newest</SelectItem>
              <SelectItem value="oldest">Oldest</SelectItem>
              <SelectItem value="salaryAsc">SalaryAsc</SelectItem>
              <SelectItem value="salaryDesc">SalaryDesc</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </section>
  );
}
