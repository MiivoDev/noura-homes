import { Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-primary text-white overflow-hidden">
      <div className="relative z-10 max-w-[1600px] mx-auto px-8 lg:px-16 pt-16 lg:pt-[64px] pb-56 md:pb-72 lg:pb-[340px]">
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-between lg:items-start">
          <div className="flex flex-col gap-5">
            <div className="h-14 md:h-16 w-[250px] md:w-[300px]">
              <img
                src="/Logo.png"
                alt="Noura Homes logo"
                className="h-full w-auto max-w-full object-contain"
              />
            </div>

            <div className="flex items-center gap-2.5">
              <a
                href="#"
                aria-label="Facebook"
                className="inline-flex size-8 shrink-0 items-center justify-center rounded-full overflow-hidden hover:opacity-[0.85] transition-opacity"
              >
                <img src="/Facebook.svg" alt="" aria-hidden="true" className="size-full object-contain" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="inline-flex size-8 shrink-0 items-center justify-center rounded-full overflow-hidden hover:opacity-[0.85] transition-opacity"
              >
                <img src="/Google.svg" alt="" aria-hidden="true" className="size-full object-contain" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="inline-flex size-8 shrink-0 items-center justify-center rounded-full overflow-hidden hover:opacity-[0.85] transition-opacity"
              >
                <img src="/Linkedin.svg" alt="" aria-hidden="true" className="size-full object-contain" />
              </a>
              <a
                href="#"
                aria-label="X"
                className="inline-flex size-8 shrink-0 items-center justify-center rounded-full overflow-hidden hover:opacity-[0.85] transition-opacity"
              >
                <img src="/Twitter.svg" alt="" aria-hidden="true" className="size-full object-contain" />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="inline-flex size-8 shrink-0 items-center justify-center rounded-full overflow-hidden hover:opacity-[0.85] transition-opacity"
              >
                <img src="/Youtube.svg" alt="" aria-hidden="true" className="size-full object-contain" />
              </a>
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:flex lg:gap-[59px]">
            <div className="w-full max-w-[200px]">
              <p className="text-base font-medium mb-3">About</p>
              <nav className="space-y-2.5 text-sm leading-6 text-white/80">
                <a href="/our-story" className="block hover:text-white transition-colors">Our Story</a>
                <a href="/sustainable-building-practices" className="block hover:text-white transition-colors">Sustainable Building</a>
                <a href="/about/awards-associations-community" className="block hover:text-white transition-colors">Awards & Associations</a>
                <a href="/faq" className="block hover:text-white transition-colors">FAQ</a>
              </nav>
            </div>

            <div className="w-full max-w-[200px]">
              <p className="text-base font-medium mb-3">Services</p>
              <nav className="space-y-2.5 text-sm leading-6 text-white/80">
                <a href="/services/luxury-custom-homes" className="block hover:text-white transition-colors">Luxury Custom Homes</a>
                <a href="/services/luxury-townhouse" className="block hover:text-white transition-colors">Luxury Townhouse</a>
                <a href="/services/luxury-subdivisions" className="block hover:text-white transition-colors">Luxury Subdivisions</a>
                <a href="/services/house-renovations" className="block hover:text-white transition-colors">House Renovations</a>
                <a href="/services/general-contracting-development-services" className="block hover:text-white transition-colors">General Contracting</a>
                <a href="/services/service-areas" className="block hover:text-white transition-colors">Service Areas</a>
              </nav>
            </div>

            <div className="w-full max-w-[260px]">
              <p className="text-base font-medium mb-3">Contact</p>
              <div className="space-y-3.5 text-sm leading-6 text-white/80">
                <div className="flex items-start gap-1.5">
                  <Phone className="size-4 shrink-0 mt-0.5" strokeWidth={1.6} />
                  <div>
                    <p>Sales: (604) 200-3524</p>
                    <p>Office: (778) 285-0503</p>
                  </div>
                </div>
                <div className="flex items-start gap-1.5">
                  <MapPin className="size-4 shrink-0 mt-0.5" strokeWidth={1.6} />
                  <a
                    href="https://maps.google.com/?q=Suite+201+3387+David+Ave+Coquitlam+BC"
                    target="_blank"
                    rel="noreferrer"
                    className="underline underline-offset-2 hover:text-white transition-colors"
                  >
                    Suite 201 - 3387 David Ave,<br />Coquitlam, BC V3E 0K4
                  </a>
                </div>
                <div className="flex items-center gap-1.5">
                  <Mail className="size-4 shrink-0" strokeWidth={1.6} />
                  <a href="mailto:info@nourahomes.com" className="hover:text-white transition-colors">
                    info@nourahomes.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-[13px] text-sm leading-6 text-white/80 lg:text-right lg:min-w-[105px]">
            <a href="/testimonials" className="block hover:text-white transition-colors">
              Testimonials
            </a>
            <a href="/#contact" className="block hover:text-white transition-colors">
              Contact Us
            </a>
            <a href="#" className="block hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="block hover:text-white transition-colors">
              Terms of Use
            </a>
            <a href="#" className="block hover:text-white transition-colors">
              Cookie Notice
            </a>
          </div>
        </div>
      </div>

      <div className="absolute left-0 right-0 bottom-0 h-[170px] md:h-[230px] lg:h-[278px] pointer-events-none">
        <img
          src="/NOURA.svg"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-top"
        />
      </div>
    </footer>
  );
}
