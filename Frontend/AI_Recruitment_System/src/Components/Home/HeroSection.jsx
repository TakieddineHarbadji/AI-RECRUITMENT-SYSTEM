import BackgroundImage from 'assets/Background.png';
import {  Search, MapPin } from "lucide-react";

export default function HeroSection() {
  return (
    <div className="py-12 px-4 md:px-8 lg:px-16 flex flex-col md:flex-row items-center">
        <div className=" sticky top-20 w-full md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold text-[#18191c] leading-tight mb-4">
            Find a job that suits
            <br />
            your interest & skills.
          </h1>
          <p className="text-[#5e6670] mb-8 max-w-lg">
            Aliquam vitae turpis in diam convallis finibus in at risus. Nullam in scelerisque leo, eget sollicitudin
            velit bestibulum.
          </p>

          <div className="bg-white rounded-md shadow-md p-4 max-w-xl">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-grow">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <Search className="h-4 w-4 text-[#9199a3]" />
                </div>
                <input
                  type="text"
                  placeholder="Job title, Keyword..."
                  className="w-full pl-10 pr-4 py-3 border border-[#e4e5e8] rounded-md focus:outline-none focus:ring-1 focus:ring-[#0a65cc]"
                />
              </div>
              <div className="relative flex-grow">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <MapPin className="h-4 w-4 text-[#9199a3]" />
                </div>
                <input
                  type="text"
                  placeholder="Your Location"
                  className="w-full pl-10 pr-4 py-3 border border-[#e4e5e8] rounded-md focus:outline-none focus:ring-1 focus:ring-[#0a65cc]"
                />
              </div>
              <button className="px-6 py-3 bg-[#0a65cc] text-white rounded-md hover:bg-[#042852] whitespace-nowrap">
                Find Job
              </button>
            </div>
          </div>

          <div className="mt-4 text-sm text-[#5e6670]">
            <span className="mr-2">Suggestion:</span>
            <span className="mr-2">Designer,</span>
            <span className="mr-2">Programing,</span>
            <span className="text-[#0a65cc] mr-2">Digital Marketing,</span>
            <span className="mr-2">Video,</span>
            <span>Animation.</span>
          </div>
        </div>
        <div className="w-full md:w-1/2 hidden md:flex justify-center">
          <div className="h-100 flex items-center">
            <img
              src={BackgroundImage}
              alt="Beautiful Landscape"
              className="h-full object-contain"
            />
          </div>
        </div>
      </div>
  );
}