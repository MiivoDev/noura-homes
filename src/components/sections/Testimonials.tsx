import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Play } from 'lucide-react';

const homepageTestimonials = [
  {
    quoteTitle: 'Turning a Vision into a Reality with Unmatched Quality',
    quoteBody:
      'What drew us to Noura Homes was the attention to detail and the ability to customize our home exactly how we wanted it. From initial design to final touches, the team was supportive throughout. They did not just build a house; they built our home. The craftsmanship and care made all the difference.',
    author: 'The Smith Family',
    role: 'Custom Homeowners',
    image: 'https://www.figma.com/api/mcp/asset/b6b9954a-ca0c-449f-8fa1-28402cf16dfe',
  },
  {
    quoteTitle: 'A Seamless, Fun Experience with Noura Homes',
    quoteBody:
      'Noura stood out among other builders, and when we walked into their homes, we felt the high quality immediately. Despite hearing horror stories about building, the team made the process easy and smooth by explaining every step. We incorporated every wish we had, and they delivered on time. They treated us like family, and we would definitely work with them again.',
    author: 'Sebastian and Stephanie',
    role: 'Custom Homeowners',
    image: 'https://www.figma.com/api/mcp/asset/2d42a8e7-6e39-4af4-9f9c-67e244107863',
  },
  {
    quoteTitle: 'One-Minute Decision.',
    quoteBody:
      'This was the first house we ever built, and everything was new to us. Noura Construction walked us through the entire process and was incredibly helpful. We saw the quality of their work on another house, and it was a one-minute decision to go with them. Now, it truly feels like our home, like putting on a shoe that perfectly fits. I would absolutely recommend Noura Homes.',
    author: 'Alex',
    role: 'Custom Homeowner',
    image: 'https://www.figma.com/api/mcp/asset/e60b567b-9972-4307-bd19-78d5b37b059c',
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const activeTestimonial = homepageTestimonials[activeIndex];

  const showPrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + homepageTestimonials.length) % homepageTestimonials.length);
  };

  const showNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % homepageTestimonials.length);
  };

  return (
    <section className="py-16 md:py-20 bg-[#FDFBF7]">
      <div className="max-w-[1600px] mx-auto px-8 lg:px-16">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-[48px] font-display text-primary leading-tight">
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
          >
            <img
              src={activeTestimonial.image}
              alt={`${activeTestimonial.author} testimonial`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="w-16 h-16 md:w-20 md:h-20 bg-white/20 backdrop-blur-sm flex items-center justify-center rounded-full hover:bg-white/30 transition-colors group">
                <Play className="w-6 h-6 md:w-8 md:h-8 text-white fill-white ml-1 group-hover:scale-110 transition-transform" />
              </button>
            </div>
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
              "{activeTestimonial.quoteBody}"
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
