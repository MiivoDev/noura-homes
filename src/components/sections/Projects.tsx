import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const projects = [
  {
    title: "Marble Hill",
    images: [
      "/Marble%20Hill.png",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80"
    ],
    description: "Marble Hill is a luxury community of custom single-family residences nestled in the lush, forested hillsides of Chilliwack."
  },
  {
    title: "Emerald Ridge",
    images: [
      "/Emerald%20Ridge.png",
      "https://images.unsplash.com/photo-1600607687931-ce50026a5ce8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80",
      "https://images.unsplash.com/photo-1600607687644-aac4c15a57b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80"
    ],
    description: "Marble Hill is a luxury community of custom single-family residences nestled in the lush, forested hillsides of Chilliwack."
  },
  {
    title: "The Summit",
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80",
      "https://images.unsplash.com/photo-1600607687931-ce50026a5ce8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80"
    ],
    description: "Panoramic city views from a meticulously designed custom residence."
  }
];

function ProjectCard({ project }: { project: typeof projects[0] }) {
  const [currentImage, setCurrentImage] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.6 });

  useEffect(() => {
    if (!isInView) return;

    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % project.images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [project.images.length, isInView]);

  return (
    <div ref={ref} className="w-[85vw] md:w-[60vw] lg:w-[62vw] flex-shrink-0 group snap-start">
      <div className="relative h-[38vh] md:h-[42vh] lg:h-[46vh] overflow-hidden mb-4">
        {project.images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`${project.title} - ${idx + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              idx === currentImage ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        {/* Title */}
        <div className="absolute bottom-6 left-6 z-20">
          <h3 className="text-white text-3xl md:text-4xl lg:text-4xl font-display">
            {project.title}
          </h3>
        </div>

        {/* Slider Indicators */}
        <div className="absolute bottom-8 right-6 z-20 flex gap-2">
          {project.images.map((_, idx) => (
            <div
              key={idx}
              className={`h-[2px] transition-all duration-500 ${
                idx === currentImage ? 'w-8 bg-white' : 'w-4 bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
      
      {/* Content below image */}
      <div className="border-t border-primary/20 pt-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <p className="text-primary max-w-xl text-sm md:text-base leading-relaxed">
          {project.description}
        </p>
        <a
          href="#"
          className="inline-flex items-center gap-2 text-primary font-medium tracking-wide hover:text-accent transition-colors pb-1 border-b border-primary hover:border-accent whitespace-nowrap"
        >
          See Project
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}

export default function Projects() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -600, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 600, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-8 md:py-10 bg-[#FDFBF7] overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-8 lg:px-16">
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-[36px] md:text-[40px] font-display text-primary">
            Our Signature Projects
          </h2>
        </div>
      </div>

      <div className="w-full pl-8 lg:pl-16 2xl:pl-[calc((100vw-1600px)/2+4rem)]">
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-4 pr-8 lg:pr-16"
        >
          {projects.map((project, index) => (
            <div key={index}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="flex justify-center gap-3 mt-5">
        <button 
          onClick={scrollLeft}
          className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button 
          onClick={scrollRight}
          className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}
