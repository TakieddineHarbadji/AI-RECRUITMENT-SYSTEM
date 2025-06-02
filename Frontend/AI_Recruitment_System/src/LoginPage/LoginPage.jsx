import { Link } from "react-router-dom";
import { Briefcase, Building2, Eye, MoveRight } from "lucide-react"
import RightSide from "../Components/RightSide";
import React, { useState } from 'react';
import { login } from '../backend_integration/api';
import { useContext } from 'react';
import { AuthContext } from '../backend_integration/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const navigate = useNavigate();

  const { token ,setToken} = useContext(AuthContext);
  const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [error, setError] = useState('');
  
    const handleLogin = async (e) => {
      e.preventDefault();
      setError('');
  
      try {
        const response = await login(username, password,rememberMe);
        const token = response.data.access_token;

        setToken(token);             // update token state in parent
        localStorage.setItem('token', token);  // save token persistently
        navigate('/settings');  // 🚀 redirect to dashboard
      } catch (err) {
        setError('Login failed. Please check credentials ');
        console.error(err);
      }
    };
  
  return (
    <div className="flex flex-col md:flex-row min-h-screen justify-center">
      {/* Left Section - Login Form */}
      <div className="w-full lg:w-1/2 flex flex-col p-8 md:p-16 lg:p-24 justify-center">
        <div className="max-w-md mx-auto w-full">
          {/* Logo */}
          <div className="mb-16 ">
            <a href="/Home" className="flex items-center gap-2 text-[#0a65cc] font-bold text-xl">
              <Briefcase className="h-6 w-6" />
              <span>MyJob</span>
            </a>
          </div>
              {error && <p className="text-[#eb3333] mb-8">{error}</p>}
    
          
          {/* Login Form */}
          <div className="mb-8" onSubmit={handleLogin}>
            <h1 className="text-3xl font-semibold mb-2">Sign in</h1>
            <p className="text-[#5e6670] mb-8">
              Don't have account{" "}
              <a href="/CreateAccount" className="text-[#0a65cc]">
                Create Account
              </a>
            </p>

            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  id="username"
                  required
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full p-3 border border-[#e4e5e8] rounded focus:outline-none focus:ring-1 focus:ring-[#0a65cc]"
                />
              </div>
              <div className="relative">
                <input
                  id="password"
                  type="password"
                  placeholder="Password"
                  value={password}
                  required
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-3 border border-[#e4e5e8] rounded focus:outline-none focus:ring-1 focus:ring-[#0a65cc]"
                />
                <button type="button" className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#5e6670]">
                  <Eye className="h-5 w-5" />
                </button>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="remember"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="h-4 w-4 border-[#e4e5e8] rounded text-[#0a65cc] focus:ring-[#0a65cc]"
                  />
                  <label htmlFor="remember" className="ml-2 text-sm text-[#5e6670]">
                    Remember Me
                  </label>
                </div>
                <a href="/forgetpassword" className="text-sm text-[#0a65cc]">
                  Forget password
                </a>
              </div>

              <button
                type="submit"
                className="w-full bg-[#0a65cc] text-white py-3 rounded flex items-center justify-center gap-2"
              >
                Sign In <MoveRight className="h-5 w-5" />
              </button>
            </form>

            <div className="mt-6 text-center">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-[#e4e5e8]"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white text-[#5e6670]">or</span>
                </div>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center gap-2 p-3 border border-[#e4e5e8] rounded hover:bg-gray-50">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-5 w-5 text-[#1877F2]"
                  fill="currentColor"
                >
                  <path d="M12.001 2.002c-5.522 0-9.999 4.477-9.999 9.999 0 4.99 3.656 9.126 8.437 9.879v-6.988h-2.54v-2.891h2.54V9.798c0-2.508 1.493-3.891 3.776-3.891 1.094 0 2.24.195 2.24.195v2.459h-1.264c-1.24 0-1.628.772-1.628 1.563v1.875h2.771l-.443 2.891h-2.328v6.988C18.344 21.129 22 16.992 22 12.001c0-5.522-4.477-9.999-9.999-9.999z" />
                </svg>
                <span className="text-sm">Sign in with Facebook</span>
              </button>
              <button className="flex items-center justify-center gap-2 p-3 border border-[#e4e5e8] rounded hover:bg-gray-50">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5" fill="none">
                  <path
                    d="M5.266 9.765A7.077 7.077 0 0 1 12 4.909c1.69 0 3.218.6 4.418 1.582L19.91 3C17.782 1.145 15.055 0 12 0 7.27 0 3.198 2.698 1.24 6.65l4.026 3.115Z"
                    fill="#F14336"
                  />
                  <path
                    d="M16.04 18.013c-1.09.703-2.474 1.078-4.04 1.078a7.077 7.077 0 0 1-6.723-4.823l-4.04 3.067A11.965 11.965 0 0 0 12 24c2.933 0 5.735-1.043 7.834-3l-3.793-2.987Z"
                    fill="#28B446"
                  />
                  <path
                    d="M19.834 21c2.195-2.048 3.62-5.096 3.62-9 0-.71-.109-1.473-.272-2.182H12v4.637h6.436c-.317 1.559-1.17 2.766-2.395 3.558L19.834 21Z"
                    fill="#518EF8"
                  />
                  <path
                    d="M5.277 14.268A7.12 7.12 0 0 1 4.909 12c0-.782.125-1.533.357-2.235L1.24 6.65A11.934 11.934 0 0 0 0 12c0 1.92.445 3.73 1.237 5.335l4.04-3.067Z"
                    fill="#FBBB00"
                  />
                </svg>
                <span className="text-sm">Sign in with Google</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section - Checkerboard Pattern */}
      <RightSide />
    </div>
  );
}
