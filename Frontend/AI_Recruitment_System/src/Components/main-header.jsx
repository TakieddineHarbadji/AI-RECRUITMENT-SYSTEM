
import { Link } from "react-router-dom";
import { useState } from "react"
import { ChevronDown, Globe, Phone, Search, User } from "lucide-react"

export default function MainHeader() {
  const [searchValue, setSearchValue] = useState("")

  return (
    <header className="bg-white border-b">
      {/* Top Navigation */}
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-2 text-sm">
          <nav className="flex space-x-4">
            <Link href="/" className="text-gray-600 hover:text-gray-900">
              Home
            </Link>
            <Link href="/find-job" className="text-gray-600 hover:text-gray-900">
              Find Job
            </Link>
            <Link href="/find-employers" className="text-blue-600 font-medium border-b-2 border-blue-600">
              Find Employers
            </Link>
            <Link href="/dashboard" className="text-gray-600 hover:text-gray-900">
              Dashboard
            </Link>
            <Link href="/job-alerts" className="text-gray-600 hover:text-gray-900">
              Job Alerts
            </Link>
            <Link href="/customer-support" className="text-gray-600 hover:text-gray-900">
              Customer Support
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="flex items-center text-gray-600">
              <Phone className="h-3 w-3 mr-1" />
              <span>+1 202-555-0179</span>
            </div>

            <div className="flex items-center text-gray-600">
              <Globe className="h-3 w-3 mr-1" />
              <span>English</span>
              <ChevronDown className="h-3 w-3 ml-1" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <Link href="/" className="flex items-center text-blue-600">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2"
              >
                <rect width="24" height="24" rx="4" fill="#1D4ED8" />
                <path d="M7 12H17M7 8H17M7 16H13" stroke="white" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <span className="font-bold text-xl">AIRESY</span>
            </Link>

            <div className="flex items-center text-sm">
              <div className="flex items-center mr-6 bg-green-50 text-green-800 px-2 py-1 rounded">
                <span className="bg-green-600 h-2 w-2 rounded-full mr-1"></span>
                <span>Angelia</span>
                <ChevronDown className="h-3 w-3 ml-1" />
              </div>

              <div className="relative">
                <input
                  type="text"
                  placeholder="Job title, keyword, company"
                  className="pl-9 pr-3 py-2 border rounded-md w-64"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              </div>
            </div>
          </div>

          <div className="flex items-center">
            <button variant="ghost" size="sm" className="mr-3">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M19 14V17H22V19H19V22H17V19H14V17H17V14H19ZM12 17V15H7V17H12ZM9 2L10 4H21V16H13.35C13.1219 15.4154 12.7838 14.8784 12.36 14.41L12 14H7V12H12.35C11.83 10.8 12 9.27 12.82 8.27C13.22 7.82 13.76 7.45 14.36 7.25C14.95 7.06 15.59 7.06 16.18 7.26C16.78 7.46 17.32 7.82 17.72 8.32C18.12 8.81 18.35 9.41 18.38 10.03C18.41 10.65 18.24 11.26 17.89 11.79C16.5 11.88 15.29 12.69 14.66 13.83C15.14 13.27 15.76 12.83 16.46 12.56C17.17 12.29 17.93 12.21 18.68 12.34C19.42 12.47 20.1 12.8 20.65 13.29C21.2 13.78 21.59 14.41 21.79 15.12C18.68 15.12 17.85 15.12 17 15.12C16.24 15.12 15.5 15.36 14.89 15.8C14.3 16.25 13.89 16.88 13.76 17.59C13.92 17.54 14.09 17.54 14.26 17.5C15.46 17.35 16.67 17.88 17.32 18.91C17.37 19 17.43 19.08 17.47 19.17C16.36 19.17 14.5 19.17 12.39 19.17C12.28 19.17 12.16 19.16 12.04 19.13C10.7 18.95 9.63 17.85 9.5 16.5V5H5L4 3H1V5H3L6.6 11.59L5.25 14.04C5.09 14.32 5 14.65 5 15C5 15.5304 5.21071 16.0391 5.58579 16.4142C5.96086 16.7893 6.46957 17 7 17H17V15H7.42C7.3537 15 7.29011 14.9737 7.24322 14.9268C7.19634 14.8799 7.17 14.8163 7.17 14.75C7.17 14.7 7.18 14.66 7.2 14.63L8.1 13H15.55C16.3 13 16.96 12.59 17.3 11.97L20.88 5.5C20.95 5.34 21 5.17 21 5C21 4.46957 20.7893 3.96086 20.4142 3.58579C20.0391 3.21071 19.5304 3 19 3H8.53L7.53 1H9V2ZM15.5 10.5C15.5 10.6326 15.4473 10.7598 15.3536 10.8536C15.2598 10.9473 15.1326 11 15 11C14.8674 11 14.7402 10.9473 14.6464 10.8536C14.5527 10.7598 14.5 10.6326 14.5 10.5C14.5 10.3674 14.5527 10.2402 14.6464 10.1464C14.7402 10.0527 14.8674 10 15 10C15.1326 10 15.2598 10.0527 15.3536 10.1464C15.4473 10.2402 15.5 10.3674 15.5 10.5Z"
                  fill="#334155"
                />
              </svg>
            </button>

            <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white">
              <User className="h-5 w-5" />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}





{/* Header */}
/*
<header className=" border-b border-gray-400">
<div className="container mx-auto px-4 py-3">
  <div className="flex items-center justify-between">
    <div className="flex items-center space-x-6">
      <Link href="/" className="text-sm font-medium text-gray-500 hover:text-gray-900">
        Home
      </Link>
      <Link href="/find-job" className="text-sm font-medium text-[#0a65cc] hover:text-[#0a65cc]">
        Find Job
      </Link>
      <Link href="/find-employers" className="text-sm font-medium text-gray-500 hover:text-gray-900">
        Find Employers
      </Link>
      <Link href="/dashboard" className="text-sm font-medium text-gray-500 hover:text-gray-900">
        Dashboard
      </Link>
      <Link href="/job-alerts" className="text-sm font-medium text-gray-500 hover:text-gray-900">
        Job Alerts
      </Link>
      <Link href="/customer-supports" className="text-sm font-medium text-gray-500 hover:text-gray-900">
        Customer Supports
      </Link>
    </div>
    <div className="flex items-center space-x-4">
      <div className="flex items-center text-sm">
        <span className="text-gray-600">+1-202-555-0178</span>
      </div>
      <div className="flex items-center text-sm">
        <span className="flex items-center gap-1">
          <img
            src="/placeholder.svg?height=18&width=24"
            width={24}
            height={18}
            alt="US Flag"
            className="rounded"
          />
          <span>English</span>
          <ChevronDown className="h-4 w-4" />
        </span>
      </div>
    </div>
  </div>
</div>
</header>
*/
{/* Search Bar */}
/*
<div className=" border-b border-gray-400 bg-white py-4">
<div className="container mx-auto px-4">
  <div className="flex items-center justify-between">
    <div className="flex items-center">
      <div className="flex items-center mr-8">
        <div className="bg-[#e7f0fa] p-2 rounded-md mr-2">
          <img
            src="/placeholder.svg?height=24&width=24"
            width={24}
            height={24}
            alt="Briefcase"
            className="text-[#0a65cc]"
          />
        </div>
        <span className="text-xl font-bold">AIRESY</span>
      </div>
      <div className="flex items-center bg-[#f1f2f4] rounded-md px-2 py-1 mr-4">
        <div className="flex items-center">
          <div className="w-4 h-4 bg-green-500 rounded-sm mr-2"></div>
          <span className="text-sm mr-1">Algeria</span>
          <ChevronDown className="h-4 w-4" />
        </div>
      </div>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
        <input
          className="pl-10 pr-4 py-2 w-[300px] bg-[#f1f2f4] border-0 rounded-md"
          placeholder="Job title, keyword, company"
        />
      </div>
    </div>
    <div className="flex items-center space-x-4">
      <Bell className="h-5 w-5 text-gray-600" />
      <div className="h-10 w-10 rounded-full overflow-hidden">
        <img
          src="/placeholder.svg?height=40&width=40"
          width={40}
          height={40}
          alt="User"
          className="object-cover"
        />
      </div>
    </div>
  </div>
</div>
</div>
*/ 