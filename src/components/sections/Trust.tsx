import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const bgImage = 'https://www.figma.com/api/mcp/asset/b5189e3f-7d5e-4eec-abb0-c2f26ef1f402';

function Counter({ from, to, duration = 2, suffix = "" }: { from: number, to: number, duration?: number, suffix?: string }) {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      let animationFrame: number;

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = (timestamp - startTime) / (duration * 1000);

        if (progress < 1) {
          setCount(Math.floor(from + (to - from) * progress));
          animationFrame = requestAnimationFrame(animate);
        } else {
          setCount(to);
        }
      };

      animationFrame = requestAnimationFrame(animate);

      return () => cancelAnimationFrame(animationFrame);
    }
  }, [isInView, from, to, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Trust() {
  return (
    <section className="relative bg-background overflow-hidden">
      {/* Background image + white overlay */}
      <div className="absolute inset-0 opacity-75">
        <img
          src={bgImage}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[rgba(255,255,255,0.75)]" />
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-8 lg:px-16 min-h-[740px]">
        <div className="py-[56px] lg:py-[72px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-[47px]"
          >
            <h2 className="text-[48px] font-display text-secondary leading-[1.2] tracking-[-0.48px]">
              A Tradition of Excellence You Can Trust
            </h2>
            <p className="text-[16px] leading-[1.5] text-primary lg:max-w-[623px]">
              For over three decades, Noura Homes has set the standard for luxury custom
              building across the Lower Mainland. Our journey began with a single vision: to
              create homes of exceptional quality that stand the test of time. Today, that
              legacy is carried forward by our multi-generational family team, ensuring a
              deep-rooted commitment to every project. We understand that a custom home is
              the ultimate family legacy, and we treat your dream with the same care and
              respect as our own.
            </p>
          </motion.div>

          <div className="mt-[140px] lg:mt-[174px] grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
            <div className="flex flex-col items-start">
              <div className="text-[100px] font-display text-secondary leading-[1.4] tracking-[-1px]">
                <Counter from={0} to={30} suffix="+" />
              </div>
              <div className="mt-3 h-px w-full max-w-[344px] bg-secondary/55" />
              <p className="text-[24px] leading-[1.5] text-primary whitespace-nowrap">
                Years of Legacy Experience
              </p>
            </div>

            <div className="flex flex-col items-start">
              <div className="text-[100px] font-display text-secondary leading-[1.4] tracking-[-1px]">
                <Counter from={0} to={12} suffix="+" />
              </div>
              <div className="mt-3 h-px w-full max-w-[344px] bg-secondary/55" />
              <p className="text-[24px] leading-[1.5] text-primary whitespace-nowrap">
                Communities Served
              </p>
            </div>

            <div className="flex flex-col items-start">
              <div className="text-[100px] font-display text-secondary leading-[1.4] tracking-[-1px]">
                <Counter from={0} to={1000} suffix="+" />
              </div>
              <div className="mt-3 h-px w-full max-w-[344px] bg-secondary/55" />
              <p className="text-[24px] leading-[1.5] text-primary whitespace-nowrap">
                Custom Homes Built
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
