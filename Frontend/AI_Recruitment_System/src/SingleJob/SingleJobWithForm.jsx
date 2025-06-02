import { Link } from "react-router-dom";
import { Briefcase, Calendar, ChevronRight, GraduationCap, Link2, MapPin, Bell, Search } from "lucide-react"
import JobApplicationModal from "../Components/Job-application-modal";
import Navbar from "../Components/NavBar";
import Header from "../Components/Header";

export default function JobDetailsPage() {
  return (
    <div className="min-h-screen bg-[#ffffff]">
      {/* Top Navigation */}
                  <Navbar/>
                              
                        
                   {/* Logo and Search Bar */}
                    <Header/>
            {/* Main Content */}

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center text-sm mb-6">
          <Link href="/" className="text-[#767f8c]">
            Home
          </Link>
          <ChevronRight className="h-4 w-4 mx-2 text-[#767f8c]" />
          <Link href="/find-job" className="text-[#767f8c]">
            Find Job
          </Link>
          <ChevronRight className="h-4 w-4 mx-2 text-[#767f8c]" />
          <Link href="/graphics-design" className="text-[#767f8c]">
            Graphics & Design
          </Link>
          <ChevronRight className="h-4 w-4 mx-2 text-[#767f8c]" />
          <span className="text-[#191f33]">Job Details</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column - Job Details */}
          <div className="md:col-span-2">
            <div className="flex items-start mb-8">
              <div className="mr-4">
                <div className="h-16 w-16 rounded-full overflow-hidden bg-gradient-to-r from-[#ca2127] to-[#1da1f2] p-0.5">
                  <div className="h-full w-full rounded-full bg-white flex items-center justify-center">
                    <img
                      src="/placeholder.svg?height=60&width=60"
                      alt="Instagram"
                      width={60}
                      height={60}
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <h1 className="text-2xl font-bold text-[#191f33] mb-2">Senior UX Designer</h1>
                <div className="flex items-center mb-2">
                  <Link href="https://instagram.com" className="text-[#0a65cc] flex items-center text-sm">
                    <Link2 className="h-4 w-4 mr-1" />
                    https://instagram.com
                  </Link>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="bg-[#ffeded] text-[#ff4f4f] rounded px-2 py-1 text-xs">Featured</span>
                  <span className="bg-[#e8f1ff] text-[#0a65cc] rounded px-2 py-1 text-xs">Full Time</span>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button className="h-10 w-10 rounded-full border border-[#e4e5e8] flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 text-[#0a65cc]"
                  >
                    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                  </svg>
                </button>
                <button className="bg-[#0a65cc] hover:bg-[#1e60c6] text-white rounded-md px-6 py-2 flex items-center">
                  Apply Now
                  <ChevronRight className="h-4 w-4 ml-1" />
                </button>
              </div>
            </div>

            {/* Job Description */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-[#191f33] mb-4">Job Description</h2>
              <div className="text-[#767f8c] space-y-4">
                <p>
                  Integer aliquet pretium consequat. Donec et turpis tellus. Duis et est ac leo rhoncus tincidunt vitae
                  at nisi. Pellentesque quis justo sit amet arcu commodo consequat.
                </p>
                <p>
                  Vivamus sit amet ligula ullamcorper, pulvinar nisi eu, varius urna. Maecenas blandit felis id massa
                  sodales, a commodo ante consectetur. Sed lobortis diam tincidunt accumsan faucibus. Nunc ac dapibus
                  euismod ante ultricies. Ut non felis in neque facilisis arcu. Suspendisse sollicitudin faucibus
                  aliquam.
                </p>
                <p>
                  Nam dapibus consectetur erat in euismod. Cras vel nisi aliquet nibh. Sed tristique dictum elementum.
                  Quisque in neque sit amet orci interdum tincidunt.
                </p>
              </div>
            </div>

            {/* Responsibilities */}
            <div>
              <h2 className="text-xl font-bold text-[#191f33] mb-4">Responsibilities</h2>
              <ul className="text-[#767f8c] space-y-3 list-disc pl-5">
                <li>Quisque semper gravida est et consectetur.</li>
                <li>Curabitur blandit lorem velit, vitae pretium leo placerat eget.</li>
                <li>Morbi mattis in ipsum ac tempus.</li>
                <li>Curabitur eu vehicula libero. Vestibulum sed purus ullamcorper, lobortis lectus nec.</li>
                <li>vulputate turpis. Quisque ante odio, iaculis a porttitor sit amet.</li>
                <li>lobortis vel lectus. Nulla at risus ut diam.</li>
                <li>commodo feugiat. Nullam laoreet, diam placerat dapibus tincidunt.</li>
                <li>odio metus posuere lorem, id condimentum erat velit nec neque.</li>
              </ul>
            </div>
          </div>

          {/* Right Column - Job Info */}
          <div>
            <div className="bg-white border rounded-lg shadow-sm p-6 mb-6">
              <p className="text-[#767f8c] mb-1">Job expire in:</p>
              <p className="text-[#ff4f4f] font-medium mb-6">June 30, 2021</p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-full bg-[#e8f1ff] flex items-center justify-center mr-3">
                    <Calendar className="h-5 w-5 text-[#0a65cc]" />
                  </div>
                  <div>
                    <p className="text-[#767f8c] text-sm">DATE POSTED:</p>
                    <p className="text-[#191f33] font-medium">July 20, 2021</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-full bg-[#e8f1ff] flex items-center justify-center mr-3">
                    <GraduationCap className="h-5 w-5 text-[#0a65cc]" />
                  </div>
                  <div>
                    <p className="text-[#767f8c] text-sm">EDUCATION:</p>
                    <p className="text-[#191f33] font-medium">Graduation</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-full bg-[#e8f1ff] flex items-center justify-center mr-3">
                    <MapPin className="h-5 w-5 text-[#0a65cc]" />
                  </div>
                  <div>
                    <p className="text-[#767f8c] text-sm">LOCATION:</p>
                    <p className="text-[#191f33] font-medium">New York, USA</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-full bg-[#e8f1ff] flex items-center justify-center mr-3">
                    <Briefcase className="h-5 w-5 text-[#0a65cc]" />
                  </div>
                  <div>
                    <p className="text-[#767f8c] text-sm">JOB TYPE:</p>
                    <p className="text-[#191f33] font-medium">Full Time</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border rounded-lg shadow-sm p-6">
              <div className="flex items-center mb-6">
                <div className="h-12 w-12 rounded-lg overflow-hidden bg-gradient-to-r from-[#ca2127] to-[#1da1f2] p-0.5 mr-3">
                  <div className="h-full w-full rounded-lg bg-white flex items-center justify-center">
                    <img
                      src="/placeholder.svg?height=44&width=44"
                      alt="Instagram"
                      width={44}
                      height={44}
                      className="object-cover"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-[#191f33] font-bold text-lg">Instagram</h3>
                  <p className="text-[#767f8c] text-sm">Social networking service</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between">
                  <p className="text-[#767f8c]">Founded in:</p>
                  <p className="text-[#191f33] font-medium">March 21, 2006</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-[#767f8c]">Organization type:</p>
                  <p className="text-[#191f33] font-medium">Private Company</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-[#767f8c]">Company size:</p>
                  <p className="text-[#191f33] font-medium">120-300 Employees</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Application Modal (would be controlled by state in a real app) */}
      <JobApplicationModal />
    </div>
  );
}
