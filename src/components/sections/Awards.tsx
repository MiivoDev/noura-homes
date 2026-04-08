import { motion } from 'framer-motion';

const awards = [
  {
    title: "TRI-CITIES CHAMBER EXCELLENCE\nAWARD NOMINATIONS",
    items: [
      "Best Custom Design Best Single",
      "Best Family Home Over 2,000 sq. Ft.",
      "Best Landscape Design"
    ],
    variant: "blue"
  },
  {
    title: "RIDGE MEADOWS CHAMBER\nEXCELLENCE AWARD NOMINATIONS",
    items: [
      "Best Custom Design Best Single",
      "Best Family Home Over 2,000 sq. Ft.",
      "Best Landscape Design"
    ],
    variant: "white"
  },
  {
    title: "GEORGIE AWARDS",
    items: [
      "Best Custom Design Best Single",
      "Best Family Home Over 2,000 sq. Ft.",
      "Best Landscape Design"
    ],
    variant: "blue"
  },
  {
    title: "RIDGE MEADOWS CHAMBER",
    items: [
      "Won 2026 Environmental Leader of the Year Award"
    ],
    variant: "white"
  },
  {
    title: "2026 NOMINATIONS",
    items: [
      "Business Leader of the Year at Ridge Meadows Chamber for our President, Jamileh Askarian",
      "Business Leader of the Year at Tri-Cities Chamber for our President, Jamileh Askarian",
      "Business of the Year (20+ Employees) at Tri-Cities Chamber"
    ],
    variant: "white"
  }
];

export default function Awards() {
  return (
    <section className="py-16 md:py-20 bg-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 pointer-events-none" 
        style={{ 
          backgroundImage: 'url("/BG.svg")', 
          backgroundSize: '120% auto',
          backgroundPosition: 'center bottom',
          backgroundRepeat: 'no-repeat'
        }} 
      />
      
      <div className="max-w-[1600px] mx-auto px-8 lg:px-16 relative z-10">
        <div className="text-center mb-14 md:mb-16 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[40px] md:text-[48px] font-display text-white mb-4">
              Award-Winning Heritage
            </h2>
            <p className="text-white/90 text-sm md:text-base leading-relaxed max-w-[700px] mx-auto">
              Our legacy of excellence has earned us recognition across the Lower Mainland and beyond.
              From design innovation to customer satisfaction, Noura Homes' excellence has been
              recognized with multiple awards and nominations.
            </p>
          </motion.div>
        </div>

        <div className="flex flex-wrap justify-center gap-6 md:gap-7 mt-20 md:mt-24 items-start">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={`relative w-full md:w-[420px] lg:w-[430px] px-[30px] pt-[50px] pb-[50px] h-[380px] ${
                award.variant === 'blue' 
                  ? 'bg-secondary text-white' 
                  : 'bg-white text-primary'
              }`}
            >
              {/* Award Icon */}
              <div className="absolute -top-12 left-6 w-24 h-24 flex items-center justify-center">
                <img 
                  src="/Award%20Icon.png" 
                  alt="Award Icon" 
                  className="w-full h-full object-contain drop-shadow-2xl"
                />
              </div>
              
              <div>
                <h3
                  className="font-display font-semibold mb-4 whitespace-pre-line leading-snug uppercase"
                  style={{ fontSize: '20px' }}
                >
                  {award.title}
                </h3>
                
                {/* Divider Line */}
                <div className={`w-full h-[1px] mb-4 ${
                  award.variant === 'blue' ? 'bg-white/30' : 'bg-primary/30'
                }`} />

                <ul className="space-y-2.5 text-left">
                  {award.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className={`mt-2 w-1 h-1 rounded-full flex-shrink-0 ${
                        award.variant === 'blue' ? 'bg-white' : 'bg-primary'
                      }`} />
                      <span className={`text-sm md:text-[19px] ${
                        award.variant === 'blue' ? 'text-white/90' : 'text-primary/90'
                      }`}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
