import { motion } from 'framer-motion';

const awards = [
  {
    title: "RIDGE MEADOWS CHAMBER OF\nCOMMERCE AWARDS",
    items: [
      "Won 2026 Environmental Leader of the Year Award",
      "Nominated our President, Jamileh Askarian, for the Business Leader of the Year Award"
    ],
    variant: "blue"
  },
  {
    title: "RIDGE MEADOWS CHAMBER\nEXCELLENCE AWARD NOMINATIONS",
    items: [
      "Best Custom Design Best Single",
      "Best Family Home Over 2,000 sq. Ft.",
      "Best Landscape Design",
      "Business Leader of the Year at Ridge Meadows Chamber for our President, Jamileh Askarian"
    ],
    variant: "white"
  },
  {
    title: "TRI-CITIES CHAMBER OF\nCOMMERCE AWARDS",
    items: [
      "Nominated for the Business of the Year (20+ Employees) Award",
      "Nominated our President, Jamileh Askarian, for the Business Leader of the Year Award"
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
            <h2 className="text-[28px] md:text-[40px] lg:text-[48px] font-display text-white mb-4">
              Award-Winning Heritage
            </h2>
            <p className="text-white/90 text-sm md:text-base leading-relaxed max-w-[700px] mx-auto">
              Recognized as an award-winning custom home builder in Maple Ridge, Tri-Cities, and across the Lower
              Mainland, Noura Homes has built a reputation grounded in quality craftsmanship and client satisfaction.
              From design innovation to project delivery, our work has earned multiple awards and nominations, with
              recognition from organizations such as the Ridge Meadows Chamber of Commerce and coverage in Maple Ridge
              News.
            </p>
            <ul className="mt-6 mx-auto max-w-[820px] list-disc gap-x-5 gap-y-2 pl-5 text-left text-sm leading-relaxed text-white/90 md:grid md:grid-cols-2 md:text-base">
              <li>
                <a
                  href="https://www.tricitieschamber.com/2025/12/17/nominees-announced-for-tri-cities-chamber-2026-business-excellence-awards/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2 hover:text-white"
                >
                  2026 Business Excellence Awards nominees
                </a>
              </li>
              <li>
                <a
                  href="https://mapleridgenews.com/2026/03/09/ridge-meadows-chambers-honours-excellent-businesses-at-2026-awards-night/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2 hover:text-white"
                >
                  2026 Maple Ridge Awards winners
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-x-3 md:gap-y-7 mt-20 md:mt-24 justify-items-center items-start md:max-w-[920px] md:mx-auto">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={`relative w-full max-w-[430px] px-[30px] pt-[50px] pb-[50px] h-[380px] transition-transform ${
                award.variant === 'blue' 
                  ? 'bg-secondary text-white' 
                  : 'bg-white text-primary'
              } ${index < 2 ? 'md:-translate-x-4' : 'md:translate-x-4'}`}
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
                  className="font-display font-semibold mb-4 whitespace-pre-line leading-snug uppercase text-[18px] md:text-[19px]"
                >
                  {award.title}
                </h3>
                
                {/* Divider Line */}
                <div className={`w-full h-[1px] mb-4 ${
                  award.variant === 'blue' ? 'bg-white/30' : 'bg-primary/30'
                }`} />

                <ul className="space-y-2 text-left">
                  {award.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className={`mt-2 w-1 h-1 rounded-full flex-shrink-0 ${
                        award.variant === 'blue' ? 'bg-white' : 'bg-primary'
                      }`} />
                      <span className={`text-sm md:text-[16px] leading-relaxed ${
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
