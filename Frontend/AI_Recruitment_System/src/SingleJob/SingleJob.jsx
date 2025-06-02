import { Calendar, ArrowRight,MapPin, Briefcase, DollarSign, Clock, ChevronLeft, ChevronRight, Bookmark } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../Components/NavBar";
import Header from "../Components/Header";
import { useLocation } from 'react-router-dom';
import { CompanyImage } from '/src/backend_integration/Handleimages.jsx';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import {  BookmarkCheck } from 'lucide-react'; // Assuming you're using lucide-react
import JobApplicationModal from "../Components/Job-application-modal";

export default function JobDetailsPage() {
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const jobId = queryParams.get('jobId');
  const title = queryParams.get('title');



  const [saved, setSaved] = useState(false);
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate();

  const handleSave = () => {
    setSaved(!saved);
    // Add your save logic here
    onBookmark();
  };

  const onApply = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="min-h-screen bg-white">
      {/* Top Navigation */}
                  <Navbar/>
                              
                        
                   {/* Logo and Search Bar */}
                    <Header/>
            {/* Main Content */}

      {/* Breadcrumb */}
      <div className=" px-4 py-4 bg-[#f1f2f4]">
        <div className="flex justify-between items-center container mx-auto ">
          <h2 className="text-xl font-bold text-[#191f33]">Job Details</h2>
          <div className="text-sm text-gray-500">
            <span>Home</span>
            <span className="mx-2">/</span>
            <span>Find Job</span>
            <span className="mx-2">/</span>
            <span>Graphics & Design</span>
            <span className="mx-2">/</span>
            <span className="text-gray-700">Job Details</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-4 ">
  <div className="grid grid-cols-1  lg:grid-cols-3 gap-6">
    {/* Left Column - Job Details */}
    <div className=" lg:col-span-2">
      <div className="p-6 mb-6">
        <div className="flex flex-col  lg:flex-row  lg:items-center mb-6">
          <div className="flex-shrink-0 mb-4  lg:mb-0  lg:mr-6">
            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
                          <CompanyImage id={1} pre_link="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/800px-Apple_logo_black.svg.png" type="invoice" />

            </div>
          </div>
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-[#191f33] mb-2">Senior UX Designer</h1>
            <div className="flex flex-wrap gap-2 mb-4">
              <div className="bg-[#ffeded] text-[#ff4f4f] px-2 py-1 rounded text-sm">Featured</div>
              <div className="bg-[#e8f1ff] text-[#0a65cc] px-2 py-1 rounded text-sm">Full Time</div>
            </div>
            <div className="flex flex-col  lg:flex-row gap-4 text-sm text-gray-500">
              <div className="flex items-center">
                <span className="mr-2">🔗</span>
                <span>https://instagram.com</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2">📞</span>
                <span>(408) 555-0120</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2">✉️</span>
                <span>career@instagram.com</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
        <button
      onClick={handleSave}
      className="cursor-pointer p-2 rounded-md border border-gray-200"
    >
      {saved ? (
        <BookmarkCheck className="h-5 w-5 text-[#0A65CC]" />
      ) : (
        <Bookmark className="h-5 w-5 text-[#767f8c]" />
      )}
    </button>
        <button
          onClick={onApply}
          className="cursor-pointer group px-4 py-2 bg-[#e8f1ff] text-[#0a65cc] hover:bg-[#0a65cc] hover:text-white font-medium rounded-md flex items-center shadow-sm hover:shadow-md transition-all hover:-translate-y-1 hover:shadow-black/5"
        >
          Apply Now
          <ArrowRight className=" ml-1 h-4 w-4 transition-all group-hover:translate-x-1" />
        </button>
      </div>
        </div>

        <div className="mb-8">
          <h2 className="text-lg font-bold text-[#191f33] mb-4">Job Description</h2>
          <div className="text-gray-600 space-y-4">
            <p>
              Integer aliquet pretium consequat. Donec et sapien id leo accumsan pellentesque eget maximus tellus.
              Duis vel est ac tortor placerat vehicula. Integer eu suscipit sem.
            </p>
            <p>
              Pellentesque eu justo felis, commodo vehicula est. Integer eu suscipit sem condimentum. Vivamus
              sit amet lacus ullamcorper, pulvinar ante ut, tristique erat. Quisque sit amet libellum urna.
              Maecenas blandit felis id massa sodales finibus. Integer bibendum eu nulla eu sollicitudin.
            </p>
            <p>
              Sed lobortis diam tristique accumsan faucibus. Quisque blandit augue quis turpis auctor, dapibus
              euismod ante ultrices. Ut non felis lacinia turpis feugiat euismod at id magna. Sed ut orci eros.
              Suspendisse sollicitudin faucibus aliquet.
            </p>
            <p>
              Nam dapibus consectetur erat in euismod. Cras urna augue, mollis venenatis augue sed, porttitor
              aliquet nibh. Sed tristique lectus elementum. Nulla imperdiet sit amet quam eget lobortis. Etiam in
              neque sit amet orci interdum tincidunt.
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-bold text-[#191f33] mb-4">Responsibilities</h2>
          <ul className="list-disc pl-5 text-gray-600 space-y-2">
            <li>Quisque semper gravida erat at consectetur.</li>
            <li>Curabitur blandit lorem vitae, vitae pretium leo placerat eget.</li>
            <li>Morbi mattis in ipsum ac tempus.</li>
            <li>Curabitur eu vehicula libero. Vestibulum sed purus ullamcorper, lobortis lectus nec.</li>
            <li>Vulputate turpis. Quisque ante odio, iaculis a porttitor sit amet.</li>
            <li>Lobortis vel lectus. Nulla sit risus ut diam.</li>
            <li>Commodo feugiat. Nullam tortor, diam placerat dapibus tincidunt.</li>
            <li>Odio metus posuere lorem, id condimentum erat velit nec neque.</li>
            <li>Dui sodales ut. Curabitur tempus augue.</li>
          </ul>
        </div>
      </div>
    </div>

    {/* Right Column - Job Overview & Company Info */}
    <div className=" lg:col-span-1">
      <div className="p-6 mb-6">
        <h2 className="text-lg font-bold text-[#191f33] mb-4">Job Overview</h2>
        <div className="space-y-4">
          <OverviewItem icon={<Calendar className="h-5 w-5 text-[#0a65cc]" />} label="JOB POSTED" value="14 June, 2021" />
          <OverviewItem icon={<Clock className="h-5 w-5 text-[#0a65cc]" />} label="JOB EXPIRE IN" value="14 July, 2021" />
          <OverviewItem icon={<span className="text-[#0a65cc] text-lg">🎓</span>} label="EDUCATION" value="Graduation" />
          <OverviewItem icon={<DollarSign className="h-5 w-5 text-[#0a65cc]" />} label="SALARY" value="$50k-80k/month" />
          <OverviewItem icon={<MapPin className="h-5 w-5 text-[#0a65cc]" />} label="LOCATION" value="New York, USA" />
          <OverviewItem icon={<Briefcase className="h-5 w-5 text-[#0a65cc]" />} label="JOB TYPE" value="Full Time" />
          <OverviewItem icon={<span className="text-[#0a65cc] text-lg">⏱️</span>} label="EXPERIENCE" value="10-15 Years" />
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 rounded-md bg-white flex items-center justify-center mr-3">
                       <CompanyImage id={1} pre_link="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/800px-Apple_logo_black.svg.png" type="invoice" />

          </div>
          <div>
            <h3 className="font-bold text-[#191f33]">Instagram</h3>
            <p className="text-sm text-gray-500">Social networking service</p>
          </div>
        </div>

        <div className="space-y-3 text-sm">
          <InfoRow label="Founded in:" value="March 21, 2006" />
          <InfoRow label="Organization type:" value="Private Company" />
          <InfoRow label="Company size:" value="120-300 Employees" />
          <InfoRow label="Phone:" value="(408) 555-0120" />
          <InfoRow label="Email:" value="info@instagram.com" />
          <InfoRow label="Website:" value="https://instagram.com" />
        </div>
      </div>
    </div>
  </div>
</div>
{isOpen?<JobApplicationModal onApply={onApply} />:null}

    </div>
  );
}


// Helper components (add them in your file)
const OverviewItem = ({ icon, label, value }) => (
  <div className="flex items-start">
    <div className="w-10 h-10 rounded-md bg-[#e8f1ff] flex items-center justify-center mr-3">
      {icon}
    </div>
    <div>
      <p className="text-sm text-gray-500">{label}</p>
      <p className="font-medium">{value}</p>
    </div>
  </div>
);

const InfoRow = ({ label, value }) => (
  <div className="flex justify-between">
    <span className="text-gray-500">{label}</span>
    <span className="font-medium">{value}</span>
  </div>
);