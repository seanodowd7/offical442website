import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { href: "/#services", label: "Services" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-navy-800 bg-navy-900 py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-12 pb-12 md:grid-cols-3 border-b border-navy-800">
          {/* Brand */}
          <div>
            <Image
              src="/images/logo.png"
              alt="442 Marketing"
              width={56}
              height={56}
              className="mb-5 h-14 w-auto object-contain"
            />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-[#8896B0]">
              Turning bars into soccer destinations before the 2026 World Cup.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="mb-6 text-xs uppercase tracking-[0.2em] text-[#F2F2EE]">
              Navigate
            </p>
            <ul className="space-y-3">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-[#8896B0] transition-colors hover:text-[#F2F2EE]"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social + Contact */}
          <div>
            <p className="mb-6 text-xs uppercase tracking-[0.2em] text-[#F2F2EE]">
              Follow Us
            </p>
            <div className="flex gap-6">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/fourfourtwomarketing/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-[#8896B0] transition-colors hover:text-[#F2F2EE]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
                </svg>
              </a>
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/4-4-2-marketing/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-[#8896B0] transition-colors hover:text-[#F2F2EE]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
            <div className="mt-8">
              <p className="mb-3 text-xs uppercase tracking-[0.2em] text-[#F2F2EE]">
                Contact
              </p>
              <a
                href="mailto:fourfourtwo.sales@gmail.com"
                className="text-sm text-[#8896B0] transition-colors hover:text-[#F2F2EE]"
              >
                fourfourtwo.sales@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-3 pt-8 md:flex-row">
          <p className="text-xs text-[#8896B0]">
            &copy; 2026 4-4-2 Marketing. All rights reserved.
          </p>
          <p className="text-xs text-[#8896B0]">Built for bars. Built for soccer.</p>
        </div>
      </div>
    </footer>
  );
}
