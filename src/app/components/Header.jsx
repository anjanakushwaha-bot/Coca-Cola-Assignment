'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: 'About', path: '' },
    { label: 'Sustainability', path: '' },
    { label: 'Investors', path: '' },
    { label: 'Community', path: '' },
    { label: 'Careers', path: '' },
    { label: 'News & Media', path: '' },
  ];

  return (
    <header className="absolute top-4 min-[992px]:top-6 inset-x-0 z-50 px-4 flex justify-center">
      <div className="w-full max-w-[1320px] h-[60px] min-[992px]:h-[72px] rounded-[12px] bg-[#E5E5E5]/90 backdrop-blur-[12.3px] pl-4 sm:pl-5 pr-3 min-[992px]:pr-[10px] flex items-center justify-between shadow-sm relative">
        
        <Link href="/" className="flex items-center shrink-0">
          <div className="w-[165px] h-[27px] min-[992px]:w-[210px] xl:w-[264px] min-[992px]:h-[35px] xl:h-[39px] relative flex items-center">
            <Image
              src="/Desktop Logo.svg"
              alt="Coca-Cola Logo"
              fill
              priority
              className="object-contain object-left"
            />
          </div>
        </Link>

        <div className="nav-desktop flex items-center gap-3.5 xl:gap-[30px]">
          <nav className="flex items-center gap-3 xl:gap-[30px]">
            {links.map((item) => (
              <Link
                key={item.label}
                href={item.path}
                className="font-heading text-[13px] xl:text-[14px] font-semibold text-black whitespace-nowrap hover:opacity-70 transition-opacity"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link
            href="#contact"
            className="font-heading text-[14px] xl:text-[16px] text-white bg-black px-4 xl:px-[28px] py-2.5 xl:py-[13px] rounded-[8px] whitespace-nowrap hover:bg-neutral-800 transition"
          >
            Contact Us
          </Link>
        </div>
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="nav-mobile-btn p-1.5 text-black flex items-center justify-center cursor-pointer"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M4.125 18.375H19.875M4.125 12.375H19.875M4.125 6.375H19.875" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </button>
        {open && (
          <div className="nav-mobile-drawer absolute top-[68px] left-0 w-full bg-[#E5E5E5] rounded-[16px] p-5 shadow-xl border border-neutral-300 flex flex-col gap-2">
            {links.map((item) => (
              <Link
                key={item.label}
                href={item.path}
                onClick={() => setOpen(false)}
                className="font-heading text-[15px] font-semibold text-black py-2.5 border-b border-neutral-300/60"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="#contact"
              onClick={() => setOpen(false)}
              className="font-heading text-[16px] text-white bg-black text-center py-[13px] rounded-[8px] mt-2 w-full"
            >
              Contact Us
            </Link>
          </div>
        )}

      </div>
    </header>
  );
}