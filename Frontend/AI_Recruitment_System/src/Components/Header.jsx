import { Search,ChevronDown } from 'lucide-react';
import IconImage from '../assets/icon.PNG';

export default function Header() {
  return (
    <div className="bg-white py-4 px-4 lg:px-16  flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 border-b border-[#e4e5e8] overflow-hidden">
      {/* Top Part: Logo + Buttons */}
      <div className="w-full flex  items-center gap-12">
        
        {/* Logo */}
        
        <div className=" items-center gap-2 hidden sm:flex">
            <img
                src={IconImage} // Replace with your image path
                alt="Logo"
                className="w-10 h-10 bg-[#ffffff] flex items-center justify-center rounded-md object-contain"
            />

          <span className="text-xl font-bold text-[#18191c]">MyJob</span>
        </div>
        {/* Bottom Part: Combined Location + Search */}
        <div className="flex w-full items-center border border-[#e4e5e8] rounded-md overflow-hidden sm:w-full lg:w-[500px]">
        
            <CountrySelect/>

            {/* Divider */}
            <div className="h-6 w-px bg-[#e4e5e8]" />

            {/* Search Field */}
            <div className="flex items-center flex-grow relative">
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                <Search className="h-4 w-4 text-[#0f68d4]" />
            </div>
            <input
                type="text"
                placeholder="Job title, keyword, company"
                className="w-full pl-10 pr-4 py-3 text-sm focus:outline-none"
            />
            </div>
        </div>
      </div>

        {/* Buttons */}
        <div className="items-center justify-evenly gap-2 hidden xl:flex">
          <a href="./LoginPage" className="px-12 py-3 bg-transparent text-[#0a65cc] border border-[#0a65cc] rounded-md hover:bg-[#e9f3ff] text-sm font-medium whitespace-nowrap">
          Sign In
          </a>
          
          <a href="./Settings" className="px-12 py-3 bg-[#0a65cc] text-white rounded-md hover:bg-[#042852] text-sm font-medium whitespace-nowrap">
          Add CV
          </a>
        </div>
        
      
    </div>
  );
}

import React, { useState, useEffect } from "react";
const countries = [
  { code: "dz", name: "Algeria" },
  { code: "fr", name: "France" },
  { code: "us", name: "United States" },
  { code: "de", name: "Germany" },
  { code: "jp", name: "Japan" },
];

function CountrySelect() {
  const [selectedCode, setSelectedCode] = useState("");

  const selectedCountry = countries.find(
    (country) => country.code === selectedCode
  );

  return (
    <div className="flex items-center gap-2 pl-4 pr-2">
      <div className="w-full flex justify-center items-center gap-2 relative">
        <img
          src={
            selectedCountry
              ? `https://flagcdn.com/w40/${selectedCountry.code}.png`
              : "https://flagcdn.com/w40/un.png" // 🌎 Global icon
          }
          alt={selectedCountry ? selectedCountry.name : "Global"}
          className="w-5 h-3 rounded-sm"
        />
        <select
            value={selectedCode}
            onChange={(e) => setSelectedCode(e.target.value)}
            className="w-full pl-3 pr-10 py-3  rounded-md text-sm appearance-none focus:outline-none focus:n-2 focus:ring-[#0a65cc] bg-white"
            >
            <option value="" className="text-gray-500 ">
                  Select a country
            </option>
            {countries.map((country) => (
                <option
                key={country.code}
                value={country.code}
                {...(country.code !== 'dz' ? { disabled: true } : {})}
                className="bg-white text-gray-800 hover:bg-gray-100 hover:text-[#0a65cc] py-4 px-15"
                >
                {country.name}
                </option>
            ))}
        </select>
        <ChevronDown className="absolute right-4 pointer-events-none text-[#393f46] w-4 h-4" />
      </div>
    </div>
  );
}



const MyComponent = () => {
  const [content, setContent] = useState(null);  // State to store fetched component or content

  useEffect(() => {
    
    // Fetch data when component mounts
    fetch("http://localhost:3001/api/hello")
      .then((res) => res.json())
      .then((data) => {
        // Dynamically create a component or JSX content to render
        const dynamicComponent = (
          <span>{data.message}</span>  // You can customize this to return a React component or structure
        );
        setContent(dynamicComponent);  // Set the dynamic component in the state
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setContent(<span>Error fetching data</span>);  // Fallback component if there's an error
      });
  }, []);  // Empty dependency array to run once when the component mounts

  return (
    <a
      href="./LoginPage"
      className="px-12 py-3 bg-transparent text-[#0a65cc] border border-[#0a65cc] rounded-md hover:bg-[#e9f3ff] text-sm font-medium whitespace-nowrap"
    >
      {content || "Loading..."}  {/* Render dynamic component or fallback */}
    </a>
  );
};