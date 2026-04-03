import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const steps = [
  {
    title: "DISCOVERY & VISION",
    description: "The foundation of your home begins with understanding your lifestyle. In our initial consultations, we sit down to discuss your goals, aesthetic preferences, and the practical needs of your family. We evaluate your lot (or help you find one), assess the site requirements, and establish a clear, realistic budget and timeline. This ensures we are perfectly aligned before a single line is drawn.",
    image: "https://images.unsplash.com/photo-1542621334-a254cf47733d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80"
  },
  {
    title: "DESIGN & PERMITTING",
    description: "Our architectural partners translate your vision into detailed blueprints. We handle all necessary permits and approvals, navigating local regulations to ensure a smooth transition from concept to construction.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80"
  },
  {
    title: "CRAFTSMANSHIP & CONSTRUCTION",
    description: "With meticulous attention to detail, our master builders bring your home to life. We use premium materials and proven techniques, maintaining open communication throughout the entire building process.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80"
  },
  {
    title: "WELCOME HOME & BEYOND",
    description: "Before handing over the keys, we conduct a rigorous final inspection. But our commitment doesn't end there. We provide comprehensive warranty support and ongoing maintenance advice to protect your investment.",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80"
  }
];

export default function Process() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 md:py-32 bg-[#FDFBF7]">
      <div className="max-w-[1600px] mx-auto px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[48px] font-display text-primary leading-tight"
          >
            Our Proven Process
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-primary/80 text-base md:text-lg leading-relaxed"
          >
            Building a custom luxury home is one of life's most significant milestones, and the experience should be just as rewarding as the final result. Our approach is designed to provide complete transparency, eliminate the guesswork, and remove the stress of construction. We handle the complex logistics, municipal red tape, and daily project management so you can focus entirely on the excitement of bringing your family's vision to life.
          </motion.p>
        </div>

        <div className="border-t border-primary/20">
          {steps.map((step, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={index} className="border-b border-primary/20">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className={`w-full pt-8 flex items-center justify-between text-left group ${isOpen ? 'pb-0' : 'pb-8'}`}
                >
                  <div className="flex items-center w-full">
                    <span className="text-secondary font-sans font-normal text-[64px] tracking-[0px] w-32 md:w-64 flex-shrink-0">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h3 
                      className={`text-lg md:text-xl font-sans font-black transition-colors flex-1 ${isOpen ? 'text-primary' : 'text-primary/80 group-hover:text-primary'}`}
                      style={{ WebkitTextStroke: '0.5px currentColor' }}
                    >
                      {step.title}
                    </h3>
                  </div>
                  <div className={`w-10 h-10 rounded-full border border-primary flex items-center justify-center transition-colors text-primary flex-shrink-0`}>
                    {isOpen ? <Minus className="w-5 h-5 stroke-[1.5]" /> : <Plus className="w-5 h-5 stroke-[1.5]" />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-12 pt-0 flex flex-col md:flex-row gap-8 md:gap-12 items-start md:pl-64">
                        <div className="w-full md:w-[45%] max-w-[450px] h-[300px] md:h-[350px] relative overflow-hidden flex-shrink-0">
                          <img
                            src={step.image}
                            alt={step.title}
                            className="absolute inset-0 w-full h-full object-cover"
                          />
                        </div>
                        <p className="text-primary/80 text-base leading-relaxed flex-1 pt-2">
                          {step.description}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
