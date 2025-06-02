
import { ChevronLeft, ChevronRight, Briefcase, ArrowRight, Bookmark, Search, Clock, DollarSign, MapPin } from "lucide-react"
import { Link } from "react-router-dom";

export default function WebSiteFooter() {
  return (
  <footer className="bg-[#18191c] text-white pt-16 pb-8">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
      {/* Logo and Contact */}
      <div className="lg:col-span-2">
        <div className="flex items-center gap-2 mb-4">
          <Briefcase className="text-white" />
          <span className="text-xl font-bold">AIRESY</span>
        </div>
        <p className="mb-2">Call now: (319) 555-0115</p>
        <p className="text-[#9199a3] text-sm">
          6391 Elgin St. Celina, Delaware 10299, New York, United States of America
        </p>
      </div>

      {/* Quick Links */}
      <div>
        <h4 className="text-lg font-medium mb-4">Quick Link</h4>
        <ul className="space-y-3">
          <li><FooterLink href="#">About</FooterLink></li>
          <li><FooterLink href="#" >Contact</FooterLink></li>
          <li><FooterLink href="#">Pricing</FooterLink></li>
          <li><FooterLink href="#">Blog</FooterLink></li>
        </ul>
      </div>

      {/* Candidate */}
      <div>
        <h4 className="text-lg font-medium mb-4">Candidate</h4>
        <ul className="space-y-3">
          <li><FooterLink href="#">Browse Jobs</FooterLink></li>
          <li><FooterLink href="#">Browse Employers</FooterLink></li>
          <li><FooterLink href="#">Candidate Dashboard</FooterLink></li>
          <li><FooterLink href="#">Saved Jobs</FooterLink></li>
        </ul>
      </div>

      {/* Employers and Support */}
      <div>
        <h4 className="text-lg font-medium mb-4">Employers</h4>
        <ul className="space-y-3 mb-6">
          <li><FooterLink href="#">Post a Job</FooterLink></li>
          <li><FooterLink href="#">Browse Candidates</FooterLink></li>
          <li><FooterLink href="#">Employers Dashboard</FooterLink></li>
          <li><FooterLink href="#">Applications</FooterLink></li>
        </ul>

        <h4 className="text-lg font-medium mb-4">Support</h4>
        <ul className="space-y-3">
          <li><FooterLink href="#">Faqs</FooterLink></li>
          <li><FooterLink href="#">Privacy Policy</FooterLink></li>
          <li><FooterLink href="#">Terms & Conditions</FooterLink></li>
        </ul>
      </div>
    </div>

    {/* Copyright */}
    <div className="border-t border-[#464d61] pt-6 flex flex-col md:flex-row justify-between items-center">
      <p className="text-[#9199a3] text-sm mb-4 md:mb-0">© 2024 AIRESY - Job Portal. All rights Reserved</p>
      <div className="flex gap-4">
        <FooterLink href="#" aria-label="Facebook">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
          </svg>
        </FooterLink>
        <FooterLink href="#" aria-label="YouTube">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
            <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
          </svg>
        </FooterLink>
        <FooterLink href="#" aria-label="Instagram">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
          </svg>
        </FooterLink>
        <FooterLink href="#" aria-label="Twitter">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
          </svg>
        </FooterLink>
      </div>
    </div>
  </div>
</footer>

  );
}

const FooterLink = ({ href, children }) => (
  <a href={href} className="text-[#9199a3] group hover:text-white flex items-center gap-1 cursor-pointer relative transition-all hover:shadow-black/5">
    <span className="relative">
      <ChevronRight
        className="text-[#9199a3] opacity-0 group-hover:opacity-100 translate-x-0 group-hover:translate-x-1 transition-all absolute left-0 top-1/2 -translate-y-1/2"
        size={14}
      />
    </span>
    <span className="pl-4">{children}</span>
  </a>
);
