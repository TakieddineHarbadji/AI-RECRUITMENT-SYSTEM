import placeholder from './placeholder.svg';
import { BookmarkIcon, ChevronLeftIcon, ChevronRightIcon, LogOutIcon, MapPinIcon, 

  Bell,
  Briefcase,
  ChevronDown,
  FileText,
  Globe,
  Heart,
  Link,
  LogOut,
  Search,
  Settings,
  User,
} from "lucide-react"
import { NavLink } from "react-router-dom"
import Navbar from "../Components/NavBar";
import Header from "../Components/Header";
function Input({ className, ...props }) {
  return <input className={`border border-[#e4e5e8] rounded-md p-2.5 ${className}`} {...props} />
}

export default function FaveJ() {
  return (
    <div className="min-h-screen bg-[#f1f2f4]">
      {/* Header */}
      {/* Top Navigation */}
            <Navbar activePage="Settings"/>
            
      
            {/* Logo and Search Bar */}
            <Header/>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-[#f1f2f4] min-h-[calc(100vh-64px)] flex flex-col">
          <div className="p-4 border-b border-[#e4e5e8]">
            <div className="flex items-center">
              <div className="bg-[#e7f0fa] p-2 rounded mr-2">
                <svg
                  className="w-6 h-6 text-[#0a65cc]"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 6H16V4C16 2.89 15.11 2 14 2H10C8.89 2 8 2.89 8 4V6H4C2.89 6 2.01 6.89 2.01 8L2 19C2 20.11 2.89 21 4 21H20C21.11 21 22 20.11 22 19V8C22 6.89 21.11 6 20 6ZM10 4H14V6H10V4ZM20 19H4V8H20V19Z"
                    fill="#0A65CC"
                  />
                </svg>
              </div>
              <span className="text-xl font-bold text-[#18191c]">MyJob</span>
            </div>
          </div>

          <div className="p-4 border-b border-[#e4e5e8]">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Search className="w-5 h-5 text-[#9199a3]" />
              </div>
              <Input
                type="text"
                placeholder="Job tittle, keyword, company"
                className="pl-10 pr-4 py-2 w-full border border-[#e4e5e8] rounded-md focus:ring-[#0a65cc] focus:border-[#0a65cc]"
              />
            </div>


                <div>
                  <label className="block text-[#18191c] font-medium mb-2">Country</label>
                  <div className="relative">
                    <select className="w-full border border-[#e4e5e8] rounded-md p-2.5 pr-10 appearance-none focus:ring-[#0a65cc] focus:border-[#0a65cc]">
      
                      <option>Algeria</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <ChevronDown className="w-5 h-5 text-[#9199a3]" />
                    </div>
                  </div>
                </div>

            </div>


          <div className="p-4">
            <div className="text-xs font-semibold text-[#9199a3] mb-4">CANDIDATE DASHBOARD</div>

<nav className="space-y-1">


  <NavLink
    to="/jobs"
    className={({ isActive }) =>
      `flex items-center p-2 rounded ${
        isActive ? "text-[#0a65cc] bg-white" : "text-[#5e6670] hover:bg-white"
      }`
    }
  >
    <Briefcase className="w-5 h-5 mr-3" />
    Jobs
  </NavLink>

  <NavLink
    to="/favorite-jobs"
    className={({ isActive }) =>
      `flex items-center p-2 rounded ${
        isActive ? "text-[#0a65cc] bg-white" : "text-[#5e6670] hover:bg-white"
      }`
    }
  >
    <Heart className="w-5 h-5 mr-3" />
    Favorite Jobs
  </NavLink>


  <NavLink
    to="/settings"
    className={({ isActive }) =>
      `flex items-center p-2 rounded ${
        isActive ? "text-[#0a65cc] bg-white" : "text-[#5e6670] hover:bg-white"
      }`
    }
  >
    <Settings className="w-5 h-5 mr-3" />
    Settings
  </NavLink>
</nav>
          </div>

          <div className="mt-auto p-4 border-t border-[#e4e5e8]">
            <a href="#" className="flex items-center text-[#5e6670] p-2">
              <LogOut className="w-5 h-5 mr-3" />
              Log-out
            </a>
          </div>
        </aside>


        {/* Main Content */}
        <div className="flex-1">
          <div className="flex justify-between items-center mb-6">
          <a
          href="#"
          className={`ml-3 mt-10 px-4 py-2 rounded text-sm flex items-center ${
            false ? "bg-[#0a65cc] text-white" : "bg-[#e7f0fa] text-[#0a65cc] hover:bg-[#0a65cc] hover:text-white"
          }`}
        >
         Edit
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="ml-1"
          >
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </a>
          </div>

          {/* Job Listings */}
          <div className="space-y-4">
            <JobCard
              logo={placeholder}
              logoBackground="#ffffff"
              title="Technical Support Specialist"
              type="Full Time"
              location="Idaho, USA"
              salary="$15K-$20K"
              days={4}
              highlighted={false}
            />

            <JobCard
              logo={placeholder}
              logoBackground="#ff0000"
              title="UI/UX Designer"
              type="Full Time"
              location="Minnesota, USA"
              salary="$10K-$15K"
              days={4}
              highlighted={false}
            />

            <JobCard
              logo={placeholder}
              logoBackground="#ff4500"
              title="Front End Developer"
              type="Internship"
              location="Mymensingh, Bangladesh"
              salary="$10K-$15K"
              days={4}
              highlighted={false}
              bookmarked={true}
            />

            <JobCard
              logo={placeholder}
              logoBackground="#1e60c6"
              title="Marketing Officer"
              type="Full Time"
              location="Montana, USA"
              salary="$50K-$60K"
              days={4}
              highlighted={false}
            />

            <JobCard
              logo={placeholder}
              logoBackground="#e01e5a"
              title="Networking Engineer"
              type="Full Time"
              location="Michigan, USA"
              salary="$5K-$10K"
              days={4}
              highlighted={false}
              bookmarked={true}
            />

            <JobCard
              logo={placeholder}
              logoBackground="#ffffff"
              title="Senior UX Designer"
              type="Full Time"
              location="United Kingdom of Great Britain"
              salary="$30K-$35K"
              days={4}
              highlighted={true}
            />

            <JobCard
              logo={placeholder}
              logoBackground="#1877f2"
              title="Junior Graphic Designer"
              type="Full Time"
              location="Mymensingh, Bangladesh"
              salary="$40K-$50K"
              days={4}
              highlighted={false}
            />

            <JobCard
              logo={placeholder}
              logoBackground="#1da1f2"
              title="Product Designer"
              type="Full Time"
              location="Sivas, Turkey"
              salary="$50K-$70K"
              days={4}
              highlighted={false}
            />

            <JobCard
              logo={placeholder}
              logoBackground="#eb524f"
              title="Project Manager"
              type="Full Time"
              location="Ohio, USA"
              salary="$50K-$80K"
              days={4}
              highlighted={false}
            />

            <JobCard
              logo={placeholder}
              logoBackground="#f1511b"
              title="Marketing Manager"
              type="Temporary"
              location="Konya, Turkey"
              salary="$20K-$25K"
              days={4}
              highlighted={false}
            />

            <JobCard
              logo={placeholder}
              logoBackground="#000000"
              title="Visual Designer"
              type="Part Time"
              location="Washington, USA"
              salary="$10K-$15K"
              days={4}
              highlighted={false}
            />

            <JobCard
              logo={placeholder}
              logoBackground="#0acf83"
              title="Interaction Designer"
              type="Remote"
              location="Peru, USA"
              salary="$35K-$40K"
              days={4}
              highlighted={false}
              bookmarked={true}
            />

            <JobCard
              logo={placeholder}
              logoBackground="#6fda44"
              title="Senior UX Designer"
              type="Contract Base"
              location="Sylhet, Bangladesh"
              salary="$30K-$35K"
              days={4}
              highlighted={false}
              bookmarked={true}
            />
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-8">
            <nav className="flex items-center space-x-1">
              <button className="w-8 h-8 flex items-center justify-center rounded-full border border-[#e4e5e8] text-[#9199a3]">
                <ChevronLeftIcon className="w-4 h-4" />
              </button>
              <button className="w-8 h-8 flex items-center justify-center rounded-full bg-[#0a65cc] text-white">
                01
              </button>
              <button className="w-8 h-8 flex items-center justify-center rounded-full border border-[#e4e5e8] text-[#5e6670]">
                <ChevronRightIcon className="w-4 h-4" />
              </button>
            </nav>
          </div>

          {/* Footer */}
          <div className="mt-12 text-center text-sm text-[#9199a3]">© 2024 MyJob - Job Portal. All rights Reserved</div>
        </div>
      </div>
    </div>
  )
}

function JobCard({ logo, logoBackground, title, type, location, salary, days, highlighted, bookmarked = false }) {
  const getTypeColor = (type) => {
    switch (type) {
      case "Full Time":
        return "bg-[#e8f1ff] text-[#0a65cc]"
      case "Part Time":
        return "bg-[#e8f1ff] text-[#0a65cc]"
      case "Internship":
        return "bg-[#e7f0fa] text-[#0a65cc]"
      case "Remote":
        return "bg-[#e7f0fa] text-[#0a65cc]"
      case "Contract Base":
        return "bg-[#e7f0fa] text-[#0a65cc]"
      case "Temporary":
        return "bg-[#e7f0fa] text-[#0a65cc]"
      default:
        return "bg-[#e7f0fa] text-[#0a65cc]"
    }
  }

  return (
    <div
      className={`bg-white rounded-lg p-4 flex items-center ${
        highlighted ? "border border-[#0a65cc]" : "border border-transparent"
      }`}
    >
      <div
        className="w-12 h-12 rounded flex items-center justify-center mr-4"
        style={{ backgroundColor: logoBackground }}
      >
        <img src={logo || {placeholder}} width={24} height={24} alt={title} />
      </div>
      <div className="flex-1">
        <div className="flex items-center mb-1">
          <h3 className="font-medium">{title}</h3>
          <span className={`ml-2 text-xs px-2 py-1 rounded ${getTypeColor(type)}`}>{type}</span>
        </div>
        <div className="flex items-center text-sm text-[#9199a3]">
          <div className="flex items-center mr-4">
            <MapPinIcon className="w-3 h-3 mr-1" />
            <span>{location}</span>
          </div>
          <div className="flex items-center mr-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-1"
            >
              <line x1="12" y1="1" x2="12" y2="23"></line>
              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
            </svg>
            <span>{salary}</span>
          </div>
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-1"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            <span>{days} Days Remaining</span>
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <button className={`mr-3 ${bookmarked ? "text-[#0a65cc]" : "text-[#9199a3]"}`}>
          <BookmarkIcon className="w-5 h-5" />
        </button>
        <a
          href="#"
          className={`px-4 py-2 rounded text-sm flex items-center ${
            highlighted ? "bg-[#0a65cc] text-white" : "bg-[#e7f0fa] text-[#0a65cc] hover:bg-[#0a65cc] hover:text-white"
          }`}
        >
          Add CV
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="ml-1"
          >
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </a>
      </div>
    </div>
  )
}
