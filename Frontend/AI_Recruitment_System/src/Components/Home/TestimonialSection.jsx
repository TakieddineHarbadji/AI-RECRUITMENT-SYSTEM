import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Make sure icons are imported
import { CandidateImage } from '/src/backend_integration/Handleimages.jsx';

const testimonials = [
  { rating: 5, text: "Ut ullamcorper hendrerit tempor...", name: "Robert Fox", title: "UI/UX Designer"  },
  { rating: 5, text: "Mauris eget lorem odio...", name: "Bessie Cooper", title: "Creative Director"  },
  { rating: 5, text: "Class aptent taciti sociosqu...", name: "Jane Cooper", title: "Photographer"  },
  { rating: 5, text: "Suspendisse et metus quis nibh...", name: "Alex Johnson", title: "Marketing Lead"  },
  { rating: 5, text: "Duis vestibulum bibendum dapibus...", name: "Linda Smith", title: "Software Engineer"  },
  { rating: 5, text: "Lorem ipsum dolor sit amet...", name: "Mark Lee", title: "Project Manager"  },
];

export default function TestimonialSection() {
  const containerRef = useRef(null);
  const [cardWidth, setCardWidth] = useState(0);
  const [index, setIndex] = useState(0);
  const visibleCount = 3;

  // Update card width on resize
  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        const container = containerRef.current;
        const firstCard = container.querySelector(".testimonial-card");
        if (firstCard) {
          setCardWidth(firstCard.offsetWidth);
        }
      }
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const handleNext = () => {
    if (index + visibleCount < testimonials.length) {
      setIndex((i) => i + 1);
    }
  };

  const handlePrev = () => {
    if (index > 0) {
      setIndex((i) => i - 1);
    }
  };

  return (
    <section className="bg-[#f1f2f4] py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#18191c]">Clients Testimonial</h2>

        <div className="relative">
          {/* Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow flex items-center justify-center z-10"
            disabled={index === 0}
          >
            <ChevronLeft size={20} />
          </button>

          {/* Slider */}
          <div className="overflow-hidden">
            <div
              ref={containerRef}
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${index * cardWidth}px)`,
              }}
            >
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className="testimonial-card px-2 w-full md:w-1/3 flex-shrink-0"
                >
                  <TestimonialCard {...t} />
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow flex items-center justify-center z-10"
            disabled={index + visibleCount >= testimonials.length}
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: testimonials.length - visibleCount + 1 }).map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full ${
                i === index ? "bg-[#0066ff]" : "bg-[#e4e5e8]"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
}
  
  // Testimonial Card Component
  function TestimonialCard({
    rating,
    text,
    name,
    title,
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
        <CandidateImage alt={name} width={48} height={48} className="rounded-full" id={123} pre_link="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/800px-Apple_logo_black.svg.png" type="invoice" />

          <div>
            <h4 className="font-medium">{name}</h4>
            <p className="text-sm text-[#767e94]">{title}</p>
          </div>
          <div className="ml-auto text-4xl text-[#e7f0fa]">"</div>
        </div>
      </div>
    );
  }



