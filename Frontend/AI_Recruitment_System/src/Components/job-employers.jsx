import { ArrowRight } from "lucide-react"

// Company data
const employers = [
  {
    id: 1,
    name: "Dribbble",
    logo: "/logos/dribbble.png",
    location: "United States",
    openJobs: 3,
    color: "bg-pink-500",
  },
  {
    id: 2,
    name: "Udemy",
    logo: "/logos/udemy.svg",
    location: "China",
    openJobs: 3,
    color: "bg-red-500",
  },
  {
    id: 3,
    name: "Figma",
    logo: "/logos/figma.svg",
    location: "United States",
    openJobs: 2,
    color: "bg-black",
  },
  {
    id: 4,
    name: "Google",
    logo: "/logos/google.svg",
    location: "Australia",
    openJobs: 3,
    color: "bg-white",
  },
  {
    id: 5,
    name: "Microsoft",
    logo: "/logos/microsoft.svg",
    location: "Australia",
    openJobs: 3,
    color: "bg-white",
  },
  {
    id: 6,
    name: "Twitter",
    logo: "/logos/twitter.svg",
    location: "Australia",
    openJobs: 3,
    color: "bg-blue-400",
  },
  {
    id: 7,
    name: "Instagram",
    logo: "/logos/instagram.svg",
    location: "Australia",
    openJobs: 3,
    color: "bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-500",
  },
  {
    id: 8,
    name: "Youtube",
    logo: "/logos/youtube.svg",
    location: "Canada",
    openJobs: 3,
    color: "bg-red-600",
  },
  {
    id: 9,
    name: "Apple",
    logo: "/logos/apple.svg",
    location: "United States",
    openJobs: 3,
    color: "bg-black",
  },
  {
    id: 10,
    name: "Slack",
    logo: "/logos/slack.svg",
    location: "Germany",
    openJobs: 3,
    color: "bg-purple-100",
  },
  {
    id: 11,
    name: "Reddit",
    logo: "/logos/reddit.svg",
    location: "France",
    openJobs: 3,
    color: "bg-orange-600",
  },
  {
    id: 12,
    name: "Upwork",
    logo: "/logos/upwork.svg",
    location: "China",
    openJobs: 3,
    color: "bg-green-500",
  },
]

import { CompanyImage } from '/src/backend_integration/Handleimages.jsx';
import { Clock ,MapPin} from "lucide-react";


function CompanyCard({

  employer,
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
              <h3 className="font-medium">{employer.name}</h3>
              {featured && <span className="text-xs bg-[#fceeee] text-[#e05151] px-2 py-0.5 rounded">Featured</span>}
            </div>
            <div className="flex items-center gap-1 text-sm text-[#939aad]">
                  <MapPin className="h-4 w-4 text-[#9199a3]" />
              {employer.location}
            </div>
            <div className="flex items-center gap-1 text-sm text-[#939aad]">
                <Clock className="h-4 w-4 text-[#9199a3]" />
              {employer.openJobs} Open Jobs
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

export default function JobEmployerList() {
  return (
    <div className="space-y-4">
      {employers.map((employer) => (
        <CompanyCard key={employer.id} employer={employer} />
      ))}
    </div>
  );
}


