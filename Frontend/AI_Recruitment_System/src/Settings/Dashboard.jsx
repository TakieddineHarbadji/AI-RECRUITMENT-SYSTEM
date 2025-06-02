"use client"
import { NavLink } from "react-router-dom"

import Personal from './Settings_personal.jsx'
import Social from './Settings_social.jsx'
import Profile from './Settings_profile.jsx'
import Account from './Settings_account.jsx'

import Navbar from "../Components/NavBar";
import Header from "../Components/Header";
import axios from 'axios';

import { useState } from "react"
import {
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


// In a real project, you would import your UI components from your component library
// For simplicity, I'm using basic HTML elements styled with Tailwind CSS
function Button({ children, className, ...props }) {
  return (
    <button className={`px-4 py-2 rounded-md ${className}`} {...props}>
      {children}
    </button>
  )
}

function Input({ className, ...props }) {
  return <input className={`border border-[#e4e5e8] rounded-md p-2.5 ${className}`} {...props} />
}

function Dashboard() {
  const [activeTab, setActiveTab] = useState("personal")
  

  return (
    <div className="min-h-screen bg-white">
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
              <span className="text-xl font-bold text-[#18191c]">AIRESY</span>
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
        <main className="flex-1 p-8">
          <h1 className="text-2xl font-bold text-[#18191c] mb-6">Setting</h1>

          {/* Tabs */}
          <div className="flex border-b border-[#e4e5e8] mb-8">
            <button
              className={`flex items-center px-6 py-4 ${activeTab === "personal" ? "text-[#0a65cc] border-b-2 border-[#0a65cc]" : "text-[#5e6670]"}`}
              onClick={() => setActiveTab("personal")}
            >
              <User className="w-5 h-5 mr-2" />
              Personal
            </button>
            <button
              className={`flex items-center px-6 py-4 ${activeTab === "profile" ? "text-[#0a65cc] border-b-2 border-[#0a65cc]" : "text-[#5e6670]"}`}
              onClick={() => setActiveTab("profile")}
            >
              <User className="w-5 h-5 mr-2" />
              Profile
            </button>
            <button
              className={`flex items-center px-6 py-4 ${activeTab === "social" ? "text-[#0a65cc] border-b-2 border-[#0a65cc]" : "text-[#5e6670]"}`}
              onClick={() => setActiveTab("social")}
            >
              <Globe className = "w-5 h-5 mr-2" size={18} />
              Social Links
            </button>
            <button
              className={`flex items-center px-6 py-4 ${activeTab === "account" ? "text-[#0a65cc] border-b-2 border-[#0a65cc]" : "text-[#5e6670]"}`}
              onClick={() => setActiveTab("account")}
            >
              <Settings className="w-5 h-5 mr-2" />
              Account Setting
            </button>
          </div>

          {/* Tabs Content */}
          {activeTab === "personal" && (
           <Personal />
          )}

          {activeTab === "profile" && (
           <Profile />
          )}
          
          {activeTab === "social" && (
           <Social />
          )}
          
          {activeTab === "account" && (
           <Account />
          )}

        </main>
      </div>

      {/* Footer */}
      <footer className="border-t border-[#e4e5e8] py-4 text-center text-[#9199a3] text-sm">
        © 2024 AIRESY - Job Portal. All rights Reserved
      </footer>
    </div>
  )
}

export default Dashboard
