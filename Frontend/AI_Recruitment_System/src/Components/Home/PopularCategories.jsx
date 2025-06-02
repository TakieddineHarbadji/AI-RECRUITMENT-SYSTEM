import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react"

export default function PopularCategories() {
  return (
<section className="py-8 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-[#18191c] text-2xl font-semibold">Popular category</h2>
          <Link href="#" className="group text-[#0a65cc] flex items-center text-sm font-medium transition-all hover:-translate-y-1">
            View All <ArrowRight className="ml-1 h-4 w-4 transition-all group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Graphics & Design */}
          <div className="bg-white rounded-lg p-4 flex items-center shadow-sm hover:shadow-md transition-all hover:-translate-y-1 hover:shadow-black/5">
            <div className="w-12 h-12 bg-[#e8f1ff] rounded-lg flex items-center justify-center mr-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M2 7.5C2 7.10218 2.15804 6.72064 2.43934 6.43934C2.72064 6.15804 3.10218 6 3.5 6H20.5C20.8978 6 21.2794 6.15804 21.5607 6.43934C21.842 6.72064 22 7.10218 22 7.5V16.5C22 16.8978 21.842 17.2794 21.5607 17.5607C21.2794 17.842 20.8978 18 20.5 18H3.5C3.10218 18 2.72064 17.842 2.43934 17.5607C2.15804 17.2794 2 16.8978 2 16.5V7.5Z"
                  stroke="#0a65cc"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7 15C8.10457 15 9 14.1046 9 13C9 11.8954 8.10457 11 7 11C5.89543 11 5 11.8954 5 13C5 14.1046 5.89543 15 7 15Z"
                  stroke="#0a65cc"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path d="M13 12L22 7" stroke="#0a65cc" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div>
              <h3 className="text-[#18191c] font-medium">Graphics & Design</h3>
              <p className="text-[#767f8c] text-sm">387 Open position</p>
            </div>
          </div>

          {/* Code & Programming */}
          <div className="bg-white rounded-lg p-4 flex items-center shadow-sm hover:shadow-md transition-all hover:-translate-y-1 hover:shadow-black/5">
            <div className="w-12 h-12 bg-[#e8f1ff] rounded-lg flex items-center justify-center mr-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M16 18L22 12L16 6"
                  stroke="#0a65cc"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8 6L2 12L8 18"
                  stroke="#0a65cc"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-[#18191c] font-medium">Code & Programming</h3>
              <p className="text-[#767f8c] text-sm">312 Open position</p>
            </div>
          </div>

          {/* Digital Marketing */}
          <div className="bg-white rounded-lg p-4 flex items-center shadow-sm hover:shadow-md transition-all hover:-translate-y-1 hover:shadow-black/5">
            <div className="w-12 h-12 bg-[#e8f1ff] rounded-lg flex items-center justify-center mr-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 8V16" stroke="#0a65cc" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M18 12H6" stroke="#0a65cc" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path
                  d="M21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 18.364C17.5282 19.1997 16.5361 19.8626 15.4442 20.3149C14.3522 20.7672 13.1819 21 12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12Z"
                  stroke="#0a65cc"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-[#18191c] font-medium">Digital Marketing</h3>
              <p className="text-[#767f8c] text-sm">287 Open position</p>
            </div>
          </div>

          {/* Video & Animation */}
          <div className="bg-white rounded-lg p-4 flex items-center shadow-sm hover:shadow-md transition-all hover:-translate-y-1 hover:shadow-black/5">
            <div className="w-12 h-12 bg-[#e8f1ff] rounded-lg flex items-center justify-center mr-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M23 7L16 12L23 17V7Z"
                  stroke="#0a65cc"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14 5H3C1.89543 5 1 5.89543 1 7V17C1 18.1046 1.89543 19 3 19H14C15.1046 19 16 18.1046 16 17V7C16 5.89543 15.1046 5 14 5Z"
                  stroke="#0a65cc"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-[#18191c] font-medium">Video & Animation</h3>
              <p className="text-[#767f8c] text-sm">247 Open position</p>
            </div>
          </div>

          {/* Music & Audio */}
          <div className="bg-white rounded-lg p-4 flex items-center shadow-sm hover:shadow-md transition-all hover:-translate-y-1 hover:shadow-black/5">
            <div className="w-12 h-12 bg-[#e8f1ff] rounded-lg flex items-center justify-center mr-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M9 18V5L21 3V16"
                  stroke="#0a65cc"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6 21C7.65685 21 9 19.6569 9 18C9 16.3431 7.65685 15 6 15C4.34315 15 3 16.3431 3 18C3 19.6569 4.34315 21 6 21Z"
                  stroke="#0a65cc"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18 19C19.6569 19 21 17.6569 21 16C21 14.3431 19.6569 13 18 13C16.3431 13 15 14.3431 15 16C15 17.6569 16.3431 19 18 19Z"
                  stroke="#0a65cc"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-[#18191c] font-medium">Music & Audio</h3>
              <p className="text-[#767f8c] text-sm">204 Open position</p>
            </div>
          </div>

          {/* Account & Finance */}
          <div className="bg-white rounded-lg p-4 flex items-center shadow-sm hover:shadow-md transition-all hover:-translate-y-1 hover:shadow-black/5">
            <div className="w-12 h-12 bg-[#e8f1ff] rounded-lg flex items-center justify-center mr-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M17 11H7C5.89543 11 5 11.8954 5 13V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V13C19 11.8954 18.1046 11 17 11Z"
                  stroke="#0a65cc"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 17C12.5523 17 13 16.5523 13 16C13 15.4477 12.5523 15 12 15C11.4477 15 11 15.4477 11 16C11 16.5523 11.4477 17 12 17Z"
                  stroke="#0a65cc"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8 11V7C8 5.93913 8.42143 4.92172 9.17157 4.17157C9.92172 3.42143 10.9391 3 12 3C13.0609 3 14.0783 3.42143 14.8284 4.17157C15.5786 4.92172 16 5.93913 16 7V11"
                  stroke="#0a65cc"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-[#18191c] font-medium">Account & Finance</h3>
              <p className="text-[#767f8c] text-sm">167 Open position</p>
            </div>
          </div>

          {/* Health & Care */}
          <div className="bg-white rounded-lg p-4 flex items-center shadow-sm hover:shadow-md transition-all hover:-translate-y-1 hover:shadow-black/5">
            <div className="w-12 h-12 bg-[#e8f1ff] rounded-lg flex items-center justify-center mr-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M22 12H18L15 21L9 3L6 12H2"
                  stroke="#0a65cc"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-[#18191c] font-medium">Health & Care</h3>
              <p className="text-[#767f8c] text-sm">125 Open position</p>
            </div>
          </div>

          {/* Data & Science */}
          <div className="bg-white rounded-lg p-4 flex items-center shadow-sm hover:shadow-md transition-all hover:-translate-y-1 hover:shadow-black/5">
            <div className="w-12 h-12 bg-[#e8f1ff] rounded-lg flex items-center justify-center mr-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 8C13.6569 8 15 6.65685 15 5C15 3.34315 13.6569 2 12 2C10.3431 2 9 3.34315 9 5C9 6.65685 10.3431 8 12 8Z"
                  stroke="#0a65cc"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 22C13.6569 22 15 20.6569 15 19C15 17.3431 13.6569 16 12 16C10.3431 16 9 17.3431 9 19C9 20.6569 10.3431 22 12 22Z"
                  stroke="#0a65cc"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5 15C6.65685 15 8 13.6569 8 12C8 10.3431 6.65685 9 5 9C3.34315 9 2 10.3431 2 12C2 13.6569 3.34315 15 5 15Z"
                  stroke="#0a65cc"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M19 15C20.6569 15 22 13.6569 22 12C22 10.3431 20.6569 9 19 9C17.3431 9 16 10.3431 16 12C16 13.6569 17.3431 15 19 15Z"
                  stroke="#0a65cc"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-[#18191c] font-medium">Data & Science</h3>
              <p className="text-[#767f8c] text-sm">57 Open position</p>
            </div>
          </div>
        </div>
      </section>
      );
    }