import { ChevronLeft, ChevronRight, Briefcase, ArrowRight, Bookmark, Search, Clock, DollarSign, MapPin } from "lucide-react"

export default function CTAsection() {
  return (<section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#edeff5] rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4 text-[#18191c]">Become a Candidate</h3>
            <p className="text-[#767e94] mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras cursus a dolor convallis efficitur.
            </p>
            <a
              href="/sdfd"
              className="inline-flex items-center gap-2 bg-white text-[#0a65cc] px-4 py-2 rounded font-medium cursor-pointer group  hover:bg-[#e8f1ff] shadow-sm hover:shadow-md transition-all hover:-translate-y-1 hover:shadow-black/5"
            >
              Register Now
              <ChevronRight className=" ml-1 h-4 w-4 transition-all group-hover:translate-x-1" size={16} />
            </a>
          </div>

          <div className="bg-[#0a65cc] rounded-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Become a Employers</h3>
            <p className="mb-8">
              Cras in massa pellentesque, mollis ligula non, luctus dui. Morbi sed efficitur dolor. Pellentesque augue
              nibh, aliqu.
            </p>
            <a
              href="/sdfd"
              className="inline-flex items-center gap-2 bg-white text-[#0a65cc] px-4 py-2 rounded font-medium cursor-pointer group  hover:bg-[#e8f1ff] shadow-sm hover:shadow-md transition-all hover:-translate-y-1 hover:shadow-black/5"
            >
              Register Now
              <ChevronRight className=" ml-1 h-4 w-4 transition-all group-hover:translate-x-1" size={16} />
            </a>
          </div>
        </div>
      </section>);}