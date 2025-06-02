import { useState,useEffect } from 'react';
import { Bookmark, BookmarkCheck } from 'lucide-react'; // Assuming you're using lucide-react
import { MapPin, DollarSign, Clock,  ArrowRight } from 'lucide-react';
import { CompanyImage } from '/src/backend_integration/Handleimages.jsx';

export default function FeaturedJob() {
  return (
  <section className="py-8 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
  <div className="flex justify-between items-center mb-8">
    <h2 className="text-[#18191c] text-2xl font-semibold">Featured job</h2>
    <Link
      href="#"
      className="group  text-[#0a65cc] flex items-center text-sm font-medium   transition-all hover:-translate-y-1 "
    >
      View All <ArrowRight className="ml-1 h-4 w-4 transition-all group-hover:translate-x-1" />
    </Link>
  </div>

  <div className="space-y-4">
    {/* Senior UX Designer */}
    <JobCard
      title="Senior UX Designer"
      location="Australia"
      salary="$30K-$35K"
      timeRemaining="4 Days Remaining"
      badge="Contract Base"
      onBookmark={() => console.log('Bookmarked!')}
      onApply={() => console.log('Apply clicked')}
    />

    {/* Software Engineer */}
    <JobCard
      title="Software Engineer"
      location="China"
      salary="$50K-$60K"
      timeRemaining="4 Days Remaining"
      badge="Full Time"
      onBookmark={() => console.log('Bookmarked!')}
      onApply={() => console.log('Apply clicked')}
    />

    {/* Junior Graphic Designer */}
    <JobCard
      title="Junior Graphic Designer"
      location="Canada"
      salary="$50K-$70K"
      timeRemaining="4 Days Remaining"
      badge="Full Time"
      onBookmark={() => console.log('Bookmarked!')}
      onApply={() => console.log('Apply clicked')}
    />

    {/* Product Designer */}
    <JobCard
      title="Product Designer"
      location="United States"
      salary="$35K-$40K"
      timeRemaining="4 Days Remaining"
      badge="Full Time"
      onBookmark={() => console.log('Bookmarked!')}
      onApply={() => console.log('Apply clicked')}
    />
  </div>
</section>

  );
}


import { Link } from 'react-router-dom';

 function JobCard({
  title,
  location,
  salary,
  timeRemaining,
  badge,
  iconText = '',
  iconColor = '#fffffff',
  onBookmark,
  onApply,
}) {
    const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(!saved);
    // Add your save logic here
    onBookmark();
  };
  return (
    <div className="bg-white rounded-lg border border-gray-100 p-6 flex flex-col md:flex-row md:items-center md:justify-between">
      <div className="flex items-start gap-4 mb-4 md:mb-0">
        <div className="w-12 h-12  rounded-md flex items-center justify-center text-white">
                    <CompanyImage id={123} pre_link="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/800px-Apple_logo_black.svg.png" type="invoice" />
        </div>

        <div>
          <h3 className="text-[#18191c] font-semibold text-lg">{title}</h3>
          <div className="flex flex-wrap gap-4 mt-2 text-sm text-[#767f8c]">
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-1" />
              {location}
            </div>
            <div className="flex items-center">
              <DollarSign className="h-4 w-4 mr-1" />
              {salary}
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              {timeRemaining}
            </div>
          </div>
          <div className="mt-2">
            <span className="inline-block px-2 py-1 bg-[#e7f0fa] text-[#0a65cc] text-xs rounded">
              {badge}
            </span>
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
  );
}

