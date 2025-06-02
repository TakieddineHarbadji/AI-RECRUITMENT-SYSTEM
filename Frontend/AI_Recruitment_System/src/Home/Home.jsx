import Navbar from "../Components/NavBar";
import Header from "../Components/Header";
import HowSiteWork from "Components/Home/HowSiteWork";
import HeroSection from "Components/Home/HeroSection";
import StatsHomePage from "Components/Home/Stats";
import PopularVacancies from "Components/Home/PopularVacancies";
import PopularCategories from "Components/Home/PopularCategories";
import FeaturedJob from "Components/Home/FeaturedJob";
import TopCompanies from "Components/Home/TopCompanies";
import CTAsection from "Components/Home/CTAsection";
import BackgroundImage from 'assets/Background.png' ;
import TestimonialSection from "Components/Home/TestimonialSection";
import WebSiteFooter from "Components/Home/WebSiteFooter";

export default function Home() {
  return (
    
    <main className="min-h-screen bg-[#f1f2f49a]">
      {/* Top Navigation */}
      <Navbar activePage="home"/>

      {/* Logo and Search Bar */}
      <Header/>

      {/* Hero Section */}
      <HeroSection/>

      {/* Stats Section */}
      <StatsHomePage/>

      {/* Popular Vacancies */}
      <PopularVacancies/>

      {/* How jobpilot works section */}
      <HowSiteWork/>    

      {/* Popular categories section */}
      <PopularCategories/>    

      {/* Featured jobs section */}
            <FeaturedJob/>    

      {/* Top Companies Section */}
      <TopCompanies/>    


      {/* Testimonials Section */}
            <TestimonialSection/>    


      {/* CTA Section */}
      <CTAsection/> 
      

      {/* Footer */}
      <WebSiteFooter/>
    </main>
  );
}



  
  // Testimonial Card Component
  function TestimonialCard({
    rating,
    text,
    name,
    title,
    avatar,
  }) {
    return (
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <div className="flex mb-4">
          {Array.from({ length: rating }).map((_, i) => (
            <svg
              key={i}
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="#ffaa00"
              stroke="#ffaa00"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
          ))}
        </div>
        <p className="text-[#767e94] mb-6">"{text}"</p>
        <div className="flex items-center gap-3">
          <img src={avatar || "/placeholder.svg"} alt={name} width={48} height={48} className="rounded-full" />
          <div>
            <h4 className="font-medium">{name}</h4>
            <p className="text-sm text-[#767e94]">{title}</p>
          </div>
          <div className="ml-auto text-4xl text-[#e7f0fa]">"</div>
        </div>
      </div>
    );
  }



