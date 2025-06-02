import { Link } from "react-router-dom";
import {
  MapPin,
  ChevronDown,
  Search,
  Filter,
  Grid,
  List,
  Bookmark,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import Navbar from "../Components/NavBar";
import Header from "../Components/Header";



export default function JobPortal() {
  return (
    <div className="min-h-screen bg-[#f1f2f4]">
      {/* Top Navigation */}
            <Navbar activePage="FindJob"/>
                        
                  
             {/* Logo and Search Bar */}
              <Header/>
      {/* Main Content */}
      <main className="container mx-auto px-4 py-6">
        

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 bg-white text-[#5e6670] text-sm rounded-md border border-[#e4e5e8] flex items-center">
              Design <ChevronDown className="ml-1 w-3 h-3" />
            </span>
            <span className="px-3 py-1 bg-white text-[#5e6670] text-sm rounded-md border border-[#e4e5e8] flex items-center">
              New York <ChevronDown className="ml-1 w-3 h-3" />
            </span>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center">
              <span className="text-sm text-[#5e6670] mr-2">Latest</span>
              <ChevronDown className="w-4 h-4 text-[#5e6670]" />
            </div>
            <div className="flex items-center">
              <span className="text-sm text-[#5e6670] mr-2">12 per page</span>
              <ChevronDown className="w-4 h-4 text-[#5e6670]" />
            </div>
            <div className="flex items-center gap-1">
              <a href="./FindJob" className="p-1 bg-white border border-[#e4e5e8] rounded">
                <Grid className="w-4 h-4 text-[#5e6670]" />
              </a>
              <a href="./JobPortal" className="p-1 bg-white border border-[#e4e5e8] rounded">
                <List className="w-4 h-4 text-[#0a65cc]" />
              </a>
            </div>
          </div>
        </div>

        {/* Job Listings */}
        <div className="space-y-4">
          {/* Marketing Manager */}
          <div className="bg-[#fceeee] border border-[#e4e5e8] rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#ea4c89] rounded-md flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 12m-8 0a8 8 0 1 0 16 0a8 8 0 1 0 -16 0" fill="white" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-[#18191c] font-medium">Marketing Manager</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs px-2 py-0.5 bg-[#e05151] text-white rounded">Featured</span>
                    <span className="text-xs px-2 py-0.5 bg-[#e7f0fa] text-[#0a65cc] rounded">Remote</span>
                  </div>
                  <div className="flex items-center gap-6 mt-2">
                    <div className="flex items-center text-xs text-[#5e6670]">
                      <MapPin className="w-3 h-3 mr-1" />
                      New Mexico, USA
                    </div>
                    <div className="flex items-center text-xs text-[#5e6670]">
                      <span className="mr-1">$</span>
                      $50k-80k/month
                    </div>
                    <div className="flex items-center text-xs text-[#5e6670]">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-1"></span>4 Days Remaining
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="p-1">
                  <Bookmark className="w-5 h-5 text-[#5e6670] fill-[#5e6670]" />
                </button>
                <button className="flex items-center px-4 py-2 bg-[#e7f0fa] text-[#0a65cc] rounded text-sm">
                  Apply Now
                  <ArrowRight className="ml-1 w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Project Manager */}
          <div className="bg-white border border-[#e4e5e8] rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-black rounded-md flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12 6.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11zm0 9a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-[#18191c] font-medium">Project Manager</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs px-2 py-0.5 bg-[#e05151] text-white rounded">Featured</span>
                    <span className="text-xs px-2 py-0.5 bg-[#e7f0fa] text-[#0a65cc] rounded">Full Time</span>
                  </div>
                  <div className="flex items-center gap-6 mt-2">
                    <div className="flex items-center text-xs text-[#5e6670]">
                      <MapPin className="w-3 h-3 mr-1" />
                      Dhaka, Bangladesh
                    </div>
                    <div className="flex items-center text-xs text-[#5e6670]">
                      <span className="mr-1">$</span>
                      $50k-80k/month
                    </div>
                    <div className="flex items-center text-xs text-[#5e6670]">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-1"></span>4 Days Remaining
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="p-1">
                  <Bookmark className="w-5 h-5 text-[#5e6670]" />
                </button>
                <button className="flex items-center px-4 py-2 bg-[#e7f0fa] text-[#0a65cc] rounded text-sm">
                  Apply Now
                  <ArrowRight className="ml-1 w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Interaction Designer */}
          <div className="bg-white border border-[#e4e5e8] rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-black rounded-md flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="24" height="24" rx="4" fill="black" />
                    <path d="M12 6v12M6 12h12" stroke="white" strokeWidth="2" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-[#18191c] font-medium">Interaction Designer</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs px-2 py-0.5 bg-[#e05151] text-white rounded">Featured</span>
                    <span className="text-xs px-2 py-0.5 bg-[#e7f0fa] text-[#0a65cc] rounded">Full Time</span>
                  </div>
                  <div className="flex items-center gap-6 mt-2">
                    <div className="flex items-center text-xs text-[#5e6670]">
                      <MapPin className="w-3 h-3 mr-1" />
                      New York, USA
                    </div>
                    <div className="flex items-center text-xs text-[#5e6670]">
                      <span className="mr-1">$</span>
                      $50k-80k/month
                    </div>
                    <div className="flex items-center text-xs text-[#5e6670]">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-1"></span>4 Days Remaining
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="p-1">
                  <Bookmark className="w-5 h-5 text-[#5e6670] fill-[#5e6670]" />
                </button>
                <button className="flex items-center px-4 py-2 bg-[#e7f0fa] text-[#0a65cc] rounded text-sm">
                  Apply Now
                  <ArrowRight className="ml-1 w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Networking Engineer */}
          <div className="bg-white border border-[#e4e5e8] rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#eb524f] rounded-md flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 12m-8 0a8 8 0 1 0 16 0a8 8 0 1 0 -16 0" fill="white" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-[#18191c] font-medium">Networking Engineer</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs px-2 py-0.5 bg-[#e7f0fa] text-[#0a65cc] rounded">Full Time</span>
                  </div>
                  <div className="flex items-center gap-6 mt-2">
                    <div className="flex items-center text-xs text-[#5e6670]">
                      <MapPin className="w-3 h-3 mr-1" />
                      Washington, USA
                    </div>
                    <div className="flex items-center text-xs text-[#5e6670]">
                      <span className="mr-1">$</span>
                      $30k-$35k
                    </div>
                    <div className="flex items-center text-xs text-[#5e6670]">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-1"></span>4 Days Remaining
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="p-1">
                  <Bookmark className="w-5 h-5 text-[#5e6670] fill-[#5e6670]" />
                </button>
                <button className="flex items-center px-4 py-2 bg-[#e7f0fa] text-[#0a65cc] rounded text-sm">
                  Apply Now
                  <ArrowRight className="ml-1 w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Product Designer */}
          <div className="bg-white border border-[#e4e5e8] rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#0066ff] rounded-md flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="24" height="24" rx="4" fill="#0066ff" />
                    <path d="M6 6h12v12H6V6z" fill="white" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-[#18191c] font-medium">Product Designer</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs px-2 py-0.5 bg-[#e7f0fa] text-[#0a65cc] rounded">Full Time</span>
                  </div>
                  <div className="flex items-center gap-6 mt-2">
                    <div className="flex items-center text-xs text-[#5e6670]">
                      <MapPin className="w-3 h-3 mr-1" />
                      Ohio, USA
                    </div>
                    <div className="flex items-center text-xs text-[#5e6670]">
                      <span className="mr-1">$</span>
                      $50k-80k/month
                    </div>
                    <div className="flex items-center text-xs text-[#5e6670]">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-1"></span>4 Days Remaining
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="p-1">
                  <Bookmark className="w-5 h-5 text-[#5e6670]" />
                </button>
                <button className="flex items-center px-4 py-2 bg-[#e7f0fa] text-[#0a65cc] rounded text-sm">
                  Apply Now
                  <ArrowRight className="ml-1 w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Junior Graphic Designer - Highlighted */}
          <div className="bg-white border-2 border-[#0a65cc] rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#0acf83] rounded-md flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="24" height="24" rx="4" fill="#0acf83" />
                    <path d="M12 6v12M6 12h12" stroke="white" strokeWidth="2" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-[#18191c] font-medium">Junior Graphic Designer</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs px-2 py-0.5 bg-[#e7f0fa] text-[#0a65cc] rounded">Full Time</span>
                  </div>
                  <div className="flex items-center gap-6 mt-2">
                    <div className="flex items-center text-xs text-[#5e6670]">
                      <MapPin className="w-3 h-3 mr-1" />
                      Khulna, Bangladesh
                    </div>
                    <div className="flex items-center text-xs text-[#5e6670]">
                      <span className="mr-1">$</span>
                      $30k-$35k
                    </div>
                    <div className="flex items-center text-xs text-[#5e6670]">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-1"></span>4 Days Remaining
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="p-1">
                  <Bookmark className="w-5 h-5 text-[#5e6670]" />
                </button>
                <button className="flex items-center px-4 py-2 bg-[#0a65cc] text-white rounded text-sm">
                  Apply Now
                  <ArrowRight className="ml-1 w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Software Engineer */}
          <div className="bg-white border border-[#e4e5e8] rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#1da1f2] rounded-md flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M22 5.897a8.49 8.49 0 01-2.36.644 4.124 4.124 0 001.805-2.27 8.217 8.217 0 01-2.606.996 4.123 4.123 0 00-7.016 3.766 11.716 11.716 0 01-8.5-4.307 4.123 4.123 0 001.275 5.5A4.106 4.106 0 012 9.732v.052a4.12 4.12 0 003.305 4.037 4.11 4.11 0 01-1.86.07 4.123 4.123 0 003.85 2.86A8.27 8.27 0 012 18.59a11.673 11.673 0 006.335 1.858c7.627 0 11.795-6.315 11.795-11.792 0-.18-.004-.358-.013-.536A8.453 8.453 0 0022 5.897z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-[#18191c] font-medium">Software Engineer</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs px-2 py-0.5 bg-[#e7f0fa] text-[#0a65cc] rounded">Full Time</span>
                  </div>
                  <div className="flex items-center gap-6 mt-2">
                    <div className="flex items-center text-xs text-[#5e6670]">
                      <MapPin className="w-3 h-3 mr-1" />
                      Montana, USA
                    </div>
                    <div className="flex items-center text-xs text-[#5e6670]">
                      <span className="mr-1">$</span>
                      $30k-$35k
                    </div>
                    <div className="flex items-center text-xs text-[#5e6670]">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-1"></span>4 Days Remaining
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="p-1">
                  <Bookmark className="w-5 h-5 text-[#5e6670]" />
                </button>
                <button className="flex items-center px-4 py-2 bg-[#e7f0fa] text-[#0a65cc] rounded text-sm">
                  Apply Now
                  <ArrowRight className="ml-1 w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Front End Developer */}
          <div className="bg-white border border-[#e4e5e8] rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#1877f2] rounded-md flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M24 12.073c0-5.8-4.703-10.503-10.503-10.503S2.994 6.273 2.994 12.073c0 5.242 3.84 9.584 8.859 10.373v-7.337h-2.668v-3.036h2.668V9.458c0-2.633 1.568-4.086 3.966-4.086 1.15 0 2.35.205 2.35.205v2.585h-1.324c-1.304 0-1.712.81-1.712 1.64v1.97h2.912l-.465 3.036h-2.447v7.337c5.02-.788 8.859-5.131 8.859-10.373z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-[#18191c] font-medium">Front End Developer</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs px-2 py-0.5 bg-[#e8f1ff] text-[#0a65cc] rounded">Contract Base</span>
                  </div>
                  <div className="flex items-center gap-6 mt-2">
                    <div className="flex items-center text-xs text-[#5e6670]">
                      <MapPin className="w-3 h-3 mr-1" />
                      Sivas, Turkey
                    </div>
                    <div className="flex items-center text-xs text-[#5e6670]">
                      <span className="mr-1">$</span>
                      $30k-$35k
                    </div>
                    <div className="flex items-center text-xs text-[#5e6670]">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-1"></span>4 Days Remaining
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="p-1">
                  <Bookmark className="w-5 h-5 text-[#5e6670]" />
                </button>
                <button className="flex items-center px-4 py-2 bg-[#e7f0fa] text-[#0a65cc] rounded text-sm">
                  Apply Now
                  <ArrowRight className="ml-1 w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Technical Support Specialist */}
          <div className="bg-white border border-[#e4e5e8] rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-md flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="24" height="24" rx="4" fill="white" />
                    <path d="M6 6h4v4H6V6z" fill="#36c5f0" />
                    <path d="M14 6h4v4h-4V6z" fill="#2eb67d" />
                    <path d="M6 14h4v4H6v-4z" fill="#ecb22e" />
                    <path d="M14 14h4v4h-4v-4z" fill="#e01e5a" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-[#18191c] font-medium">Technical Support Specialist</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs px-2 py-0.5 bg-[#e7f0fa] text-[#0a65cc] rounded">Full Time</span>
                  </div>
                  <div className="flex items-center gap-6 mt-2">
                    <div className="flex items-center text-xs text-[#5e6670]">
                      <MapPin className="w-3 h-3 mr-1" />
                      Chattogram, Bangladesh
                    </div>
                    <div className="flex items-center text-xs text-[#5e6670]">
                      <span className="mr-1">$</span>
                      $30k-$35k
                    </div>
                    <div className="flex items-center text-xs text-[#5e6670]">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-1"></span>4 Days Remaining
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="p-1">
                  <Bookmark className="w-5 h-5 text-[#5e6670] fill-[#5e6670]" />
                </button>
                <button className="flex items-center px-4 py-2 bg-[#e7f0fa] text-[#0a65cc] rounded text-sm">
                  Apply Now
                  <ArrowRight className="ml-1 w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center mt-8">
            <div className="flex items-center gap-1">
              <button className="w-8 h-8 flex items-center justify-center rounded-md border border-[#e4e5e8] text-[#5e6670]">
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button className="w-8 h-8 flex items-center justify-center rounded-md bg-[#0a65cc] text-white">
                01
              </button>
              <button className="w-8 h-8 flex items-center justify-center rounded-md border border-[#e4e5e8] text-[#5e6670]">
                02
              </button>
              <button className="w-8 h-8 flex items-center justify-center rounded-md border border-[#e4e5e8] text-[#5e6670]">
                03
              </button>
              <button className="w-8 h-8 flex items-center justify-center rounded-md border border-[#e4e5e8] text-[#5e6670]">
                04
              </button>
              <button className="w-8 h-8 flex items-center justify-center rounded-md border border-[#e4e5e8] text-[#5e6670]">
                05
              </button>
              <button className="w-8 h-8 flex items-center justify-center rounded-md border border-[#e4e5e8] text-[#5e6670]">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
