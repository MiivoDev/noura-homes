import { useRef } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const projects = [
  {
    title: "Marble Hill",
    href: "/projects/current/marble-hill",
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
    href: "/projects/current/emerald-ridge",
    images: [
      "/Emerald%20Ridge.png",
      "https://images.unsplash.com/photo-1600607687931-ce50026a5ce8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80",
      "https://images.unsplash.com/photo-1600607687644-aac4c15a57b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80"
    ],
    description: "Emerald Ridge is an exclusive enclave of estate homes in Maple Ridge on generous lots backing onto greenbelt, with suite and spice kitchen options."
  },
  {
    title: "Multi-Family Homes",
    href: "/projects/current/multi-family-homes",
    images: [
      "/thomas-avenue/exterior.jpeg?v=20260422a"
    ],
    description: "Purpose-built multi-family residences designed for modern living, strong long-term value, and refined architecture."
  }
];

function ProjectCard({ project }: { project: typeof projects[0] }) {
  const navigateToProject = () => {
    if (typeof window !== 'undefined') {
      window.location.href = project.href;
    }
  };

  return (
    <div className="w-[88vw] md:w-[60vw] lg:w-[62vw] flex-shrink-0 group snap-start">
      <button
        type="button"
        onClick={navigateToProject}
        className="block relative h-[30vh] md:h-[42vh] lg:h-[46vh] overflow-hidden mb-3 md:mb-4 cursor-pointer w-full text-left"
      >
        <img
          src={project.images[0]}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        {/* Title */}
        <div className="absolute bottom-6 left-6 z-20">
          <h3 className="text-white text-[20px] md:text-[24px] lg:text-[28px] font-display">
            {project.title}
          </h3>
        </div>

      </button>
      
      {/* Content below image */}
      <div className="border-t border-primary/20 pt-3 md:pt-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-3 md:gap-4">
        <p className="text-primary max-w-xl text-sm md:text-base leading-relaxed">
          {project.description}
        </p>
        <button
          type="button"
          onClick={navigateToProject}
          className="inline-flex items-center gap-2 text-primary font-medium tracking-wide hover:text-accent transition-colors pb-1 border-b border-primary hover:border-accent whitespace-nowrap"
        >
          See Project
          <ArrowRight className="w-4 h-4" />
        </button>
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
    <section
      id="our-projects"
      className="scroll-mt-[120px] py-6 md:py-10 bg-[#FDFBF7] overflow-hidden"
    >
      <div className="max-w-[1600px] mx-auto px-5 lg:px-16">
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-[28px] md:text-[40px] lg:text-[48px] font-display leading-[1.2] tracking-[-0.48px] text-primary">
            Our Signature Projects
          </h2>
        </div>
      </div>

      <div className="w-full pl-5 lg:pl-16 2xl:pl-[calc((100vw-1600px)/2+4rem)]">
        <div 
          ref={scrollRef}
          className="flex gap-4 md:gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-3 md:pb-4 pr-5 lg:pr-16"
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
