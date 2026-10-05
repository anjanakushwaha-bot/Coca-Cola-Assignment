'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import Image from 'next/image';
import SectionHeading from './ui-reuseable/SectionHeading';
import Button from './ui-reuseable/Button';
import ProgressBar from './ui-reuseable/ProgressBar';

const cards = [
  {
    title: 'Annual Report',
    desc: 'A closer look at our performance, progress and priorities',
    img: '/Reach-1.png',
    href: '',
  },
  {
    title: 'Financial Results',
    desc: 'Quarterly numbers and key highlights from every period',
    img: '/reach-2.jpeg',
    href: '',
  },
  {
    title: 'Investor Presentations',
    desc: 'Decks and briefings shared with the investor community',
    img: '/reach-3.jpeg',
    href: '',
  },
  {
    title: 'Corporate Announcements',
    desc: 'Official updates, filings and disclosures in one place',
    img: '/reach-4.jpeg',
    href: '',
  },
  {
    title: 'Governance',
    desc: 'Our board, policies and the way we run the business',
    img: '/reach-5.jpeg',
    href: '',
  },
];

export default function Investors() {
  const [active, setActive] = useState(0);
  const cardRefs = useRef([]);
  const textRefs = useRef([]);
  const progressRef = useRef(null);

  const handleHover = (index) => {
    if (window.innerWidth < 1024 || active === index) return;
    setActive(index);

    cards.forEach((_, i) => {
      const card = cardRefs.current[i];
      const text = textRefs.current[i];
      if (!card) return;

      const isCurrent = i === index;

      gsap.to(card, {
        flexGrow: isCurrent ? 3.2 : 1,
        duration: 0.5,
        ease: 'power2.out',
      });

      if (text) {
        if (isCurrent) {
          gsap.fromTo(
            text,
            { opacity: 0, y: 10 },
            { opacity: 1, y: 0, duration: 0.35, delay: 0.15, ease: 'power2.out' }
          );
        } else {
          gsap.to(text, { opacity: 0, y: 8, duration: 0.2, ease: 'power1.out' });
        }
      }
    });
  };

  const handleMobileScroll = (e) => {
    const el = e.currentTarget;
    const maxScroll = el.scrollWidth - el.clientWidth;
    if (maxScroll <= 0 || !progressRef.current) return;

    const progress = el.scrollLeft / maxScroll;
    const barWidth = 20 + progress * 80;
    progressRef.current.style.width = `${barWidth}%`;
  };

  return (
    <section className="w-full bg-white select-none">
      <div className="w-full bg-black rounded-t-[32px] sm:rounded-t-[40px] lg:rounded-t-[48px] py-[60px] lg:py-20 lg:px-6 min-[1368px]:px-0 overflow-hidden">
        <div className="max-w-[1320px] mx-auto px-5 lg:px-0">
          <SectionHeading
            align="center"
            theme="light-text"
            eyebrow="For Investors"
            title="Stay Close to Our Story"
            desc="The latest financial information, updates and key resources, all in one place"
          />

          <div
            onScroll={handleMobileScroll}
            className="mt-10 lg:mt-[54px] flex gap-5 overflow-x-auto lg:overflow-visible snap-x snap-mandatory scroll-pl-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:h-[372px] lg:items-center"
          >
            {cards.map((item, i) => (
              <Link
                key={item.title}
                href={item.href}
                ref={(el) => (cardRefs.current[i] = el)}
                onMouseEnter={() => handleHover(i)}
                style={{ flexGrow: i === 0 ? 3.2 : 1 }}
                className="relative shrink-0 w-[253px] h-[308px] rounded-[12px] overflow-hidden snap-start bg-[#1a1a1a] outline-none focus-visible:ring-2 focus-visible:ring-white lg:w-auto lg:basis-0 lg:shrink lg:min-w-0 lg:h-[372px] lg:rounded-[20px] group"
              >
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_35.24%,rgba(0,0,0,0.9)_90.96%)] pointer-events-none" />

                <div className="absolute inset-x-0 bottom-0 p-4 lg:p-5 flex items-end justify-between gap-4">
                  <div className="min-w-0">
                    <h3 className="truncate text-white text-[14px] leading-[1.6] lg:text-[16px] font-normal">
                      {item.title}
                    </h3>
                    <div
                      ref={(el) => (textRefs.current[i] = el)}
                      className={`${i === 0 ? 'opacity-100' : 'lg:opacity-0'}`}
                    >
                      <p className="mt-[6px] text-[#E5E5E5] text-[12px] leading-[1.6] lg:text-[14px] lg:w-[300px] font-normal">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  <span
                    className={`w-8 h-8 lg:w-10 lg:h-10 rounded-md bg-white text-black flex items-center justify-center shrink-0 transition-opacity duration-300 ${
                      active === i ? 'opacity-100' : 'lg:opacity-0'
                    }`}
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="7" y1="17" x2="17" y2="7" />
                      <polyline points="7 7 17 7 17 17" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <ProgressBar
            progressRef={progressRef}
            initialWidth={`${100 / cards.length}%`}
            className="mt-6 lg:hidden"
          />

          <div className="flex justify-center mt-10 lg:mt-[54px]">
            <Button href="#investors" variant="white">
              Explore Investors
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}