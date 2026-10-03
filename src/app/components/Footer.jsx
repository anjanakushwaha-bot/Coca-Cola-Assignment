import Link from 'next/link';

const footerNav = [
  {
    title: 'About Us',
    defaultOpen: true,
    links: [
      { label: 'Our Company', href: '' },
      { label: 'Our History', href: '' },
      { label: 'Founder-Chairman', href: '' },
      { label: 'Chairman - Managing Director', href: '' },
      { label: 'Products & Brands', href: '' },
      { label: 'Corporate Social Responsibility', href: '' },
      { label: 'Milestones', href: '3' },
      { label: 'Our Impact', href: '' },
      { label: 'Manufacturing Locations', href: '' },
    ],
  },
  {
    title: 'Sustainability',
    links: [
      { label: 'Overview', href: '' },
      { label: 'Sustainability', href: '' },
      { label: 'Decarbonisation', href: '' },
      { label: 'Net Zero Carbon', href: '' },
      { label: 'Health, Safety & Environment', href: '' },
    ],
  },
  {
    title: 'Investors',
    links: [
      { label: 'Financial Reporting', href: '' },
      { label: 'Shares', href: '' },
      { label: 'Shareholders\' Information', href: '' },
      { label: 'Resource Centre', href: '' },
      { label: 'Corporate Governance', href: '' },
      { label: 'Policies', href: '' },
    ],
  },
  {
    title: 'News & Media',
    links: [
      { label: 'News', href: '' },
      { label: 'Press Releases', href: '' },
      { label: 'Events', href: '' },
      { label: 'Resource Center', href: '' },
      { label: 'Media Kit', href: '' },
    ],
  },
  {
    title: 'Careers',
    links: [
      { label: 'Overview', href: '' },
      { label: 'Early Talent', href: '' },
      { label: 'Internship', href: '' },
    ],
    extraLinks: [
      { label: 'Community', href: '' },
      { label: 'Contact Us', href: '' },
    ],
  },
];

export default function Footer() {
  return (
    <footer 
      style={{
        background: 'linear-gradient(145deg, #FFF 50.53%, #D7B959 131.06%)'
      }}
      className="w-full text-black select-none pt-12 lg:pt-16 pb-[60px]"
    >
      <div className="w-full max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-6 min-[1368px]:px-[60px]">
        
        <div className="flex flex-col lg:flex-row items-start pb-12 lg:pb-16 gap-8 xl:gap-10">
          
          <div className="shrink-0 mb-4 lg:mb-0">
            <Link href="/" className="block w-[180px] lg:w-[220px] xl:w-[241px] h-[30px] lg:h-[36px] xl:h-[40px] aspect-[241/40]">
              <img
                src="/Desktop Logo.svg"
                alt="Hindustan Coca-Cola Holdings Ltd."
                className="w-full h-full object-contain object-left"
              />
            </Link>
          </div>

          <div className="hidden lg:grid grid-cols-5 gap-6 xl:gap-8 flex-1 w-full">
            {footerNav.map((col) => (
              <div key={col.title} className="flex flex-col min-w-0">
                <h4 className="font-heading font-semibold text-[14px] leading-[140%] text-black mb-[20px]">
                  {col.title}
                </h4>

                <ul className="flex flex-col gap-2.5">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-[13px] xl:text-[14px] leading-[160%] text-[#5C5C5C] hover:text-black transition-colors block"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}

                  {col.extraLinks?.map((extra) => (
                    <li key={extra.label} className="pt-2">
                      <Link
                        href={extra.href}
                        className="font-heading font-semibold text-[14px] leading-[140%] text-black hover:opacity-75 transition-opacity block"
                      >
                        {extra.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="w-full lg:hidden flex flex-col divide-y divide-black/5">
            {footerNav.map((col) => (
              <details 
                key={col.title} 
                open={col.defaultOpen}
                className="group py-3.5 [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="w-full flex items-center justify-between py-1 text-left font-heading font-semibold text-[14px] leading-[140%] text-black cursor-pointer list-none select-none">
                  <span>{col.title}</span>
                  <span className="text-xl leading-none text-black group-open:hidden">+</span>
                  <span className="text-xl leading-none text-black hidden group-open:inline">−</span>
                </summary>

                <ul className="flex flex-col gap-2.5 pt-3 pb-2 pl-1">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-[14px] leading-[160%] text-[#5C5C5C] hover:text-black block"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </details>
            ))}

            <div className="py-4">
              <Link href="#community" className="font-heading font-semibold text-[14px] leading-[140%] text-black block py-1">
                Community
              </Link>
            </div>
            <div className="py-4">
              <Link href="#contact" className="font-heading font-semibold text-[14px] leading-[140%] text-black block py-1">
                Contact Us
              </Link>
            </div>
          </div>

        </div>

        <div className="w-full h-[1px] bg-black opacity-5" />

        <div className="py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex flex-wrap items-center gap-6 text-[12px] leading-[140%] text-black font-normal">
            <Link href="#privacy" className="hover:opacity-70 transition-opacity">
              Privacy Policy
            </Link>
            <Link href="#terms" className="hover:opacity-70 transition-opacity">
              Terms And Conditions
            </Link>
            <Link href="#disclaimer" className="hover:opacity-70 transition-opacity">
              Disclaimer
            </Link>
          </div>

          <div className="flex items-center gap-5 text-black">
            <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:opacity-70 transition-opacity">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
              </svg>
            </Link>

            <Link href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="hover:opacity-70 transition-opacity">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/>
                <polygon points="10 15 15 12 10 9 10 15" fill="currentColor"/>
              </svg>
            </Link>

            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:opacity-70 transition-opacity">
              <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect width="4" height="12" x="2" y="9"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </Link>

            <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:opacity-70 transition-opacity">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </Link>

            <Link href="https://x.com" target="_blank" rel="noopener noreferrer" aria-label="X" className="hover:opacity-70 transition-opacity">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </Link>
          </div>
        </div>

        <div className="w-full h-[1px] bg-black opacity-5" />

        <div className="pt-6 text-[12px] leading-[140%] text-black font-normal">
          <p>©2026 Hindustan Coca-Cola Holdings Private Limited. All Rights Reserved.</p>
        </div>

      </div>
    </footer>
  );
}