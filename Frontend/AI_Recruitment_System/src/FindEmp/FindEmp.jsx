import { Link } from "react-router-dom";
import { Slider } from "../Components/ui/slider"
import JobEmployerList from "../Components/job-employers"
import MainHeader from "../Components/main-header"
import Navbar from "../Components/NavBar";
import Header from "../Components/Header";
import { Search, MapPin, ChevronDown, Bell, Grid, List, ChevronLeft, ChevronRight, Component } from "lucide-react"

export default function FindEmp() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
       {/* Top Navigation */}
        <Navbar activePage="FindEmp"/>
            
      
        {/* Logo and Search Bar */}
        <Header/>

      <main className="flex-grow">





      <div className="bg-[#f1f2f4] px-4 md:px-10 py-6">
  <div className="container mx-auto px-4">
    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
      <h2 className="text-xl font-bold text-[#191f33]">Find Employer</h2>
      <div className="flex items-center text-sm text-gray-500 space-x-2 mt-2 md:mt-0">
        <a href="/home" className="hover:text-[#0a65cc]">Home</a>
        <span>/</span>
        <span className="text-gray-700">Find Employer</span>
      </div>
    </div>

    <div className="bg-white rounded-md p-4 shadow-sm">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-3">
        <div className="flex-2 w-full md:w-[250px]">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#5e6670] w-4 h-4" />
            <input
              type="text"
              placeholder="Job title, keyword..."
              className="w-full pl-10 pr-3 py-3 border border-[#e4e5e8] rounded-md text-sm focus:outline-none focus:border-[#0a65cc]"
            />
          </div>
        </div>

        <div className="flex-2 w-full md:w-[250px]">
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#5e6670] w-4 h-4" />
            <input
              type="text"
              placeholder="Location"
              className="w-full pl-10 pr-3 py-3 border border-[#e4e5e8] rounded-md text-sm focus:outline-none focus:border-[#0a65cc]"
            />
          </div>
        </div>

        <div className="flex-2 w-full md:w-[250px]">
          <div className="relative">
            <select className="w-full pl-3 pr-10 py-3 border border-[#e4e5e8] rounded-md text-sm appearance-none focus:outline-none focus:border-[#0a65cc]">
              <option>Select Category</option>
              <option>Design</option>
              <option>Development</option>
              <option>Marketing</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#5e6670] w-4 h-4" />
          </div>
        </div>

        <div className="flex-1 w-full md:w-auto">
          <button className="w-full md:w-full px-6 py-3 bg-[#0a65cc] text-white rounded-md text-sm font-medium">
            Find Job
          </button>
        </div>
      </div>
    </div>
  </div>
</div>








        <div className="container mx-auto px-4 py-6">
          <div className="mb-6">
            {/* Main Content */}
            <div className="flex flex-col md:flex-row gap-6">
              {/* Left Sidebar */}
              <div className="md:w-1/4 space-y-6">
                <div className="bg-white p-4 rounded-md shadow-sm">
                  <button variant="outline" className="w-full justify-start mb-4">
                    <svg
                      className="mr-2 h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                      />
                    </svg>
                    Filter
                  </button>

                  <div className="border-b pb-4 mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-medium">Location Radius:</h3>
                      <span className="text-sm text-gray-500">32 miles</span>
                    </div>
                    <Slider defaultValue={[32]} max={100} step={1} className="py-2" />
                  </div>

                  <div>
                    <h3 className="font-medium mb-4">Organization Type</h3>
                    <div className="space-y-2">
                      {[
                        "Government",
                        "Semi Government",
                        "NGO",
                        "Private Company",
                        "International Agencies",
                        "Others",
                      ].map((type) => (
                        <div key={type} className="flex items-center">
                          <input
                            type="radio"
                            id={type.replace(/\s+/g, "")}
                            name="organizationType"
                            className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                          />
                          <label htmlFor={type.replace(/\s+/g, "")} className="ml-2 text-sm text-gray-600">
                            {type}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Content */}
              <div className="md:w-3/4">
                

                <JobEmployerList />

                {/* Pagination */}
                <div className="flex justify-center mt-8">
                  <nav className="inline-flex">
                    <button variant="outline" size="icon" className="h-8 w-8 rounded-l-md">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M15 19L8 12L15 5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                    <button variant="outline" size="icon" className="h-8 w-8 bg-blue-600 text-white">
                      1
                    </button>
                    <button variant="outline" size="icon" className="h-8 w-8">
                      2
                    </button>
                    <button variant="outline" size="icon" className="h-8 w-8">
                      3
                    </button>
                    <button variant="outline" size="icon" className="h-8 w-8">
                      4
                    </button>
                    <button variant="outline" size="icon" className="h-8 w-8">
                      5
                    </button>
                    <button variant="outline" size="icon" className="h-8 w-8 rounded-r-md">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M9 5L16 12L9 19"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}


