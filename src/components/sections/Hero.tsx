import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../ui/Button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    video: "/hero-video.mp4",
    title: "Award-Winning Custom Luxury Homes in the Lower Mainland.",
    description:
      "For over 30 years, we've blended artistry, integrity, and family values to build homes that are as unique as the families who live in them."
  },
  {
    video: "/Hero videos 2.mp4",
    chip: "Bookings open",
    title: "Marble Hill - The New Residential Project.",
    description:
      "Discover Marble Hill, our newest residential community thoughtfully designed for elevated family living, timeless architecture, and modern comfort."
  },
  {
    video: "/Hero videos 3.mp4",
    chip: "Upcoming project",
    title: "Emerald Ridge - New Luxury Stays.",
    description:
      "Experience Emerald Ridge, a fresh collection of luxury stays crafted with refined finishes, serene surroundings, and exceptional lifestyle amenities."
  }
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextVideo = () => setCurrentIndex((prev) => (prev + 1) % slides.length);
  const prevVideo = () => setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);

  // Auto-play carousel
  useEffect(() => {
    const timer = setInterval(nextVideo, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen min-h-[800px] w-full overflow-hidden bg-gray-900">
      {/* Video Carousel Background */}
      <AnimatePresence initial={false}>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full"
        >
          <div className="absolute inset-0 bg-black/30 z-10" />
          <video
            src={slides[currentIndex].video}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Content Box */}
      <div className="relative z-20 h-full max-w-[1600px] mx-auto px-6 md:px-8 lg:px-10 flex items-end pb-12 md:pb-20 lg:pb-12">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="bg-[#213765] p-6 md:p-8 lg:p-7 xl:p-10 max-w-[36rem] lg:max-w-[29rem] xl:max-w-[36rem] w-full text-white shadow-2xl min-h-[420px] md:min-h-[470px] lg:min-h-[430px] xl:min-h-[470px] flex flex-col"
        >
          {/* Carousel Navigation */}
          <div className="flex items-center gap-4 md:gap-6 mb-5 md:mb-7 lg:mb-6">
            <div className="flex gap-2 md:gap-3">
              <button 
                onClick={prevVideo} 
                className="w-10 h-10 md:w-11 md:h-11 border border-white/30 rounded-full flex items-center justify-center hover:bg-white hover:text-[#213765] transition-colors"
                aria-label="Previous Video"
              >
                <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
              </button>
              <button 
                onClick={nextVideo} 
                className="w-10 h-10 md:w-11 md:h-11 border border-white/30 rounded-full flex items-center justify-center hover:bg-white hover:text-[#213765] transition-colors"
                aria-label="Next Video"
              >
                <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
              </button>
            </div>
            <div className="h-[1px] flex-1 bg-white/20" />
            <span className="text-accent uppercase tracking-widest text-xs md:text-sm font-medium whitespace-nowrap">
              {String(currentIndex + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
            </span>
          </div>
          
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="flex flex-col flex-1"
            >
              {slides[currentIndex].chip && (
                <span className="inline-flex w-fit mb-3 md:mb-4 rounded-none bg-transparent border border-white/40 px-3 py-1 text-[11px] md:text-xs font-medium uppercase tracking-wider text-white">
                  {slides[currentIndex].chip}
                </span>
              )}
              <h1 className="text-[34px] md:text-[40px] lg:text-[34px] xl:text-[46px] font-display leading-[1.08] mb-3 md:mb-5 lg:mb-4">
                {slides[currentIndex].title}
              </h1>
              
              <p className="text-gray-300 text-sm md:text-base lg:text-[14px] mb-6 md:mb-8 lg:mb-7 max-w-md leading-relaxed">
                {slides[currentIndex].description}
              </p>
              
              <div className="mt-auto flex flex-col sm:flex-row gap-3 md:gap-4">
                <Button variant="white" className="w-full sm:w-auto">
                  {currentIndex === 0 ? "Connect With Us" : "View property"}
                </Button>
                {currentIndex === 0 && (
                  <Button variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-[#213765]">
                    See Our Properties
                  </Button>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
