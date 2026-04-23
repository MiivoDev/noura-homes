import { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const services = [
  {
    title: "General Contracting and Development Services",
    image: "/2nd%20fold/Rectangle%2011.png",
    description: "Embrace the confidence of building with Noura Homes, a full-service partner in custom construction and development, dedicated to managing every detail with care, precision, and an unwavering commitment to lasting quality.",
    href: "/services/general-contracting-development-services"
  },
  {
    title: "Luxury Custom Homes",
    image: "/2nd%20fold/Rectangle%2075.png",
    description: "Experience the seamless journey of creating your dream home with Noura Homes. From concept to completion, we handle every detail with care, collaboration, and integrity, ensuring your custom home reflects not just your style, but your story.",
    href: "/services/luxury-custom-homes"
  },
  {
    title: "Luxury Townhouse",
    image: "/2nd%20fold/Rectangle%2074.png",
    description: "Discover the art of refined living with Noura Homes' luxury townhouse communities, where elegance, comfort, and individuality unite. Each townhouse offers generous space, timeless design, and modern functionality, redefining what it means to live beautifully.",
    href: "/services/luxury-townhouse"
  },
  {
    title: "Luxury Subdivisions",
    image: "/2nd%20fold/Rectangle%2076.png",
    description: "Create your dream home within a Noura Homes community. Each subdivision is thoughtfully planned and beautifully crafted, blending functionality, elegance, and a genuine sense of belonging to build spaces truly centered around you.",
    href: "/services/luxury-subdivisions"
  },
  {
    title: "House Renovations",
    image: "/2nd%20fold/Rectangle%2077.png",
    description: "Reimagine your home with Noura Homes, where innovation and craftsmanship meet to create spaces that grow with you. Each renovation combines elegant design, modern functionality, and energy efficiency, enhancing your lifestyle while preserving the heart of your home.",
    href: "/services/house-renovations"
  },
  {
    title: "Service Areas",
    image: "/2nd%20fold/Rectangle%2078.png",
    description: "Build your dream home where lifestyle and community meet. At Noura Homes, we proudly serve families across the Lower Mainland, including Coquitlam, Port Coquitlam, Port Moody, Maple Ridge, Pitt Meadows, Chilliwack, Mission, Burnaby, West Vancouver and many others.",
    href: "/services/service-areas"
  }
];

export default function Services() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 md:py-32 bg-[#FDFBF7] overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-8 lg:px-16">
        <div className="text-center mb-16">
          <h2 className="text-[28px] md:text-[40px] lg:text-[48px] font-display leading-[1.2] tracking-[-0.48px] text-primary mb-6">
            Expertly Crafted Homes<br />Designed Around You
          </h2>
        </div>
      </div>

      <div className="w-full pl-8 lg:pl-16 2xl:pl-[calc((100vw-1600px)/2+4rem)]">
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-8 pr-8 lg:pr-16"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="min-w-[300px] md:min-w-[350px] lg:min-w-[400px] h-[500px] relative group overflow-hidden snap-start flex-shrink-0 cursor-pointer"
            >
              {/* Background Image */}
              <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Default State: Bottom Gradient & White Text */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a2b4c]/75 via-black/10 to-transparent opacity-100 group-hover:opacity-0 transition-opacity duration-500" />
              
              <div className="absolute bottom-0 left-0 right-0 p-8 flex items-end justify-center text-center opacity-100 group-hover:opacity-0 transition-opacity duration-500 h-full">
                <h3 className="text-white text-xl md:text-2xl font-display font-medium leading-snug">
                  {service.title}
                </h3>
              </div>

              {/* Hover State: White Card Sliding Up */}
              <div className="absolute bottom-0 left-0 right-0 bg-white p-8 translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-in-out flex flex-col justify-center items-center text-center min-h-[40%]">
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
                <a
                  href={service.href ?? '#'}
                  className="mt-5 inline-flex items-center justify-center px-5 py-2 border border-primary text-primary text-sm font-medium hover:bg-primary hover:text-white transition-colors"
                >
                  Explore
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="flex justify-center gap-4 mt-8">
        <button 
          onClick={scrollLeft}
          className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button 
          onClick={scrollRight}
          className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}
