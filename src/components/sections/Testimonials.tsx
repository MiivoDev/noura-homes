import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Play } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="py-16 md:py-20 bg-[#FDFBF7]">
      <div className="max-w-[1600px] mx-auto px-8 lg:px-16">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-[48px] font-display text-primary leading-tight">
            What Our Clients Love
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start mb-16">
          {/* Left: Video/Image */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full aspect-[16/10] bg-gray-200"
          >
            <img 
              src="/Noura_Alex.png" 
              alt="Alex - Custom Homeowner" 
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
              One-Minute Decision.
            </h3>
            
            <p className="text-primary/90 text-base md:text-lg leading-relaxed mb-12">
              "This was the first house we ever built, and everything was new to us. Noura Construction walked us through the entire process and was incredibly helpful. We saw the quality of their work on another house, and it was a one-minute decision to go with them. Now, it truly feels like our home—like putting on a shoe that just perfectly fits you. I would absolutely recommend Noura Homes."
            </p>
            
            <div className="mt-auto">
              <div className="text-3xl md:text-4xl font-display text-primary mb-1">Alex</div>
              <div className="text-primary/80 text-sm md:text-base">Custom Homeowner</div>
            </div>
          </motion.div>
        </div>

        {/* Navigation & Link */}
        <div className="flex flex-col items-center justify-center space-y-12">
          <div className="flex items-center gap-6">
            <button className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-primary/30 flex items-center justify-center text-primary/40 hover:border-primary hover:text-primary transition-colors">
              <ArrowLeft className="w-5 h-5 md:w-6 md:h-6" />
            </button>
            <button className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-primary flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
              <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
            </button>
          </div>
          
          <a href="#" className="inline-flex items-center gap-2 text-primary font-medium text-base md:text-lg border-b border-primary pb-1 hover:opacity-70 transition-opacity">
            More Client Stories <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
