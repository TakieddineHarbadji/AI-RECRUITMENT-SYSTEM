import { useState } from "react";
import { ChevronDown } from 'lucide-react';

export default function Navbar({ activePage }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const linkClass = (page) =>
    activePage === page
      ? "text-[#0a65cc] border-b-2 border-[#0a65cc] whitespace-nowrap flex items-center h-12 px-4"
      : "text-[#5e6670] whitespace-nowrap flex items-center h-12 px-4";

  return (
    <div className="sticky top-0 z-50 ">
      {/* Navbar */}
      <div className="backdrop-blur bg-[#f1f2f4]/75 py-4 px-4 md:px-8 lg:px-16 gap-6 flex justify-between items-center text-sm">
        
        {/* Desktop Links */}
        <div className="hidden xl:flex items-center gap-x-6 overflow-hidden">
          <a href="/home" className={linkClass("home")}>Home</a>
          <a href="/FindJob" className={linkClass("FindJob")}>Find Job</a>
          <a href="/FindEmp" className={linkClass("FindEmp")}>Find Employers</a>
          <a href="/Settings" className={linkClass("Settings")}>Dashboard</a>
          <a href="#" className={linkClass("JobAlerts")}>Job Alerts</a>
          <a href="#" className={linkClass("Support")}>Customer Supports</a>
        </div>
        {/* Logo */}
        <div className=" flex items-center space-x-4">
          <div className="flex items-center">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2"
            >
              <path
                d="M15.5 11.683C15.5 11.9357 15.4345 12.1925 15.2995 12.4452C15.1645 12.698 14.9805 12.9302 14.7475 13.142C14.3885 13.4865 13.9885 13.7187 13.5435 13.8455C13.1025 13.9722 12.6305 14.0377 12.1275 14.0377C11.3885 14.0377 10.6025 13.8825 9.7735 13.568C8.9445 13.2535 8.1155 12.8085 7.2905 12.233C6.4615 11.6535 5.6695 11.0125 4.9145 10.31C4.1635 9.6035 3.4865 8.8565 2.8835 8.069C2.2845 7.2815 1.8125 6.494 1.4675 5.7105C1.1225 4.923 0.95 4.1765 0.95 3.471C0.95 2.9925 1.0115 2.534 1.1345 2.1055C1.2575 1.673 1.4675 1.273 1.7645 0.9075C2.1235 0.4505 2.5175 0.222 2.9425 0.222C3.1125 0.222 3.2825 0.2595 3.4345 0.3345C3.5905 0.4095 3.7285 0.522 3.8425 0.6855L5.6245 3.2185C5.7385 3.3785 5.8215 3.5255 5.8775 3.6645C5.9335 3.7995 5.9635 3.9345 5.9635 4.0615C5.9635 4.2255 5.9195 4.3895 5.8315 4.5495C5.7475 4.7095 5.6245 4.8775 5.4695 5.0455L4.9145 5.6325C4.8435 5.7075 4.8105 5.7945 4.8105 5.8995C4.8105 5.952 4.8175 5.9985 4.8315 6.051C4.8495 6.1035 4.8675 6.1425 4.8795 6.1815C5.0105 6.4305 5.2435 6.7525 5.5785 7.1445C5.9175 7.5365 6.2785 7.9345 6.6655 8.3325C7.0705 8.7305 7.4575 9.0975 7.8565 9.4335C8.2515 9.7655 8.5735 9.9915 8.8295 10.1225C8.8645 10.1345 8.9035 10.1525 8.9495 10.1705C9.0015 10.1885 9.0535 10.1955 9.1095 10.1955C9.2215 10.1955 9.3085 10.1585 9.3835 10.0875L9.9385 9.539C10.1135 9.3765 10.2815 9.2535 10.4415 9.1735C10.6015 9.0855 10.7615 9.0415 10.9325 9.0415C11.0595 9.0415 11.1905 9.0675 11.3295 9.1235C11.4685 9.1795 11.6155 9.2625 11.7755 9.3765L14.3365 11.1765C14.5 11.2905 14.6125 11.4225 14.6835 11.5745C14.7475 11.7265 14.785 11.8785 14.785 12.0485C14.5 11.683 14.5 11.683 15.5 11.683Z"
                stroke="#5E6670"
                strokeWidth="1.5"
                strokeMiterlimit="10"
              />
            </svg>
            <span className="text-[#000000]">0776704089</span>
          </div>
          <LanguageSelect/>
        </div>







        {/* Mobile Button */}
        <button
          className="xl:hidden text-[#0a65cc] focus:outline-none"
          onClick={() => setMenuOpen(true)}
        >
          {/* Hamburger Icon */}
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white z-50 flex flex-col items-center justify-center gap-6 text-lg transform ${
          menuOpen ? 'translate-y-0' : '-translate-y-full'
        } transition-transform duration-300 ease-in-out`}
      >
        {/* Exit button */}
        <button
          className="absolute top-4 right-4 text-[#0a65cc] focus:outline-none"
          onClick={() => setMenuOpen(false)}
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Links */}
        <a href="/home" className={linkClass("home")}  onClick={() => setMenuOpen(false)}>Home</a>
        <a href="/FindJob" className={linkClass("FindJob")}  onClick={() => setMenuOpen(false)}>Find Job</a>
        <a href="/FindEmp" className={linkClass("FindEmp")}  onClick={() => setMenuOpen(false)}>Find Employers</a>
        <a href="/Settings" className={linkClass("Settings")}  onClick={() => setMenuOpen(false)}>Dashboard</a>
        <a href="#" className={linkClass("JobAlerts")}  onClick={() => setMenuOpen(false)}>Job Alerts</a>
        <a href="#" className={linkClass("Support")}  onClick={() => setMenuOpen(false)}>Customer Supports</a>

        <div className="flex items-center justify-evenly gap-2 my-5">
          <a href="./LoginPage" onClick={() => setMenuOpen(false)} className="px-12 py-3 bg-transparent text-[#0a65cc] border border-[#0a65cc] rounded-md hover:bg-[#e9f3ff] text-sm font-medium whitespace-nowrap">
            Sign In
          </a>
          
          <a href="./Settings" onClick={() => setMenuOpen(false)} className="px-12 py-3 bg-[#0a65cc] text-white rounded-md hover:bg-[#042852] text-sm font-medium whitespace-nowrap">
              Add CV
          </a>
        </div>
      </div>
    </div>
  );
}




const Languages = [
  { code: "us", name: "English-us" },
  { code: "dz", name: "Arabic" },
  { code: "fr", name: "French" },
];

function LanguageSelect() {
  const [selectedCode, setSelectedCode] = useState("");

  const selectedLanguage = Languages.find(
    (Language) => Language.code === selectedCode
  );

  return (
    <div className="flex items-center gap-2 pl-4 pr-2">
      <div className="w-full flex justify-center items-center gap-2 relative">
        <img
          src={
            selectedLanguage
              ? `https://flagcdn.com/w40/${selectedLanguage.code}.png`
              : "https://flagcdn.com/w40/un.png" // 🌎 Global icon
          }
          alt={selectedLanguage ? selectedLanguage.name : "Global"}
          className="w-5 h-3 rounded-sm"
        />
        <select
            value={selectedCode}
            onChange={(e) => setSelectedCode(e.target.value)}
            className="w-full pl-3 pr-10 py-3  rounded-md text-sm appearance-none focus:outline-none focus:n-2 focus:ring-[#0a65cc]"
            >
            <option value="" className="text-gray-500 ">
                Select a Language
            </option>
            {Languages.map((Language) => (
                <option
                key={Language.code}
                value={Language.code}
                {...(Language.code !== 'us' ? { disabled: true } : {})}
                className="bg-white text-gray-800 hover:bg-gray-100 hover:text-[#0a65cc] py-2 px-3"
                >
                {Language.name}
                </option>
            ))}
        </select>
        <ChevronDown className="absolute right-4 pointer-events-none text-[#393f46] w-4 h-4" />
      </div>
    </div>
  );
}