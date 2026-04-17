import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    video: "/Intro Video.mp4",
    title: "Award-Winning Custom Luxury Homes in the Lower Mainland.",
    description:
      "For over 30 years, we've blended artistry, integrity, and family values to build homes that are as unique as the families who live in them."
  },
  {
    video: "/Marble Hill.mp4",
    chip: "Bookings open",
    title: "Marble Hill - The New Residential Project.",
    description:
      "Discover Marble Hill, our newest residential community thoughtfully designed for elevated family living, timeless architecture, and modern comfort."
  },
  {
    video: "/ Emerald Ridge mp4.mp4",
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
    const timer = setInterval(nextVideo, 9000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative h-screen min-h-[800px] w-full overflow-hidden bg-gray-900">
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
            className={`w-full h-full object-cover ${currentIndex === 0 ? 'scale-[1.08]' : 'scale-100'}`}
          />
        </motion.div>
      </AnimatePresence>

      {/* Content Box */}
      <div className="relative z-20 h-full max-w-[1600px] mx-auto px-8 lg:px-16 flex items-end pb-12 md:pb-20 lg:pb-12">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="bg-secondary p-4 md:p-5 lg:p-5 xl:p-6 max-w-[28rem] lg:max-w-[23rem] xl:max-w-[28rem] w-full text-white shadow-2xl min-h-[320px] md:min-h-[360px] lg:min-h-[340px] xl:min-h-[360px] flex flex-col"
        >
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
                <span className="inline-flex w-fit mb-3 md:mb-4 rounded-none bg-transparent border border-white/50 px-3 py-1 text-[11px] md:text-xs font-medium uppercase tracking-wider text-white">
                  {slides[currentIndex].chip}
                </span>
              )}
              <h1 className="text-[34px] md:text-[40px] lg:text-[34px] xl:text-[46px] font-display leading-[1.08] mb-3 md:mb-5 lg:mb-4">
                {slides[currentIndex].title}
              </h1>
              
              <p className="text-white/85 text-sm md:text-base lg:text-[14px] mb-6 md:mb-8 lg:mb-7 max-w-md leading-relaxed">
                {slides[currentIndex].description}
              </p>

              <div className="mt-auto flex items-center justify-between gap-3">
                <div className="flex flex-wrap items-center gap-3">
                  {currentIndex === 0 && (
                    <>
                      <a
                        href="#contact"
                        className="inline-flex items-center justify-center h-10 px-5 bg-white text-primary text-sm font-medium hover:bg-white/90 transition-colors"
                      >
                        Connect With Us
                      </a>
                      <a
                        href="#our-projects"
                        className="inline-flex items-center justify-center h-10 px-5 border border-white text-white text-sm font-medium hover:bg-white/10 transition-colors"
                      >
                        See Projects
                      </a>
                    </>
                  )}

                  {currentIndex > 0 && (
                    <a
                      href="#our-projects"
                      className="inline-flex items-center justify-center h-10 px-5 bg-white text-primary text-sm font-medium hover:bg-white/90 transition-colors"
                    >
                      View Property
                    </a>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={prevVideo}
                    className="p-1 text-white/90 hover:text-white transition-colors"
                    aria-label="Previous Video"
                  >
                    <ChevronLeft className="w-3.5 h-3.5 md:w-4 md:h-4" />
                  </button>
                  <button
                    onClick={nextVideo}
                    className="p-1 text-white/90 hover:text-white transition-colors"
                    aria-label="Next Video"
                  >
                    <ChevronRight className="w-3.5 h-3.5 md:w-4 md:h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
