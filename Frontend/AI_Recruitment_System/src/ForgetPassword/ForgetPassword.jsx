import { Link } from "react-router-dom";
import { Briefcase, Building2, ArrowRight } from "lucide-react"
import RightSide from "../Components/RightSide";
export default function ForgetPassword() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen justify-center">
      {/* Left side - Form */}
      <div className=" w-full md:w-1/2 p-6 md:p-12 flex flex-col justify-center">
        <div className=" max-w-md mx-auto w-full ">
            {/* Logo */}
            <div className="mb-16">
                <Link href="/" className="flex items-center gap-2 text-[#0a65cc] font-semibold text-xl">
                    <Briefcase className="h-5 w-5" />
                    <span>MyJob</span>
                </Link>
            </div>

            {/* Form content */}
            <div className="max-w-md mx-auto w-full mt-8 md:mt-16">
            <h1 className="text-3xl font-semibold text-[#18191c] mb-6">Forget Password</h1>

            <div className="space-y-2 mb-6">
                <p className="text-[#5e6670]">
                Go back to{" "}
                <a href="/loginpage" className="text-[#0a65cc] hover:underline">
                    Sign In
                </a>
                </p>
                <p className="text-[#5e6670]">
                Don't have account{" "}
                <a href="/createaccount" className="text-[#0a65cc] hover:underline">
                    Create Account
                </a>
                </p>
            </div>

            <div className="space-y-6">
                <div>
                <input
                    type="email"
                    placeholder="Email address"
                    className="w-full px-4 py-3 border border-[#e4e5e8] rounded focus:outline-none focus:ring-1 focus:ring-[#0a65cc]"
                />
                </div>

                <a href="/resetpassword" className="w-full bg-[#0a65cc] text-white py-3 rounded flex items-center justify-center gap-2 hover:bg-[#0a65cc]/90 transition-colors">
                Reset Password
                <ArrowRight className="h-4 w-4" />
                </a>

                <div className="text-center text-[#5e6670]">or</div>

                <div className="grid grid-cols-2 gap-4">
                <button className="flex items-center justify-center gap-2 py-2.5 px-4 border border-[#e4e5e8] rounded hover:bg-gray-50 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#1877F2">
                    <path d="M9.19795 21.5H13.198V13.4901H16.8021L17.198 9.50977H13.198V7.5C13.198 6.94772 13.6457 6.5 14.198 6.5H17.198V2.5H14.198C11.4365 2.5 9.19795 4.73858 9.19795 7.5V9.50977H7.19795L6.80206 13.4901H9.19795V21.5Z" />
                    </svg>
                    <span className="text-sm">Sign in with Facebook</span>
                </button>
                <button className="flex items-center justify-center gap-2 py-2.5 px-4 border border-[#e4e5e8] rounded hover:bg-gray-50 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                    <path
                        fill="#fbbb00"
                        d="M5.26620003,9.76452941 C6.19878754,6.93863203 8.85444915,4.90909091 12,4.90909091 C13.6909091,4.90909091 15.2181818,5.50909091 16.4181818,6.49090909 L19.9090909,3 C17.7818182,1.14545455 15.0545455,0 12,0 C7.27006974,0 3.1977497,2.69829785 1.23999023,6.65002441 L5.26620003,9.76452941 Z"
                    />
                    <path
                        fill="#518ef8"
                        d="M16.0407269,18.0125889 C14.9509167,18.7163016 13.5660892,19.0909091 12,19.0909091 C8.86648613,19.0909091 6.21911939,17.076871 5.27698177,14.2678769 L1.23746264,17.3349879 C3.19279051,21.2970142 7.26500293,24 12,24 C14.9328362,24 17.7353462,22.9573905 19.834192,20.9995801 L16.0407269,18.0125889 Z"
                    />
                    <path
                        fill="#28b446"
                        d="M19.834192,20.9995801 C22.0291676,18.9520994 23.4545455,15.903663 23.4545455,12 C23.4545455,11.2909091 23.3454545,10.5272727 23.1818182,9.81818182 L12,9.81818182 L12,14.4545455 L18.4363636,14.4545455 C18.1187732,16.013626 17.2662994,17.2212117 16.0407269,18.0125889 L19.834192,20.9995801 Z"
                    />
                    <path
                        fill="#f14336"
                        d="M5.27698177,14.2678769 C5.03832634,13.556323 4.90909091,12.7937589 4.90909091,12 C4.90909091,11.2182781 5.03443647,10.4668121 5.26620003,9.76452941 L1.23999023,6.65002441 C0.43658717,8.26043162 0,10.0753848 0,12 C0,13.9195484 0.444780743,15.7301709 1.23746264,17.3349879 L5.27698177,14.2678769 Z"
                    />
                    </svg>
                    <span className="text-sm">Sign in with Google</span>
                </button>
                </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Pattern and Stats */}
      <RightSide/>
    </div>
  )
}
