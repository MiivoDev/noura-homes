import { motion } from 'framer-motion';

const steps = [
  {
    number: "01",
    title: "DISCOVERY & VISION",
    description: "The foundation of your home begins with understanding your lifestyle. In our initial consultations, we sit down to discuss your goals, aesthetic preferences, and the practical needs of your family. We evaluate your lot (or help you find one), assess the site requirements, and establish a clear, realistic budget and timeline. This ensures we are perfectly aligned before a single line is drawn.",
    image: "/process/discovery-vision.png"
  },
  {
    number: "02",
    title: "DESIGN & PERMITTING",
    description: "Our architectural partners translate your vision into detailed blueprints. We handle all necessary permits and approvals, navigating local regulations to ensure a smooth transition from concept to construction.",
    image: "/process/design-permitting.png"
  },
  {
    number: "03",
    title: "CRAFTSMANSHIP & CONSTRUCTION",
    description: "With meticulous attention to detail, our master builders bring your home to life. We use premium materials and proven techniques, maintaining open communication throughout the entire building process.",
    image: "/process/craftsmanship-construction.png"
  },
  {
    number: "04",
    title: "WELCOME HOME & BEYOND",
    description: "Our architectural partners translate your vision into detailed blueprints. We handle all necessary permits and approvals, navigating local regulations to ensure a smooth transition from concept to construction.",
    image: "/process/welcome-home-beyond.png"
  }
];

export default function Process() {
  return (
    <section className="py-12 md:py-20 bg-[#FDFBF7]">
      <div className="max-w-[1600px] mx-auto px-5 lg:px-16">
        <div className="max-w-[850px] mx-auto text-center mb-10 md:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[28px] md:text-[40px] lg:text-[48px] font-display text-primary leading-[1.2] tracking-[-0.48px] mb-4"
          >
            Our Proven Process
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-primary text-[14px] md:text-[16px] leading-[1.5]"
          >
            Creating a custom luxury home is a significant achievement, and the process should be rewarding. We prioritize transparency, eliminate uncertainty, and reduce construction stress. Our team handles logistics, navigates regulations, and manages daily tasks, so you can concentrate on bringing your family's vision to life.
          </motion.p>
        </div>

        <div className="flex flex-col gap-6 md:gap-10 max-w-[1178px] mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-[49px]"
            >
              <div className="w-full md:w-[394px] h-[190px] md:h-[230px] overflow-hidden flex-shrink-0">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="w-full md:w-[735px] min-h-[190px] md:min-h-[230px] flex flex-col justify-start gap-4 md:gap-5">
                <div className="flex items-center uppercase">
                  <span className="text-secondary text-[48px] md:text-[64px] leading-[1.1] tracking-[-2px] md:tracking-[-3.84px] font-normal min-w-[56px] md:min-w-[70px]">
                    {step.number}
                  </span>
                  <h3 className="text-[#1e2e50] text-[20px] md:text-[24px] leading-[1.4] md:leading-[1.5] font-semibold ml-3 md:ml-5">
                    {step.title}
                  </h3>
                </div>

                <p className="text-primary text-[14px] md:text-[16px] leading-[1.5]">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
