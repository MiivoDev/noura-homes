import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function LeadGen() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"]
  });

  const clipPath = useTransform(scrollYProgress, [0, 1], ["inset(0 100% 0 0)", "inset(0 0% 0 0)"]);

  return (
    <section ref={containerRef} className="bg-secondary">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[700px] lg:min-h-[90vh]">
        {/* Left: Image Reveal */}
        <div className="py-4 pl-4 pr-4 lg:py-8 lg:pl-8 lg:pr-0 relative h-[400px] lg:h-auto">
          <motion.div 
            style={{ clipPath }}
            className="w-full h-full"
          >
            <img
              src="/Custom Build.png"
              alt="Custom Build Profile"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* Right: Content */}
        <div className="flex items-center p-8 md:p-12 lg:p-20 lg:pl-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-xl text-white"
          >
            <h2 className="text-[28px] md:text-[40px] lg:text-[48px] font-display leading-[1.2] tracking-[-0.48px] mb-6">
              Discover Your<br />Custom Build Profile
            </h2>
            <p className="text-white/90 text-base md:text-lg leading-relaxed mb-10">
              A Noura Home is designed around the way you live. Tell us about your family's lifestyle, from everyday comforts to luxury upgrades. Take this quick assessment to define your build profile and unlock an exclusive, preliminary project estimate.
            </p>
            <button className="px-6 py-3 border border-white text-white hover:bg-white hover:text-secondary transition-colors text-sm md:text-base">
              Discover My Build Profile
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
