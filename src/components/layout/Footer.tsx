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
            <div className="w-full max-w-[260px]">
              <div className="flex items-center gap-1.5 mb-3">
                <Phone className="size-5 shrink-0" strokeWidth={1.6} />
                <p className="text-base leading-6">Contact</p>
              </div>
              <div className="space-y-3.5 text-base leading-6">
                <p>Sales - (604) 200-3524</p>
                <p>Office - (778) 285-0503</p>
              </div>
            </div>

            <div className="w-full max-w-[260px]">
              <div className="flex items-center gap-1.5 mb-3">
                <MapPin className="size-5 shrink-0" strokeWidth={1.6} />
                <p className="text-base leading-6">Location</p>
              </div>
              <a
                href="https://www.nourahomes.com/pages/contact"
                target="_blank"
                rel="noreferrer"
                className="text-base leading-6 underline underline-offset-2"
              >
                Suite 201 - 3387 David Ave, Coquitlam, BC V3E 0K4
              </a>
            </div>

            <div className="w-full max-w-[260px]">
              <div className="flex items-center gap-1.5 mb-3">
                <Mail className="size-5 shrink-0" strokeWidth={1.6} />
                <p className="text-base leading-6">Mail</p>
              </div>
              <a href="mailto:info@nourahomes.com" className="text-base leading-6">
                info@nourahomes.com
              </a>
            </div>
          </div>

          <div className="space-y-[13px] text-base leading-6 lg:text-right lg:min-w-[105px]">
            <a href="#" className="block">
              Privacy Policy
            </a>
            <a href="#" className="block">
              Terms of Use
            </a>
            <a href="#" className="block">
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
