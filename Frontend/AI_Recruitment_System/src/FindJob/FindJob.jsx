import { Link } from "react-router-dom";
import { Search,DollarSign, Clock, MapPin, ChevronDown, Bell, Grid, List, ChevronLeft, ChevronRight, Component } from "lucide-react"
import Navbar from "../Components/NavBar";
import Header from "../Components/Header";
import {useEffect, useState } from "react";

import { CompanyImage } from '/src/backend_integration/Handleimages.jsx';

import {
  
  
  
  Filter,
  
  
  Bookmark,
  ArrowRight,
  
  
} from "lucide-react"

export default function FindJob() {
    const [filteringOpen, setFilteringOpen] = useState(false);
  
  return (
    <div className="min-h-screen bg-white">
      {/* Top Navigation */}
      <Navbar activePage="FindJob"/>
                  
            
       {/* Logo and Search Bar */}
        <Header/>





        <div className="bg-[#f1f2f4] px-10 py-6">
        <div className="container bg-[#f1f2f4] mb-6  px-4  mx-auto ">
<div className="flex justify-between items-center mb-6">
  <h2 className="text-xl font-bold text-[#191f33]">Find Job</h2>
  <div className="flex items-center text-sm mb-4">
    <a href="/home" className="text-gray-500 hover:text-[#0a65cc]">
      Home
    </a>
    <span className="mx-2">/</span>
    <span className="text-gray-700">Find job</span>
  </div>
</div>

  


<div className="bg-white rounded-md p-4 shadow-sm">
  <div className="flex flex-wrap gap-3 md:flex-nowrap">
    <div className="flex-grow  ">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#5e6670] w-4 h-4" />
        <input
          type="text"
          placeholder="Job title, keyword..."
          className="w-full pl-10 pr-3 py-3 border border-[#e4e5e8] rounded-md text-sm focus:outline-none focus:border-[#0a65cc]"
        />
      </div>
    </div>

    <div className="flex-grow ">
      <div className="relative">
        <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#5e6670] w-4 h-4" />
        <input
          type="text"
          placeholder="Location"
          className="w-full pl-10 pr-3 py-3 border border-[#e4e5e8] rounded-md text-sm focus:outline-none focus:border-[#0a65cc]"
        />
      </div>
    </div>

    <div className="flex-grow  ">
      <div className="relative">
        <select className="w-full pl-3 pr-10 py-3 border border-[#e4e5e8] rounded-md text-sm appearance-none focus:outline-none focus:border-[#0a65cc]">
          <option>Select Category</option>
          <option>Design</option>
          <option>Development</option>
          <option>Marketing</option>
        </select>
        <ChevronDown className="absolute right-3 pointer-events-none top-1/2 transform -translate-y-1/2 text-[#5e6670] w-4 h-4" />
      </div>
    </div>

    <div className="w-full md:w-auto">
      <button
        onClick={() => setFilteringOpen(!filteringOpen)}
        className="flex items-center w-full md:w-auto justify-center px-4 py-3 text-sm text-[#5e6670] border border-[#e4e5e8] rounded-md"
      >
        <span>Advance Filter</span>
        <Filter className="ml-2 w-4 h-4" />
      </button>
    </div>

    <div className="w-full md:w-auto">
      <button className="w-full md:w-auto px-6 py-3 bg-[#0a65cc] text-white rounded-md text-sm font-medium">
        Find Job
      </button>
    </div>
  </div>

  <div
    className={`transform transition-all duration-300 ease-in-out ${
      filteringOpen ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0'
    }`}
  >
    {filteringOpen ? <Filtering /> : null}
  </div>
</div>






  </div>
</div> 
 
      {/* Main Content */}
      <main className="bg-white py-6">
        <div className="container mx-auto px-4">
        

          {/* Filters and Sorting */}
          {/*
          <div className="flex justify-between items-center mb-6">
            <div className="flex gap-2">
              <div className="px-3 py-1 bg-white text-[#3e444b] text-sm rounded-md border border-[#e4e5e8] flex items-center">
                Design
                <span className="ml-1 text-xs">×</span>
              </div>
              <div className="px-3 py-1 bg-white text-[#3e444b] text-sm rounded-md border border-[#e4e5e8] flex items-center">
                New York
                <span className="ml-1 text-xs">×</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center">
                <button   className="flex items-center gap-1">
                  <span>Latest</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
              </div>
              <div className="flex items-center">
                <button   className="flex items-center gap-1">
                  <span>12 per page</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
              </div>
              <div className="flex items-center gap-1">
                <a href="./FindJob"  size="icon" className="flex items-center h-10 w-10">
                  <Grid className="h-4 w-4" />
                </a>
                <a href="./JobPortal" size="icon" className="flex items-center h-10 w-10">
                  <List className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
          */}
          {/* Job Listings */}
          <Pagination/>
        </div>
      </main>
    </div>
  );
}


