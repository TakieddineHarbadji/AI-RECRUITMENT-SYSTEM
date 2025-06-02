import { useState } from "react";
import { Link } from "react-router-dom";
import { Briefcase, Eye } from "lucide-react";
import RightSide from "../Components/RightSide";

export default function CreateAccount() {
  const [accountType, setAccountType] = useState("employers");
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    if (!termsAccepted) {
      alert("You must accept the terms");
      return;
    }

    const payload = {
      account_type: accountType,
      full_name: fullName,
      username,
      email,
      password,
    };

    try {
      const response = await fetch("http://localhost:8055/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        alert("Account created successfully!");
        // Optionally redirect or clear form here
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.detail || "Failed to create account"}`);
      }
    } catch (err) {
      alert("Error connecting to server");
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen justify-center">
      <div className="w-full lg:w-1/2 p-6 md:p-12 flex flex-col justify-center">
        <div className="max-w-md mx-auto w-full">
          <div className="mb-12">
            <Link to="/" className="flex items-center gap-2 text-[#0a65cc]">
              <Briefcase className="h-6 w-6" />
              <span className="text-xl font-semibold">MyJob</span>
            </Link>
          </div>

          <div className="mb-8">
            <h1 className="text-2xl font-semibold text-[#18191c] mb-2">Create account.</h1>
            <p className="text-[#5e6670]">
              Already have account?{" "}
              <Link to="/loginpage" className="text-[#0a65cc]">Log In</Link>
            </p>
          </div>

          <div className="mb-6">
            <div className="relative">
              <select
                className="w-full appearance-none border border-[#e4e5e8] rounded px-4 py-2.5 bg-white text-[#5e6670] focus:outline-none focus:ring-1 focus:ring-[#0a65cc]"
                value={accountType}
                onChange={(e) => setAccountType(e.target.value)}
              >
                <option value="employers">Employers</option>
                <option value="jobseekers">Job Seekers</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg
                  className="w-4 h-4 text-[#5e6670]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </div>
            </div>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full border border-[#e4e5e8] rounded px-4 py-2.5 focus:outline-none focus:ring-1 focus:ring-[#0a65cc]"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Username"
                className="w-full border border-[#e4e5e8] rounded px-4 py-2.5 focus:outline-none focus:ring-1 focus:ring-[#0a65cc]"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>

            <input
              type="email"
              placeholder="Email address"
              className="w-full border border-[#e4e5e8] rounded px-4 py-2.5 focus:outline-none focus:ring-1 focus:ring-[#0a65cc]"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full border border-[#e4e5e8] rounded px-4 py-2.5 focus:outline-none focus:ring-1 focus:ring-[#0a65cc]"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full border border-[#e4e5e8] rounded px-4 py-2.5 focus:outline-none focus:ring-1 focus:ring-[#0a65cc]"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />

            <div className="flex items-center">
              <input
                type="checkbox"
                id="terms"
                className="h-4 w-4 border-[#e4e5e8] rounded text-[#0a65cc] focus:ring-[#0a65cc]"
                checked={termsAccepted}
                onChange={(e) => setTermsAccepted(e.target.checked)}
                required
              />
              <label htmlFor="terms" className="ml-2 text-sm text-[#5e6670]">
                I've read and agree with your{" "}
                <Link to="/terms" className="text-[#0a65cc]">Terms of Services</Link>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-[#0a65cc] text-white rounded py-3 flex items-center justify-center gap-2 hover:bg-[#0a55cc] transition-colors"
            >
              Create Account
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z" fill="white" />
              </svg>
            </button>
          </form>
        </div>
      </div>

      <RightSide />
    </div>
  );
}
