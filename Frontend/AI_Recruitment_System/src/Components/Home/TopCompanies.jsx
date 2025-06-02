import { ChevronLeft, ChevronRight } from "lucide-react"
import {   MapPin } from "lucide-react";
import { CompanyImage } from '/src/backend_integration/Handleimages.jsx';
import { useRef, useState, useEffect } from "react";

const companies = Array.from({ length: 20 }).map((_, i) => ({
  name: `Company ${i + 1}`,
  location: "United States",
  featured: i % 2 === 0,
}));

export default function TopCompanies() {
const scrollRef = useRef(null);

  const scrollByPage = (direction) => {
    const container = scrollRef.current;
    if (container) {
      container.scrollBy({
        left: direction * container.offsetWidth,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6  ">
        <h2 className="text-2xl font-bold text-[#18191c]">Top 20 companies</h2>
        <div className="flex gap-2">
          <button
            onClick={() => scrollByPage(-1)}
            className="cursor-pointer w-8 h-8 rounded-full border border-[#edeff5] flex items-center justify-center bg-[#e8f1ff] text-[#0a65cc] hover:bg-[#0a65cc] hover:text-white transition-all"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={() => scrollByPage(1)}
            className="cursor-pointer w-8 h-8 rounded-full border border-[#edeff5] flex items-center justify-center bg-[#e8f1ff] text-[#0a65cc] hover:bg-[#0a65cc] hover:text-white transition-all"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      <div className="overflow-hidden ">
        <div
          ref={scrollRef}
          className="grid grid-flow-col     grid-rows-2  overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory gap-6"
           
        >
          {companies.map((company, i) => (
            <div
              key={i}
              className="shrink-0 snap-start w-full "
            >
              <CompanyCard {...company} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}




function CompanyCard({
    name,
    location,
    featured = false,
  }) {
    return (
      <div className={`bg-white rounded-lg hover:border-2 hover:border-[#0a65cc] border-2 border-[#edeff5]  p-4 shadow-sm hover:shadow-md transition-all  hover:shadow-black/5`}>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12  rounded-md flex items-center justify-center text-white">
            <CompanyImage id={1} pre_link="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/800px-Apple_logo_black.svg.png" type="invoice" />
            </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-medium">{name}</h3>
              {featured && <span className="text-xs bg-[#fceeee] text-[#e05151] px-2 py-0.5 rounded">Featured</span>}
            </div>
            <div className="flex items-center gap-1 text-sm text-[#939aad]">
                  <MapPin className="h-4 w-4 text-[#9199a3]" />
              {location}
            </div>
          </div>
        </div>
        <button
          className={`cursor-pointer hover:bg-[#0a65cc] hover:text-white  shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5 hover:shadow-black/5 w-full py-2 rounded text-center text-sm font-medium `}
        >
          Open Position
        </button>
      </div>
    );
  }