function Filtering(){
  return(
      


<div className="grid grid-cols-1 md:grid-cols-5 gap-4 py-4">
{/* Experience */}
<div>
  <h3 className="font-medium mb-4 text-[#191f33]">Experience</h3>
  <div className="space-y-3">
    <label className="flex items-center">
      <input type="radio" name="experience" className="w-4 h-4 text-[#0a65cc]" />
      <span className="ml-2 text-sm text-gray-700">Freshers</span>
    </label>
    <label className="flex items-center">
      <input type="radio" name="experience" className="w-4 h-4 text-[#0a65cc]" />
      <span className="ml-2 text-sm text-gray-700">1 - 2 Years</span>
    </label>
    <label className="flex items-center">
      <input type="radio" name="experience" className="w-4 h-4 text-[#0a65cc]" />
      <span className="ml-2 text-sm text-gray-700">2 - 4 Years</span>
    </label>
    <label className="flex items-center">
      <input type="radio" name="experience" className="w-4 h-4 text-[#0a65cc]" checked />
      <span className="ml-2 text-sm text-gray-700">4 - 6 Years</span>
    </label>
    <label className="flex items-center">
      <input type="radio" name="experience" className="w-4 h-4 text-[#0a65cc]" />
      <span className="ml-2 text-sm text-gray-700">6 - 8 Years</span>
    </label>
    <label className="flex items-center">
      <input type="radio" name="experience" className="w-4 h-4 text-[#0a65cc]" />
      <span className="ml-2 text-sm text-gray-700">8 - 10 Years</span>
    </label>
    <label className="flex items-center">
      <input type="radio" name="experience" className="w-4 h-4 text-[#0a65cc]" />
      <span className="ml-2 text-sm text-gray-700">10 - 15 Years</span>
    </label>
    <label className="flex items-center">
      <input type="radio" name="experience" className="w-4 h-4 text-[#0a65cc]" />
      <span className="ml-2 text-sm text-gray-700">15+ Years</span>
    </label>
  </div>
</div>

{/* Salary */}
<div>
  <h3 className="font-medium mb-4 text-[#191f33]">Salary</h3>
  <div className="space-y-3">
    <label className="flex items-center">
      <input type="radio" name="salary" className="w-4 h-4 text-[#0a65cc]" />
      <span className="ml-2 text-sm text-gray-700">$50 - $1000</span>
    </label>
    <label className="flex items-center">
      <input type="radio" name="salary" className="w-4 h-4 text-[#0a65cc]" />
      <span className="ml-2 text-sm text-gray-700">$1000 - $2000</span>
    </label>
    <label className="flex items-center">
      <input type="radio" name="salary" className="w-4 h-4 text-[#0a65cc]" />
      <span className="ml-2 text-sm text-gray-700">$3000 - $4000</span>
    </label>
    <label className="flex items-center">
      <input type="radio" name="salary" className="w-4 h-4 text-[#0a65cc]" />
      <span className="ml-2 text-sm text-gray-700">$4000 - $6000</span>
    </label>
    <label className="flex items-center">
      <input type="radio" name="salary" className="w-4 h-4 text-[#0a65cc]" checked />
      <span className="ml-2 text-sm text-gray-700">$6000 - $8000</span>
    </label>
    <label className="flex items-center">
      <input type="radio" name="salary" className="w-4 h-4 text-[#0a65cc]" />
      <span className="ml-2 text-sm text-gray-700">$8000 - $10000</span>
    </label>
    <label className="flex items-center">
      <input type="radio" name="salary" className="w-4 h-4 text-[#0a65cc]" />
      <span className="ml-2 text-sm text-gray-700">$10000 - $15000</span>
    </label>
    <label className="flex items-center">
      <input type="radio" name="salary" className="w-4 h-4 text-[#0a65cc]" />
      <span className="ml-2 text-sm text-gray-700">$15000+</span>
    </label>
  </div>
</div>

{/* Job Type */}
<div>
  <h3 className="font-medium mb-4 text-[#191f33]">Job Type</h3>
  <div className="space-y-3">
    <label className="flex items-center">
      <input type="checkbox" className="w-4 h-4 text-[#0a65cc] rounded" />
      <span className="ml-2 text-sm text-gray-700">All</span>
    </label>
    <label className="flex items-center">
      <input type="checkbox" className="w-4 h-4 text-[#0a65cc] rounded" checked />
      <span className="ml-2 text-sm text-gray-700">Full Time</span>
    </label>
    <label className="flex items-center">
      <input type="checkbox" className="w-4 h-4 text-[#0a65cc] rounded" />
      <span className="ml-2 text-sm text-gray-700">Part Time</span>
    </label>
    <label className="flex items-center">
      <input type="checkbox" className="w-4 h-4 text-[#0a65cc] rounded" />
      <span className="ml-2 text-sm text-gray-700">Internship</span>
    </label>
    <label className="flex items-center">
      <input type="checkbox" className="w-4 h-4 text-[#0a65cc] rounded" />
      <span className="ml-2 text-sm text-gray-700">Remote</span>
    </label>
    <label className="flex items-center">
      <input type="checkbox" className="w-4 h-4 text-[#0a65cc] rounded" />
      <span className="ml-2 text-sm text-gray-700">Temporary</span>
    </label>
    <label className="flex items-center">
      <input type="checkbox" className="w-4 h-4 text-[#0a65cc] rounded" />
      <span className="ml-2 text-sm text-gray-700">Contract Base</span>
    </label>
  </div>
</div>

{/* Education */}
<div>
  <h3 className="font-medium mb-4 text-[#191f33]">Education</h3>
  <div className="space-y-3">
    <label className="flex items-center">
      <input type="checkbox" className="w-4 h-4 text-[#0a65cc] rounded" />
      <span className="ml-2 text-sm text-gray-700">All</span>
    </label>
    <label className="flex items-center">
      <input type="checkbox" className="w-4 h-4 text-[#0a65cc] rounded" />
      <span className="ml-2 text-sm text-gray-700">High School</span>
    </label>
    <label className="flex items-center">
      <input type="checkbox" className="w-4 h-4 text-[#0a65cc] rounded" />
      <span className="ml-2 text-sm text-gray-700">Intermediate</span>
    </label>
    <label className="flex items-center">
      <input type="checkbox" className="w-4 h-4 text-[#0a65cc] rounded" checked />
      <span className="ml-2 text-sm text-gray-700">Graduation</span>
    </label>
    <label className="flex items-center">
      <input type="checkbox" className="w-4 h-4 text-[#0a65cc] rounded" />
      <span className="ml-2 text-sm text-gray-700">Master Degree</span>
    </label>
    <label className="flex items-center">
      <input type="checkbox" className="w-4 h-4 text-[#0a65cc] rounded" />
      <span className="ml-2 text-sm text-gray-700">Bachelor Degree</span>
    </label>
  </div>
</div>

{/* Job Level */}
<div>
  <h3 className="font-medium mb-4 text-[#191f33]">Job Level</h3>
  <div className="space-y-3">
    <label className="flex items-center">
      <input type="radio" name="level" className="w-4 h-4 text-[#0a65cc]" />
      <span className="ml-2 text-sm text-gray-700">Entry Level</span>
    </label>
    <label className="flex items-center">
      <input type="radio" name="level" className="w-4 h-4 text-[#0a65cc]" checked />
      <span className="ml-2 text-sm text-gray-700">Mid Level</span>
    </label>
    <label className="flex items-center">
      <input type="radio" name="level" className="w-4 h-4 text-[#0a65cc]" />
      <span className="ml-2 text-sm text-gray-700">Expert Level</span>
    </label>
  </div>
</div>
</div>
  );
}





