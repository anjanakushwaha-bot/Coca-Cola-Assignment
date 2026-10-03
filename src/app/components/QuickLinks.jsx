'use client';

import { useState } from 'react';
import Link from 'next/link';

const links = [
  { label: 'Sustainability', href: '' },
  { label: 'Community', href: '' },
  { label: 'Leadership', href: '' },
  { label: 'Careers', href: '' },
];

export default function QuickLinks() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="w-full bg-white pt-10 pb-16 lg:py-20 px-5 select-none">
      <div className="w-full max-w-[1320px] mx-auto">
        
        <div className="grid grid-cols-2 justify-items-start sm:justify-items-center gap-x-4 sm:gap-x-8 gap-y-6 px-1 sm:px-4 lg:px-0 lg:flex lg:items-center lg:justify-center lg:gap-[48px]">
          {links.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="group inline-flex items-center gap-2 lg:gap-4 cursor-pointer shrink-0"
            >
              <span className="text-[18px] sm:text-[22px] lg:text-[36px] lg:leading-[140%] text-black font-normal tracking-tight group-hover:text-neutral-700 transition-colors">
                {item.label}
              </span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="w-[18px] h-[18px] lg:w-6 lg:h-6 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              >
                <path
                  d="M18.0002 18.5002V5.5H5"
                  stroke="#FC620F"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5 18.5L18.0002 5.4998"
                  stroke="#FC620F"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-[12px] leading-[154%] text-[#5C5C5C] font-normal">
          <div className="hidden lg:flex flex-col gap-4">
            <p>
              This website may contain statements, estimates or projections that constitute &ldquo;forward-looking statements&rdquo; as defined under U.S. federal securities laws. Generally, the words &ldquo;believe,&rdquo; &ldquo;expect,&rdquo; &ldquo;intend,&rdquo; &ldquo;estimate,&rdquo; &ldquo;anticipate,&rdquo; &ldquo;project,&rdquo; &ldquo;will&rdquo; and similar expressions identify forward-looking statements, which generally are not historical in nature. Forward-looking statements are subject to certain risks and uncertainties that could cause The Coca-Cola Company&apos;s actual results to differ materially from its historical experience and our present expectations or projections. For more information please see the risks discussed in our periodic reports filed with the Securities and Exchange Commission
            </p>
            <p>
              The information provided on this website is for general informational purposes only. While Hindustan Coca-Cola Beverages makes every effort to keep the information accurate and up to date, the content may be changed or updated without prior notice.
            </p>
          </div>
          <div className="lg:hidden">
            <p className="inline">
              This website may contain statements, estimates or projections that constitute &ldquo;forward-looking statements&rdquo; as defined under U.S. federal securities laws. Generally, the words &ldquo;believe,&rdquo; &ldquo;expect,&rdquo; &ldquo;intend,&rdquo; &ldquo;estimate,&rdquo; &ldquo;anticipate,&rdquo; &ldquo;project,&rdquo; &ldquo;will&rdquo; and similar expressions identify forward-looking statements, which generally are not historical in nature. Forward-looking statements are subject to certain risks and uncertainties that could cause The Coca-Cola Company&apos;s actual
              
              {!expanded ? (
                <>
                  <span>... </span>
                  <button
                    type="button"
                    onClick={() => setExpanded(true)}
                    className="underline text-black font-medium cursor-pointer inline-block ml-1"
                  >
                    Read More...
                  </button>
                </>
              ) : (
                <span>
                  {' '}results to differ materially from its historical experience and our present expectations or projections. For more information please see the risks discussed in our periodic reports filed with the Securities and Exchange Commission.
                  <br /><br />
                  The information provided on this website is for general informational purposes only. While Hindustan Coca-Cola Beverages makes every effort to keep the information accurate and up to date, the content may be changed or updated without prior notice.
                </span>
              )}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}