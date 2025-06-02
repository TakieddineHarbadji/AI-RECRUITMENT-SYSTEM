import { useState } from "react"
import { ChevronRight, X, Bold, Italic, Underline, Strikethrough, Link, List, ListOrdered } from "lucide-react"

export default function JobApplicationModal({onApply}) {
  

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg w-full max-w-xl">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-[#191f33]">Apply Job: Senior UX Designer</h2>
            <button onClick={onApply} className="text-[#767f8c] hover:text-[#191f33]">
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-[#191f33] font-medium mb-2">Choose Resume</label>
              <div className="relative">
                <select
                  className="w-full border border-[#e4e5e8] rounded-md h-10 px-3 appearance-none bg-white text-[#191f33]"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select...
                  </option>
                  <option value="resume1">My Resume 1</option>
                  <option value="resume2">My Resume 2</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <ChevronRight className="h-4 w-4 text-[#767f8c] rotate-90" />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-[#191f33] font-medium mb-2">Cover Letter</label>
              <div className="border border-[#e4e5e8] rounded-md">
                <div className="p-4">
                  <textarea
                    placeholder="Write down your biography here. Let the employers know who you are..."
                    className="w-full outline-none min-h-[120px] resize-none"
                  ></textarea>
                </div>
                <div className="border-t border-[#e4e5e8] p-2 flex items-center">
                  <button className="p-1.5 hover:bg-[#e8f1ff] rounded">
                    <Bold className="h-4 w-4 text-[#767f8c]" />
                  </button>
                  <button className="p-1.5 hover:bg-[#e8f1ff] rounded">
                    <Italic className="h-4 w-4 text-[#767f8c]" />
                  </button>
                  <button className="p-1.5 hover:bg-[#e8f1ff] rounded">
                    <Underline className="h-4 w-4 text-[#767f8c]" />
                  </button>
                  <button className="p-1.5 hover:bg-[#e8f1ff] rounded">
                    <Strikethrough className="h-4 w-4 text-[#767f8c]" />
                  </button>
                  <button className="p-1.5 hover:bg-[#e8f1ff] rounded">
                    <Link className="h-4 w-4 text-[#767f8c]" />
                  </button>
                  <button className="p-1.5 hover:bg-[#e8f1ff] rounded">
                    <List className="h-4 w-4 text-[#767f8c]" />
                  </button>
                  <button className="p-1.5 hover:bg-[#e8f1ff] rounded">
                    <ListOrdered className="h-4 w-4 text-[#767f8c]" />
                  </button>
                </div>
              </div>
            </div>

            <div className="flex justify-end space-x-3">
              <button
                className="border border-[#e4e5e8] text-[#191f33] hover:bg-[#f1f2f4] px-4 py-2 rounded-md"
                onClick={onApply}
              >
                Cancel
              </button>
              <button className="bg-[#0a65cc] hover:bg-[#1e60c6] text-white px-4 py-2 rounded-md flex items-center">
                Apply Now
                <ChevronRight className="h-4 w-4 ml-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
