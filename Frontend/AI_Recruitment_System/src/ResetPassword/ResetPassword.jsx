"use client"

import { useState } from "react"
import { Eye, EyeOff, ArrowRight, Briefcase } from "lucide-react"
import { Link } from "react-router-dom";
export default function ResetPassword() {
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  return (
    <div className="min-h-screen flex flex-col items-center bg-white px-4 justify-center">
      <div className="mt-10 mb-16">
        <Link href="/" className="flex items-center gap-2 text-[#0a65cc] font-semibold">
          <Briefcase className="h-5 w-5" />
          <span className="text-xl">MyJob</span>
        </Link>
      </div>

      <div className="w-full max-w-md flex flex-col items-center">
        <h1 className="text-[#18191c] text-3xl font-semibold mb-4">Reset Password</h1>

        <p className="text-[#767f8c] text-center mb-8 max-w-md">
          Duis luctus interdum metus, ut consectetur ante consectetur sed. Suspendisse euismod viverra massa sit amet
          mollis.
        </p>

        <div className="w-full space-y-4">
          <div className="relative">
            <input
              type={showNewPassword ? "text" : "password"}
              placeholder="New Password"
              className="w-full px-4 py-3 border border-[#e4e5e8] rounded-md focus:outline-none focus:ring-1 focus:ring-[#0a65cc]"
            />
            <button
              type="button"
              onClick={() => setShowNewPassword(!showNewPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#767f8c]"
            >
              {showNewPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
            </button>
          </div>

          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm Password"
              className="w-full px-4 py-3 border border-[#e4e5e8] rounded-md focus:outline-none focus:ring-1 focus:ring-[#0a65cc]"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#767f8c]"
            >
              {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-[#0a65cc] text-white py-3 rounded-md font-medium flex items-center justify-center gap-2 hover:bg-[#0956af] transition-colors"
          >
            Reset Password
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
