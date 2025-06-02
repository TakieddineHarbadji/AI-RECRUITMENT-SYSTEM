"use client"

import { useState } from "react"
import { Bell, BriefcaseIcon, ChevronDown, Eye, EyeOff, LogOut, MapPin, Search } from 'lucide-react'


export default function Account() {
  const [profilePublic, setProfilePublic] = useState(true)
  const [resumePublic, setResumePublic] = useState(false)
  
  return (
    <div className="min-h-screen flex flex-col">
      
      {/* Main Content */}
      <div className="flex flex-1">


        {/* Main Content */}
        <main className="flex-1 p-8">
          
          {/* Contact Info */}
          <div className="mb-8">
            <h2 className="text-lg font-medium mb-4">Contact Info</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-[#5e6670] mb-2">Map Location</label>
                <div className="flex">
                  <input 
                    type="text" 
                    className="w-full border border-[#e4e5e8] rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#0a65cc] focus:border-transparent"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-[#5e6670] mb-2">Phone</label>
                <div className="flex">
                  <div className="relative">
                    <select className="appearance-none border border-[#e4e5e8] rounded-md px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-[#0a65cc] focus:border-transparent bg-white">
                      <option>+213</option>
                    </select>
                    <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[#5e6670]" />
                  </div>
                  <input 
                    type="text" 
                    placeholder="Phone number.."
                    className="flex-1 ml-2 border border-[#e4e5e8] rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#0a65cc] focus:border-transparent"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-[#5e6670] mb-2">Email</label>
                <div className="flex">
                  <input 
                    type="email" 
                    placeholder="Email address"
                    className="w-full border border-[#e4e5e8] rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#0a65cc] focus:border-transparent"
                  />
                </div>
              </div>
              
              <button className="bg-[#0a65cc] text-white px-4 py-2 rounded-md font-medium hover:bg-[#0a55cc] transition-colors w-fit">
                Save Changes
              </button>
            </div>
          </div>
          
          {/* Notification */}
          <div className="mb-8">
            <h2 className="text-lg font-medium mb-4">Notification</h2>
            
            <div className="space-y-3">
              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  id="notify-shortlisted" 
                  className="h-4 w-4 text-[#0a65cc] border-[#e4e5e8] rounded focus:ring-[#0a65cc]"
                  defaultChecked
                />
                <label htmlFor="notify-shortlisted" className="ml-2 text-sm text-[#5e6670]">
                  Notify me when employers shortlisted me
                </label>
              </div>
              
              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  id="notify-saved" 
                  className="h-4 w-4 text-[#0a65cc] border-[#e4e5e8] rounded focus:ring-[#0a65cc]"
                />
                <label htmlFor="notify-saved" className="ml-2 text-sm text-[#5e6670]">
                  Notify me when employers saved my profile
                </label>
              </div>
              
              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  id="notify-expire" 
                  className="h-4 w-4 text-[#0a65cc] border-[#e4e5e8] rounded focus:ring-[#0a65cc]"
                />
                <label htmlFor="notify-expire" className="ml-2 text-sm text-[#5e6670]">
                  Notify me when my applied jobs are expire
                </label>
              </div>
              
              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  id="notify-job-alerts" 
                  className="h-4 w-4 text-[#0a65cc] border-[#e4e5e8] rounded focus:ring-[#0a65cc]"
                  defaultChecked
                />
                <label htmlFor="notify-job-alerts" className="ml-2 text-sm text-[#5e6670]">
                  Notify me when I have up to 5 job alerts
                </label>
              </div>
              
              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  id="notify-rejected" 
                  className="h-4 w-4 text-[#0a65cc] border-[#e4e5e8] rounded focus:ring-[#0a65cc]"
                  defaultChecked
                />
                <label htmlFor="notify-rejected" className="ml-2 text-sm text-[#5e6670]">
                  Notify me when employers rejected me
                </label>
              </div>
            </div>
          </div>
          
          {/* Job Alerts */}
          <div className="mb-8">
            <h2 className="text-lg font-medium mb-4">Job Alerts</h2>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-[#5e6670] mb-2">Role</label>
                <div className="flex items-center border border-[#e4e5e8] rounded-md px-4 py-2">
                  <BriefcaseIcon className="h-5 w-5 text-[#5e6670] mr-2" />
                  <input 
                    type="text" 
                    placeholder="Your job roles"
                    className="flex-1 focus:outline-none"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-[#5e6670] mb-2">Location</label>
                <div className="flex items-center border border-[#e4e5e8] rounded-md px-4 py-2">
                  <MapPin className="h-5 w-5 text-[#5e6670] mr-2" />
                  <input 
                    type="text" 
                    placeholder="City, state, country name"
                    className="flex-1 focus:outline-none"
                  />
                </div>
              </div>
            </div>
            
            <button className="mt-4 bg-[#0a65cc] text-white px-4 py-2 rounded-md font-medium hover:bg-[#0a55cc] transition-colors w-fit">
              Save Changes
            </button>
          </div>
          
          {/* Change Password */}
          <div className="mb-8">
            <h2 className="text-lg font-medium mb-4">Change Password</h2>
            
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-[#5e6670] mb-2">Current Password</label>
                <div className="relative">
                  <input 
                    type="password" 
                    placeholder="Password"
                    className="w-full border border-[#e4e5e8] rounded-md px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-[#0a65cc] focus:border-transparent"
                  />
                  <button className="absolute inset-y-0 right-0 pr-3 flex items-center">
                    <Eye className="h-5 w-5 text-[#5e6670]" />
                  </button>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-[#5e6670] mb-2">New Password</label>
                <div className="relative">
                  <input 
                    type="password" 
                    placeholder="Password"
                    className="w-full border border-[#e4e5e8] rounded-md px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-[#0a65cc] focus:border-transparent"
                  />
                  <button className="absolute inset-y-0 right-0 pr-3 flex items-center">
                    <Eye className="h-5 w-5 text-[#5e6670]" />
                  </button>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-[#5e6670] mb-2">Confirm Password</label>
                <div className="relative">
                  <input 
                    type="password" 
                    placeholder="Password"
                    className="w-full border border-[#e4e5e8] rounded-md px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-[#0a65cc] focus:border-transparent"
                  />
                  <button className="absolute inset-y-0 right-0 pr-3 flex items-center">
                    <Eye className="h-5 w-5 text-[#5e6670]" />
                  </button>
                </div>
              </div>
            </div>
            
            <button className="mt-4 bg-[#0a65cc] text-white px-4 py-2 rounded-md font-medium hover:bg-[#0a55cc] transition-colors w-fit">
              Save Changes
            </button>
          </div>
          
          {/* Delete Account */}
          <div>
            <h2 className="text-lg font-medium mb-4">Delete Your Account</h2>
            
            <p className="text-sm text-[#5e6670] mb-4">
              If you delete your JobHunt account, you will no longer be able to get information about the matched jobs, following employers, and job alert, shortlisted jobs and more. You will be abandoned from all the services of JobHunt.com.
            </p>
            
            <button className="flex items-center text-[#e05151] border border-[#e05151] px-4 py-2 rounded-md font-medium hover:bg-[#e05151] hover:text-white transition-colors">
              <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 5.98C17.67 5.65 14.32 5.48 10.98 5.48C9 5.48 7.02 5.58 5.04 5.78L3 5.98" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8.5 4.97L8.72 3.66C8.88 2.71 9 2 10.69 2H13.31C15 2 15.13 2.75 15.28 3.67L15.5 4.97" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M18.85 9.14L18.2 19.21C18.09 20.78 18 22 15.21 22H8.79C6 22 5.91 20.78 5.8 19.21L5.15 9.14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10.33 16.5H13.66" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9.5 12.5H14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Close Account
            </button>
          </div>
        </main>
      </div>
      

    </div>
  )
}
