import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Legacy() {
  return (
    <section className="relative bg-secondary text-white pt-8 md:pt-10 pb-16 md:pb-20 lg:pb-24 overflow-hidden">
      <div className="relative z-10 max-w-[1600px] mx-auto px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {/* Left Column: Title and Image */}
          <div className="flex flex-col">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-[28px] md:text-[40px] lg:text-[48px] font-display leading-[1.2] tracking-[-0.48px] mb-4 lg:mb-5"
            >
              Your Vision.<br />
              Our Craftsmanship.<br />
              A Legacy Built to Last.
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="relative w-full aspect-[16/10] overflow-hidden"
            >
              <img
                src="/Legacy%20image.png"
                alt="Luxury Interior"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          {/* Right Column: Body Copy and CTA */}
          <div className="flex flex-col justify-between">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="space-y-4 text-white/90 text-base leading-relaxed font-light"
            >
              <p className="text-[20px] leading-[1.45]">
                For over 30 years, Noura Homes has been more than a construction company. we are a family-owned partner dedicated to bringing your distinct vision to life. We bridge the gap between architectural artistry and structural integrity.
              </p>
              <p>
                From navigating complex planning for exclusive subdivisions to executing the finest details of a luxury custom build, our expertise ensures a seamless, transparent journey. We don't just build beautiful houses—we engineer future-ready, energy-efficient homes designed to stand the test of time and grow with your family.
              </p>
              <p>
                Founded by Hooshang and Jamileh Askarian, our company is rooted in a simple but powerful belief: every family deserves a home designed for generations to come. What started as a shared passion for exceptional craftsmanship has grown into a multi-generational commitment.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              className="mt-6 lg:mt-auto pt-2"
            >
              <a
                href="#story"
                className="inline-flex items-center gap-2 text-white hover:text-white/80 transition-colors font-medium text-lg group pb-1 border-b border-white hover:border-white/80"
              >
                Read More
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0">
        <img
          src="/NOURA.svg"
          alt=""
          aria-hidden="true"
          className="w-full h-auto object-contain object-bottom opacity-90"
        />
      </div>
    </section>
  );
}
