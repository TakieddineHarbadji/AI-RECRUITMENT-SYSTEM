import { Link } from "react-router-dom";
import { Search, MapPin, ChevronDown, Bookmark, ArrowRight } from "lucide-react"
import Navbar from "../Components/NavBar";
import Header from "../Components/Header";

export default function JobPortalwithFiltering() {
  return (
    <div className="min-h-screen bg-white">
      {/* Top Navigation */}
            
      {/* Find Job Section */}
      <div className="container mx-auto px-4 py-6">
        

        {/* Search Filters */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
           
            
            <div className="flex items-center justify-between">
              <button className="flex items-center text-[#0a65cc] font-medium">
                Advance Filter
                <ChevronDown size={16} className="ml-1" />
              </button>
            </div>
          </div>

          
        </div>

        
        
      </div>
    </div>
  )
}
