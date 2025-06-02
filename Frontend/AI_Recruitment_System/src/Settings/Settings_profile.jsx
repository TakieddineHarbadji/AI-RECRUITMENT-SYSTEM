"use client"

import { useState } from "react"
import {
  Bold,
  Italic,
  Underline,
  Strikethrough,
  Link,
  List,
  ListOrdered,
  LogOut,
  Bell,
  Search,
  ChevronDown,
  Calendar,
  Settings,
  Briefcase,
  Heart,
  FileText,
  LayoutDashboard,
  User,
  Globe,
  Shield,
} from "lucide-react"

function Profile() {

  return (
    <div className="min-h-screen flex flex-col  bg-gray-50">
      <main className="flex-1 p-6">

          {/* Profile Form */}
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Nationality</label>
              <div className="relative">
                <select className="block w-full pl-3 pr-10 py-2 text-gray-500 bg-white border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                  <option>Select...</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <ChevronDown size={16} className="text-gray-400" />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="dd/mm/yyyy"
                  className="block w-full pl-3 pr-10 py-2 text-gray-500 bg-white border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <Calendar size={16} className="text-gray-400" />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Gender</label>
              <div className="relative">
                <select className="block w-full pl-3 pr-10 py-2 text-gray-500 bg-white border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                  <option>Select...</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <ChevronDown size={16} className="text-gray-400" />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Marital Status</label>
              <div className="relative">
                <select className="block w-full pl-3 pr-10 py-2 text-gray-500 bg-white border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                  <option>Select...</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <ChevronDown size={16} className="text-gray-400" />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Education</label>
              <div className="relative">
                <select className="block w-full pl-3 pr-10 py-2 text-gray-500 bg-white border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                  <option>Select...</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <ChevronDown size={16} className="text-gray-400" />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Experience</label>
              <div className="relative">
                <select className="block w-full pl-3 pr-10 py-2 text-gray-500 bg-white border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                  <option>Select...</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <ChevronDown size={16} className="text-gray-400" />
                </div>
              </div>
            </div>

            <div className="col-span-2 space-y-2">
              <label className="block text-sm font-medium text-gray-700">Biography</label>
              <div className="border border-gray-300 rounded-md overflow-hidden">
                <textarea
                  placeholder="Write down your biography here. Let the employers know who you are..."
                  className="block w-full p-3 text-gray-500 bg-white border-b border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  rows={6}
                ></textarea>
                <div className="flex items-center p-2 bg-white">
                  <button className="p-1 text-gray-500 hover:text-gray-700">
                    <Bold size={16} />
                  </button>
                  <button className="p-1 text-gray-500 hover:text-gray-700">
                    <Italic size={16} />
                  </button>
                  <button className="p-1 text-gray-500 hover:text-gray-700">
                    <Underline size={16} />
                  </button>
                  <button className="p-1 text-gray-500 hover:text-gray-700">
                    <Strikethrough size={16} />
                  </button>
                  <button className="p-1 text-gray-500 hover:text-gray-700">
                    <Link size={16} />
                  </button>
                  <div className="h-4 w-px bg-gray-300 mx-2"></div>
                  <button className="p-1 text-gray-500 hover:text-gray-700">
                    <List size={16} />
                  </button>
                  <button className="p-1 text-gray-500 hover:text-gray-700">
                    <ListOrdered size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <button className="px-6 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              Save Changes
            </button>
          </div>
        </main>
    </div>
  )
}

export default Profile
