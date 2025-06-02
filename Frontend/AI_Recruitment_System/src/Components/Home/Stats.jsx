import statsimg1 from 'assets/icons/stats/stats1.png'
import statsimg2 from 'assets/icons/stats/stats2.png'
import statsimg3 from 'assets/icons/stats/stats3.png'
import statsimg4 from 'assets/icons/stats/stats4.png'

export default function StatsHomePage() {
  return (
<div className="py-8 px-4 md:px-8 lg:px-16 grid grid-cols-1 lg:grid-cols-4 gap-4"> 
        <div className="bg-white border border-[#e4e5e8] rounded-md p-4 flex items-center shadow-md shadow-black/5 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg hover:shadow-black/5">
          <div className="w-[48px] h-12 bg-[#cee0f5] rounded-md flex items-center justify-center mr-4 flex-shrink-0">
            <img src={statsimg1} alt="Calendar Icon" width="24" height="24" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-[#18191c]">1,75,324</h3>
            <p className="text-[#5e6670]">Live Job</p>
          </div>
        </div>
        <div className="bg-white border border-[#e4e5e8] rounded-md p-4 flex items-center shadow-md shadow-black/5 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg hover:shadow-black/5">
          <div className="w-[48px] h-12 bg-[#cee0f5] rounded-md flex items-center justify-center mr-4 flex-shrink-0">
  <img src={statsimg2} alt="Calendar Icon" width="24" height="24" />
</div>

          <div>
            <h3 className="text-2xl font-bold text-[#18191c]">97,354</h3>
            <p className="text-[#5e6670]">Companies</p>
          </div>
        </div>
        <div className="bg-white border border-[#e4e5e8] rounded-md p-4 flex items-center shadow-md shadow-black/5 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg hover:shadow-black/5">
          <div className="w-[48px] h-12 bg-[#cee0f5] rounded-md flex items-center justify-center mr-4 flex-shrink-0">
            <img src={statsimg3} alt="Calendar Icon" width="24" height="24" />

          </div>
          <div>
            <h3 className="text-2xl font-bold text-[#18191c]">38,47,154</h3>
            <p className="text-[#5e6670]">Candidates</p>
          </div>
        </div>
        <div className="bg-white border border-[#e4e5e8] rounded-md p-4 flex items-center shadow-md shadow-black/5 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-black/5">
          <div className="w-[48px] h-12 bg-[#cee0f5] rounded-md flex items-center justify-center mr-4 flex-shrink-0">
           <img src={statsimg4} alt="Calendar Icon" width="24" height="24" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-[#18191c]">7,532</h3>
            <p className="text-[#5e6670]">New Jobs</p>
          </div>
        </div>
      </div>
      );
}