import {  BookmarkCheck } from 'lucide-react'; // Assuming you're using lucide-react
import { useNavigate } from 'react-router-dom';

  

 function JobCard({
  
  title,
  location,
  salary,
  timeRemaining,
  badge,
  iconText = '',
  iconColor = '#fffffff',
  onBookmark,
}) {
    const [saved, setSaved] = useState(false);
  const navigate = useNavigate();

  const handleSave = () => {
    setSaved(!saved);
    // Add your save logic here
    onBookmark();
  };

  const onApply = () => {
    const jobId = 123; // Replace with dynamic job ID
    navigate(`/JobDetailsPage?jobId=${jobId}`);
  };

  return (
    <div className="bg-white rounded-lg border border-gray-100 p-6 flex flex-col md:flex-row md:items-center md:justify-between">
      <div className="flex items-start gap-4 mb-4 md:mb-0">
        <div className="w-12 h-12  rounded-md flex items-center justify-center text-white">
                    <CompanyImage id={123} pre_link="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/800px-Apple_logo_black.svg.png" type="invoice" />
        </div>

        <div>
          <h3 className="text-[#18191c] font-semibold text-lg">{title}</h3>
          <div className="flex flex-wrap gap-4 mt-2 text-sm text-[#767f8c]">
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-1" />
              {location}
            </div>
            <div className="flex items-center">
              <DollarSign className="h-4 w-4 mr-1" />
              {salary}
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              {timeRemaining}
            </div>
          </div>
          <div className="mt-2">
            <span className="inline-block px-2 py-1 bg-[#e7f0fa] text-[#0a65cc] text-xs rounded">
              {badge}
            </span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button
      onClick={handleSave}
      className="cursor-pointer p-2 rounded-md border border-gray-200"
    >
      {saved ? (
        <BookmarkCheck className="h-5 w-5 text-[#0A65CC]" />
      ) : (
        <Bookmark className="h-5 w-5 text-[#767f8c]" />
      )}
    </button>
        <button
          onClick={onApply}
          className="cursor-pointer group px-4 py-2 bg-[#e8f1ff] text-[#0a65cc] hover:bg-[#0a65cc] hover:text-white font-medium rounded-md flex items-center shadow-sm hover:shadow-md transition-all hover:-translate-y-1 hover:shadow-black/5"
        >
          Apply Now
          <ArrowRight className=" ml-1 h-4 w-4 transition-all group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
}


const fetchJobList = (page) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const jobs = Array.from({ length: 12 }, (_, i) => ({
            title: `Software Engineer (Page ${page} - Item ${i + 1})`,
            location: "China",
            salary: "$50K-$60K",
            timeRemaining: "4 Days Remaining",
            badge: "Full Time",
            id: (page - 1) * 12 + i + 1,
          }));

          resolve(jobs);
        }, 1000); // 1 second delay to simulate fetch
      });
    };


