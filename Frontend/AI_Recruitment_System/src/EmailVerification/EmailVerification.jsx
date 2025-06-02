import { Briefcase } from 'lucide-react'
import { Link } from "react-router-dom";

export default function EmailVerification() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 bg-white">
      <div className="w-full max-w-md justify-center">
        {/* Logo */}
        <div className="flex justify-center mb-16">
          <div className="flex items-center gap-2">
            <Briefcase className="w-6 h-6 text-[#0a65cc]" />
            <span className="text-xl font-semibold text-[#18191c]">AIRESY</span>
          </div>
        </div>
        
        {/* Verification Content */}
        <div className="flex flex-col items-center">
          <h1 className="mb-4 text-2xl font-semibold text-[#18191c]">Email Verification</h1>
          
          <p className="mb-8 text-center text-[#767f8c]">
            We've sent an verification to <span className="text-[#18191c]">emailaddress@gmail.com</span> to verify your 
            email address and activate your account.
          </p>
          
          {/* Verification Code Input */}
          <div className="w-full mb-6">
            <input 
              placeholder="Verification Code" 
              className="w-full border border-[#e4e5e8] rounded px-4 py-2.5 focus:outline-none focus:ring-1 focus:ring-[#0a65cc]"
              />
          </div>
          
          {/* Verify Button */}
          <button className="w-full bg-[#0a65cc] text-white rounded py-3 flex items-center justify-center gap-2 hover:bg-[#0a55cc] transition-colors">
            Verify My Account
            <svg 
              width="20" 
              height="20" 
              viewBox="0 0 20 20" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="ml-2"
            >
              <path 
                d="M4.16699 10H15.8337" 
                stroke="white" 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
              <path 
                d="M10.834 5L15.834 10L10.834 15" 
                stroke="white" 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </button>
          {/* Resend Link */}
          <p className="text-[#5e6670]">
            Didn't recieve any code? <Link href="#" className="text-[#0a65cc]">Resends</Link>
          </p>
        </div>
      </div>
    </div>
  );
}