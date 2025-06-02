import Dropzone from '../DragDrop/DragDrop.jsx'
import { useState } from "react"
import {
  Bell,
  Briefcase,
  ChevronDown,
  FileText,
  Globe,
  Heart,
  Link,
  LogOut,
  Search,
  Settings,
  User,
} from "lucide-react"

function Button({ children, className, ...props }) {
    return (
      <button className={`px-4 py-2 rounded-md ${className}`} {...props}>
        {children}
      </button>
    )
  }
  
  function Input({ className, ...props }) {
    return <input className={`border border-[#e4e5e8] rounded-md p-2.5 ${className}`} {...props} />
  }
  

export default function Personal(){
    const [showResumeMenu, setShowResumeMenu] = useState(false)
    const [picturefile, setpictureFile] = useState([]);
    const [CVfile, setCVfile] = useState([]);

    return (
        <div>
              <h2 className="text-xl font-semibold text-[#18191c] mb-6">Basic Information</h2>

              <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
                {/* Profile Picture */}
                <Dropzone id="PICTUREDROP" setFiles={setpictureFile} files={picturefile} text="Drag Profile Picture Here"></Dropzone>

                {/* Full Name */}
                <div>
                  <label className="block text-[#18191c] font-medium mb-2">Full name</label>
                  <Input
                    type="text"
                    className="w-full border border-[#e4e5e8] rounded-md p-2.5 focus:ring-[#0a65cc] focus:border-[#0a65cc]"
                  />
                </div>

                {/* Title/Headline */}
                <div>
                  <label className="block text-[#18191c] font-medium mb-2">Tittle/headline</label>
                  <Input
                    type="text"
                    className="w-full border border-[#e4e5e8] rounded-md p-2.5 focus:ring-[#0a65cc] focus:border-[#0a65cc]"
                  />
                </div>

                {/* Experience */}
                <div>
                  <label className="block text-[#18191c] font-medium mb-2">Experience</label>
                  <div className="relative">
                    <select className="w-full border border-[#e4e5e8] rounded-md p-2.5 pr-10 appearance-none focus:ring-[#0a65cc] focus:border-[#0a65cc]">
                      <option>Select...</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <ChevronDown className="w-5 h-5 text-[#9199a3]" />
                    </div>
                  </div>
                </div>

                {/* Educations */}
                <div>
                  <label className="block text-[#18191c] font-medium mb-2">Educations</label>
                  <div className="relative">
                    <select className="w-full border border-[#e4e5e8] rounded-md p-2.5 pr-10 appearance-none focus:ring-[#0a65cc] focus:border-[#0a65cc]">
                      <option>Select...</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <ChevronDown className="w-5 h-5 text-[#9199a3]" />
                    </div>
                  </div>
                </div>

                {/* Personal Website */}
                <div>
                  <label className="block text-[#18191c] font-medium mb-2">Personal Website</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <Globe className="w-5 h-5 text-[#9199a3]" />
                    </div>
                    <Input
                      type="text"
                      placeholder="Website url..."
                      className="w-full border border-[#e4e5e8] rounded-md p-2.5 pl-10 focus:ring-[#0a65cc] focus:border-[#0a65cc]"
                    />
                  </div>
                </div>
              </div>

              <Button className="bg-[#0a65cc] hover:bg-[#0a58b6] text-white px-6 py-2.5 rounded-md">
                Save Changes
              </Button>

              {/* CV/Resume Section */}
              <div className="mt-12">
                <h2 className="text-xl font-semibold text-[#18191c] mb-6">Your CV/Resume</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Resume 1 */}
                  <div className="bg-[#f1f2f4] p-4 rounded-md flex items-center justify-between">
                    <div className="flex items-center">
                      <FileText className="w-6 h-6 text-[#0a65cc] mr-3" />
                      <div>
                        <p className="font-medium text-[#18191c]">Professional Resume</p>
                        <p className="text-sm text-[#5e6670]">3.5 MB</p>
                      </div>
                    </div>
                    <button
                      className="text-[#9199a3] hover:text-[#18191c]"
                      onClick={() => setShowResumeMenu(!showResumeMenu)}
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M12 8C13.1 8 14 7.1 14 6C14 4.9 13.1 4 12 4C10.9 4 10 4.9 10 6C10 7.1 10.9 8 12 8ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10ZM12 16C10.9 16 10 16.9 10 18C10 19.1 10.9 20 12 20C13.1 20 14 19.1 14 18C14 16.9 13.1 16 12 16Z"
                          fill="currentColor"
                        />
                      </svg>
                    </button>
                  </div>

                  {/* Resume 2 */}
                  <div className="bg-[#f1f2f4] p-4 rounded-md flex items-center justify-between">
                    <div className="flex items-center">
                      <FileText className="w-6 h-6 text-[#0a65cc] mr-3" />
                      <div>
                        <p className="font-medium text-[#18191c]">Product Designer</p>
                        <p className="text-sm text-[#5e6670]">4.7 MB</p>
                      </div>
                    </div>
                    <button className="text-[#9199a3] hover:text-[#18191c]">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M12 8C13.1 8 14 7.1 14 6C14 4.9 13.1 4 12 4C10.9 4 10 4.9 10 6C10 7.1 10.9 8 12 8ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10ZM12 16C10.9 16 10 16.9 10 18C10 19.1 10.9 20 12 20C13.1 20 14 19.1 14 18C14 16.9 13.1 16 12 16Z"
                          fill="currentColor"
                        />
                      </svg>
                    </button>

                    
                  </div>

                  {/* Resume 3 */}
                  <div className="bg-[#f1f2f4] p-4 rounded-md flex items-center justify-between">
                    <div className="flex items-center">
                      <FileText className="w-6 h-6 text-[#0a65cc] mr-3" />
                      <div>
                        <p className="font-medium text-[#18191c]">Visual Designer</p>
                        <p className="text-sm text-[#5e6670]">1.3 MB</p>
                      </div>
                    </div>
                    <button className="text-[#9199a3] hover:text-[#18191c]">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M12 8C13.1 8 14 7.1 14 6C14 4.9 13.1 4 12 4C10.9 4 10 4.9 10 6C10 7.1 10.9 8 12 8ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10ZM12 16C10.9 16 10 16.9 10 18C10 19.1 10.9 20 12 20C13.1 20 14 19.1 14 18C14 16.9 13.1 16 12 16Z"
                          fill="currentColor"
                        />
                      </svg>
                    </button>
                  </div>

                  {/* Add CV/Resume */}
                    <Dropzone id="CVDROP" setFiles={setCVfile} files={CVfile} text="add CV/RESUME"></Dropzone>

                </div>
              </div>
            </div>
    )
}