const totalPages = 50;
const contentPerPage = Object.fromEntries(
  Array.from({ length: totalPages }, (_, i) => [i + 1, `This is page ${i + 1}`])
);

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);

    

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // Generate pages to display (first, last, neighbors)
  const getVisiblePages = () => {
    if (totalPages <= 5) return Array.from({ length: totalPages }, (_, i) => i + 1);
    if (currentPage <= 3) return [1, 2, 3, 4, 5];
    if (currentPage >= totalPages - 2)
      return [totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
    return [currentPage - 2, currentPage - 1, currentPage, currentPage + 1, currentPage + 2];
  };

  const pagesToShow = getVisiblePages();
  const [jobs, setJobs] = useState([]);
const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadJobs = async () => {
      setLoading(true);
      const data = await fetchJobList(currentPage);
      setJobs(data);
      setLoading(false);
    };
    loadJobs();
  }, [currentPage]);

  return (
    <div>
      <div className="space-y-4">
            {(loading ? Array.from({ length: 12 }) : jobs).map((job, index) => (
          <JobCard
            key={job?.id || `placeholder-${index}`}
            title={job?.title || ""}
            location={job?.location || ""}
            salary={job?.salary || ""}
            timeRemaining={job?.timeRemaining || ""}
            badge={job?.badge || ""}
            onBookmark={() => {}}
            onApply={() => {}}
          />
        ))}
            
          </div>

<div className="flex flex-col items-center gap-6 mt-10">
      

      {/* Pagination Controls */}
      <div className="flex justify-center items-center gap-2">
        <button
          onClick={() => goToPage(currentPage - 1)}
          className="cursor-pointer h-8 w-8 rounded-full bg-[#e8f0fe] text-[#0a65cc] flex items-center justify-center disabled:opacity-50"
          disabled={currentPage === 1}
        >
          <ChevronLeft className=" h-4 w-4" />
        </button>

        {pagesToShow.map((page, i) => {
          const prev = pagesToShow[i - 1];
          const showDots = prev && page - prev > 1;

          return (
            <span key={page} className="flex items-center">
              {showDots && <span className="px-2 text-gray-400">...</span>}

              <button
                onClick={() => goToPage(page)}
                className={`cursor-pointer h-8 w-8 rounded-full text-sm flex items-center justify-center ${
                  currentPage === page
                      ? "bg-[#0a65cc] text-white"
                      : "hover:bg-gray-200 hover:text-black text-gray-600"
                  
                }`}
              >
                {String(page).padStart(2, "0")}
              </button>
            </span>
          );
        })}

        <button
          onClick={() => goToPage(currentPage + 1)}
          className="cursor-pointer h-8 w-8 rounded-full bg-[#e8f0fe] text-[#0a65cc] flex items-center justify-center disabled:opacity-50"
          disabled={currentPage === totalPages}
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
    </div>
    
  );
};