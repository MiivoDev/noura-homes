import { Mail, MapPin, Phone } from 'lucide-react';

const heroImage = '/image-52.jpg?v=20260422h';
const bottomBannerImage = '/contact-banner-459-3.png?v=20260422a';

const referralOptions = [
  'Google',
  'Facebook',
  'REW Website',
  'Noura Homes Team',
  'Friend / Family',
  "I'm a Real Estate Agent",
  'Ridge Meadows Chamber Member',
  'Tri-Cities Chamber Member',
  'Signage',
  'Social Media',
  'Walk/Drive By',
  'Website',
  'Other',
];

const projectOptions = [
  'Marble Hill',
  'Emerald Ridge',
  'Thomas Luxury Fourplex',
  'Haversley Luxury Duplex',
  'Sapphire Living',
  'Others',
];

export default function ContactPage() {
  return (
    <div className="bg-background">
      <header className="relative h-[803px] overflow-hidden bg-[#fffef7]">
        <img src={heroImage} alt="Contact hero" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 mx-auto h-full max-w-[1600px] px-8 lg:px-16">
          <div className="absolute right-8 top-1/2 -translate-y-1/2 text-right text-white lg:right-[calc(50%-457px)]">
            <h1 className="font-display text-[28px] md:text-[40px] lg:text-[48px] leading-[1.2] tracking-[-0.48px]">
              Let&apos;s Bring Your Vision to Life
            </h1>
          </div>
        </div>
      </header>

      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-[1600px] mx-auto px-8 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-16">
          <div className="text-primary">
            <h2 className="font-display text-[28px] md:text-[40px] lg:text-[48px] leading-[1.2] tracking-[-0.48px]">Send Us a Message</h2>
            <p className="mt-6 text-[16px] leading-[1.5]">
              Your dream home begins with a conversation. Whether you&apos;re ready to design a custom home, exploring renovation
              options, or simply want to learn more about our process, our team is here to help.
            </p>
            <p className="mt-4 text-[16px] leading-[1.5]">
              At Noura Homes, every relationship begins with listening. Share your goals, your lifestyle, and your vision. Our
              dedicated team will connect with you personally to discuss how we can make your dream home a reality.
            </p>
          </div>

          <div className="text-primary">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label htmlFor="firstName" className="block text-[14px] font-medium mb-2">
                  First Name*
                </label>
                <input id="firstName" type="text" className="w-full h-11 border border-primary/30 px-3 text-[15px]" />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-[14px] font-medium mb-2">
                  Last Name*
                </label>
                <input id="lastName" type="text" className="w-full h-11 border border-primary/30 px-3 text-[15px]" />
              </div>
              <div>
                <label htmlFor="email" className="block text-[14px] font-medium mb-2">
                  Email*
                </label>
                <input id="email" type="email" className="w-full h-11 border border-primary/30 px-3 text-[15px]" />
              </div>
              <div>
                <label htmlFor="contactNumber" className="block text-[14px] font-medium mb-2">
                  Contact Number
                </label>
                <input id="contactNumber" type="tel" className="w-full h-11 border border-primary/30 px-3 text-[15px]" />
              </div>
              <div className="md:col-span-2">
                <label htmlFor="organization" className="block text-[14px] font-medium mb-2">
                  Organization (if any)
                </label>
                <input id="organization" type="text" className="w-full h-11 border border-primary/30 px-3 text-[15px]" />
              </div>
              <div className="md:col-span-2">
                <label htmlFor="message" className="block text-[14px] font-medium mb-2">
                  Message (Include if you&apos;re looking for a custom home, spec home, or renovation)
                </label>
                <textarea id="message" rows={5} className="w-full border border-primary/30 px-3 py-2 text-[15px] resize-y" />
              </div>
              <div>
                <label htmlFor="howHeard" className="block text-[14px] font-medium mb-2">
                  How did you hear about us?
                </label>
                <select id="howHeard" className="w-full h-11 border border-primary/30 px-3 text-[15px] bg-white">
                  <option>Select One</option>
                  {referralOptions.map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="projectInterested" className="block text-[14px] font-medium mb-2">
                  Specific Project Interested In*
                </label>
                <select id="projectInterested" className="w-full h-11 border border-primary/30 px-3 text-[15px] bg-white">
                  <option>Select One</option>
                  {projectOptions.map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="antiSpam" className="block text-[14px] font-medium mb-2">
                  What is 4 + 7? (This Is to Stop Spammers)*
                </label>
                <input id="antiSpam" type="text" className="w-full h-11 border border-primary/30 px-3 text-[15px]" />
              </div>
              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center border border-primary bg-primary px-8 h-12 text-[16px] font-medium text-white hover:bg-primary/90 transition-colors"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-[1600px] mx-auto px-8 lg:px-16 text-primary">
          <h2 className="text-center font-display text-[28px] md:text-[40px] lg:text-[48px] leading-[1.2] tracking-[-0.48px]">
            Experience the Noura Difference
          </h2>
          <p className="mx-auto mt-5 max-w-[980px] text-center text-[16px] leading-[1.5]">
            Step inside a Noura home and experience craftsmanship, comfort, and attention to detail like no other. Reach out to us
            to schedule a private tour or visit during open house hours and see how timeless design meets modern living.
          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            <article className="bg-[#f2f7ff] p-6 lg:p-7 text-primary">
              <div className="flex items-center gap-2">
                <div className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#4e6eb3] text-white">
                  <Phone className="h-4 w-4" strokeWidth={1.8} />
                </div>
                <h3 className="text-[28px] font-display leading-[1.2]">Phone</h3>
              </div>
              <p className="mt-4 text-[16px] leading-[1.5]">Sales - (604) 200-3524</p>
              <p className="mt-1 text-[16px] leading-[1.5]">Office - (778) 285-0503</p>
            </article>

            <article className="bg-[#f2f7ff] p-6 lg:p-7 text-primary">
              <div className="flex items-center gap-2">
                <div className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#4e6eb3] text-white">
                  <Mail className="h-4 w-4" strokeWidth={1.8} />
                </div>
                <h3 className="text-[28px] font-display leading-[1.2]">Email</h3>
              </div>
              <p className="mt-4 text-[16px] leading-[1.5]">Sales</p>
              <a href="mailto:sales@nourahomes.com" className="text-[16px] leading-[1.5] underline">sales@nourahomes.com</a>
              <p className="mt-2 text-[16px] leading-[1.5]">Office</p>
              <a href="mailto:info@nourahomes.com" className="text-[16px] leading-[1.5] underline">info@nourahomes.com</a>
            </article>

            <article className="bg-[#f2f7ff] p-6 lg:p-7 text-primary">
              <div className="flex items-center gap-2">
                <div className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#4e6eb3] text-white">
                  <MapPin className="h-4 w-4" strokeWidth={1.8} />
                </div>
                <h3 className="text-[28px] font-display leading-[1.2]">Location</h3>
              </div>
              <a
                href="https://goo.gl/maps/7xGbVKmpyiVszKQm9"
                target="_blank"
                rel="noreferrer"
                className="mt-4 block text-[16px] leading-[1.5] underline"
              >
                Suite 201 - 3387 David Ave, Coquitlam, BC V3E 0K4
              </a>
            </article>

            <article className="bg-[#f2f7ff] p-6 lg:p-7 text-primary">
              <div className="flex items-center gap-2">
                <div className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#4e6eb3] text-white">
                  <Phone className="h-4 w-4" strokeWidth={1.8} />
                </div>
                <h3 className="text-[28px] font-display leading-[1.2]">Office Hours</h3>
              </div>
              <p className="mt-4 text-[16px] leading-[1.5]">Monday to Friday</p>
              <p className="mt-1 text-[16px] leading-[1.5]">9:00 AM to 4:30 PM</p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-white pb-16 lg:pb-20">
        <div className="max-w-[1600px] mx-auto px-8 lg:px-16">
          <div className="overflow-hidden rounded-[6px] border border-[#d7deea] shadow-[0_6px_18px_rgba(28,42,67,0.12)]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48841.32161515624!2d-122.74795769172023!3d49.27669196224823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548678acb5620733%3A0x535f12b8a7ff24fd!2sNoura%20Homes%20-%20Quality%20Custom%20Homes%20in%20Burke%20Mountain!5e0!3m2!1sen!2sin!4v1775210569942!5m2!1sen!2sin"
              width="100%"
              height="520"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Noura Homes location"
            />
          </div>
        </div>
      </section>

      <section className="relative h-[713px] overflow-hidden bg-[#fffef7]">
        <img src={bottomBannerImage} alt="Experience the Noura Difference" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 mx-auto flex h-full max-w-[1600px] items-center justify-center px-8 lg:px-16">
          <div className="text-center text-white">
            <h2 className="font-display text-[28px] md:text-[40px] lg:text-[48px] leading-[1.2] tracking-[-0.48px]">
              Experience the Noura Difference
            </h2>
            <p className="mx-auto mt-2 max-w-[1058px] text-[16px] leading-[1.5]">
              Step inside a Noura home and experience craftsmanship, comfort, and attention to detail like no other. Reach out to us
              to schedule a private tour or visit during open house hours and see how timeless design meets modern living.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
