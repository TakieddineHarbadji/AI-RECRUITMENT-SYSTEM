import { Briefcase, Building } from "lucide-react";
import "./RightSide.css";
export default function RightSide() {
  return (
    <div className="hidden bg-right-side lg:block w-1/2  bg-gradient-to-t from-[#041A3C]/100 to-[#041A3C]/50 relative">

        <div className="relative h-full flex flex-col justify-end items-center text-white p-8">
          <div className="max-w-md text-center mb-16">
            <h2 className="text-4xl font-bold mb-2">Over 1,75,324 candidates</h2>
            <p className="text-3xl">waiting for good employees.</p>
          </div>

          <div className="grid grid-cols-3 gap-8 w-full max-w-lg">
            <div className="flex flex-col items-center">
              <div className="bg-[#464d61] p-3 rounded-md mb-4">
                <Briefcase className="h-6 w-6 text-white" />
              </div>
              <div className="text-xl font-bold">1,75,324</div>
              <div className="text-sm text-[#9199a3]">Live Job</div>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-[#464d61] p-3 rounded-md mb-4">
                <Building className="h-6 w-6 text-white" />
              </div>
              <div className="text-xl font-bold">97,354</div>
              <div className="text-sm text-[#9199a3]">Companies</div>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-[#464d61] p-3 rounded-md mb-4">
                <Briefcase className="h-6 w-6 text-white" />
              </div>
              <div className="text-xl font-bold">7,532</div>
              <div className="text-sm text-[#9199a3]">New Jobs</div>
            </div>
          </div>
        </div>
      </div>
  );
}
