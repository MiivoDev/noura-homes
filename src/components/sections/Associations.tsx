const associations = [
  "/Logos/Frame 111.png",
  "/Logos/Frame 110 4.36.06 PM.png",
  "/Logos/Frame 109.png",
  "/Logos/Frame 108 4.36.06 PM.png",
];

export default function Associations() {
  return (
    <section className="bg-background py-16 md:py-16 text-center">
      <div className="max-w-[1600px] mx-auto px-8 lg:px-16">
        <h2 className="text-[28px] md:text-[40px] lg:text-[48px] font-display leading-[1.2] tracking-[-0.48px] text-primary mb-8 md:mb-10">
          Proudly Associated With
        </h2>
        <div className="flex flex-nowrap justify-start md:justify-center items-center gap-10 md:gap-16 lg:gap-20 overflow-x-auto no-scrollbar pb-2">
          {associations.map((logo, index) => (
            <img key={index} src={logo} alt="Association Logo" className="h-16 md:h-20 lg:h-24 object-contain flex-shrink-0" />
          ))}
        </div>
      </div>
    </section>
  );
}
