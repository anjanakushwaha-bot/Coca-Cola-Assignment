'use client';

import { useRef } from 'react';
import Link from 'next/link';

const articles = [
  {
    id: 'news-1',
    date: '18 Dec',
    readTime: '5 min read',
    title: 'Hindustan Coca-Cola Beverages Certified as a Top Employer in India for 2026 by Top Employer...',
    img: '/reach-2.jpeg',
    href: '',
  },
  {
    id: 'news-2',
    date: '18 Dec',
    readTime: '5 min read',
    title: 'Hindustan Coca-Cola Beverages Hands Over Push Carts and Infrastructure Support to Women SHGs...',
    img: '/reach-4.jpeg',
    href: '',
  },
  {
    id: 'news-3',
    date: '18 Dec',
    readTime: '5 min read',
    title: 'HCCB Launches First-of-its-Kind High-Speed Kinley Water Production Line at Avinya Facility in Telangana',
    img: '/reach-3.jpeg',
    href: '',
  },
];

export default function WhatsNew() {
  const progressRef = useRef(null);

  const handleScroll = (e) => {
    const el = e.currentTarget;
    const maxScroll = el.scrollWidth - el.clientWidth;
    if (maxScroll <= 0 || !progressRef.current) return;

    const progress = Math.min(Math.max(el.scrollLeft / maxScroll, 0), 1);
    const barWidth = 33.33 + progress * 66.67;
    progressRef.current.style.width = `${barWidth}%`;
  };

  return (
    <section className="w-full bg-white pt-[60px] pb-16 lg:py-24 px-5 select-none overflow-hidden">
      <div className="w-full max-w-[1320px] mx-auto">
        
        <div className="flex items-end justify-between mb-8 lg:mb-[49px]">
          <div>
            <span className="font-heading text-[10px] leading-[18px] tracking-[1.4px] lg:text-[12px] lg:leading-[24px] lg:tracking-[1.68px] text-[#5C5C5C] uppercase block mb-1">
              WHAT&apos;S NEW
            </span>
            <h2 className="text-[24px] leading-[36px] lg:text-[40px] lg:leading-[140%] text-black font-normal tracking-tight">
              Fresh From Our World
            </h2>
          </div>

          <Link
            href="/news"
            className="hidden lg:inline-flex font-heading items-center justify-center px-6 py-[10px] lg:px-7 lg:py-[12px] rounded-[8px] bg-black text-white text-[14px] leading-[20px] lg:text-[16px] hover:bg-neutral-800 transition-colors shrink-0"
          >
            Read More
          </Link>
        </div>

        <div
          onScroll={handleScroll}
          className="flex lg:grid lg:grid-cols-3 gap-5 lg:gap-6 xl:gap-[28px] overflow-x-auto lg:overflow-visible snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden pb-4 lg:pb-0 w-full"
        >
          {articles.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              aria-label={item.title}
              className="group flex flex-col shrink-0 w-[253px] lg:w-full snap-start cursor-pointer"
            >
              <div className="relative w-[253px] h-[170px] lg:w-full lg:h-[220px] xl:h-[260px] rounded-[16px] lg:rounded-[20px] overflow-hidden bg-neutral-100 shrink-0">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute top-0 right-0 w-11 h-11 bg-white rounded-bl-[16px] flex items-center justify-center shadow-sm opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-black transform transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  >
                    <path
                      d="M1.5 12.5L12.5 1.5M12.5 1.5H4M12.5 1.5V10"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>

              <div className="flex items-center gap-2 text-[12px] leading-[19.2px] lg:text-[14px] lg:leading-[160%] text-[#5C5C5C] font-normal mt-[18px]">
                <span>{item.date}</span>
                <span>•</span>
                <span>{item.readTime}</span>
              </div>

              <p className="text-[14px] leading-[22.4px] lg:text-[16px] lg:leading-[160%] text-black font-normal mt-2 line-clamp-3 lg:line-clamp-2 group-hover:text-neutral-700 transition-colors">
                {item.title}
              </p>
            </Link>
          ))}
        </div>

        <div className="w-full h-[2px] bg-[#E5E5E5] rounded-full overflow-hidden mt-6 lg:hidden">
          <div
            ref={progressRef}
            className="h-full bg-[#FC620F] rounded-full transition-all duration-150 ease-out"
            style={{ width: '33.33%' }}
          />
        </div>

        <div className="mt-8 lg:hidden">
          <Link
            href="/news"
            className="font-heading inline-flex items-center justify-center px-7 py-[12px] rounded-[8px] bg-black text-white text-[14px] leading-[20px] hover:bg-neutral-800 transition-colors"
          >
            Read More
          </Link>
        </div>

      </div>
    </section>
  );
}