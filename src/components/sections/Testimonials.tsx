import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { featuredTestimonials } from '@/src/data/featuredTestimonials';
import { TestimonialVideoMedia } from './TestimonialVideoMedia';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const activeTestimonial = featuredTestimonials[activeIndex];

  const showPrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + featuredTestimonials.length) % featuredTestimonials.length);
  };

  const showNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % featuredTestimonials.length);
  };

  return (
    <section className="py-16 md:py-20 bg-[#FDFBF7]">
      <div className="max-w-[1600px] mx-auto px-8 lg:px-16">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-[28px] md:text-[40px] lg:text-[48px] font-display leading-[1.2] tracking-[-0.48px] text-primary">
            What Our Clients Love
          </h2>
        </div>

        <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={activeIndex}
          custom={direction}
          initial={{ opacity: 0, x: direction * 26 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: direction * -26 }}
          transition={{ duration: 0.45, ease: 'easeInOut' }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start mb-16"
        >
          {/* Left: Video/Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full aspect-[16/10] bg-gray-200"
            key={activeIndex}
          >
            <TestimonialVideoMedia
              image={activeTestimonial.image}
              author={activeTestimonial.author}
              videoSrc={activeTestimonial.videoSrc}
              startSeconds={activeTestimonial.startSeconds}
              youtubeId={activeTestimonial.youtubeId}
              youtubeStartSeconds={activeTestimonial.youtubeStartSeconds}
              className="h-full w-full"
              variant="carousel"
            />
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-center h-full"
          >
            <img src="/mdi_comma.svg" alt="Quote" className="w-12 h-12 md:w-16 md:h-16 mb-6" />

            <h3 className="text-2xl md:text-3xl font-sans text-primary font-semibold mb-6">
              {activeTestimonial.quoteTitle}
            </h3>

            <p className="text-primary/90 text-base md:text-lg leading-relaxed mb-12">
              &quot;{activeTestimonial.quoteBody}&quot;
            </p>

            <div className="mt-auto">
              <div className="text-3xl md:text-4xl font-display text-primary mb-1">{activeTestimonial.author}</div>
              <div className="text-primary/80 text-sm md:text-base">{activeTestimonial.role}</div>
            </div>
          </motion.div>
        </motion.div>
        </AnimatePresence>

        {/* Navigation & Link */}
        <div className="flex flex-col items-center justify-center space-y-12">
          <div className="flex items-center gap-6">
            <button
              onClick={showPrev}
              aria-label="Show previous testimonial"
              className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-primary/30 flex items-center justify-center text-primary/40 hover:border-primary hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-5 h-5 md:w-6 md:h-6" />
            </button>
            <button
              onClick={showNext}
              aria-label="Show next testimonial"
              className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-primary flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
            >
              <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
            </button>
          </div>

          <a href="/testimonials" className="inline-flex items-center gap-2 text-primary font-medium text-base md:text-lg border-b border-primary pb-1 hover:opacity-70 transition-opacity">
            More Client Stories <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
