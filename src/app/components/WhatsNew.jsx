'use client';

import { useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SectionHeading from './ui-reuseable/SectionHeading';
import Button from './ui-reuseable/Button';
import ProgressBar from './ui-reuseable/ProgressBar';

const articles = [
  {
    id: 'news-1',
    date: '18 Dec',
    readTime: '5 min read',
    title:
      'Hindustan Coca-Cola Beverages Certified as a Top Employer in India for 2026 by Top Employers Institute',
    img: '/reach-2.jpeg',
    href: '',
  },
  {
    id: 'news-2',
    date: '18 Dec',
    readTime: '5 min read',
    title:
      'Hindustan Coca-Cola Beverages Hands Over Push Carts and Infrastructure Support to Women SHGs, Strengthening Women-Led Micr...',
    img: '/reach-4.jpeg',
    href: '',
  },
  {
    id: 'news-3',
    date: '18 Dec',
    readTime: '5 min read',
    title:
      'HCCB Launches First-of-its-Kind High-Speed Kinley Water Production Line at Avinya Facility in Telangana',
    img: '/reach-3.jpeg',
    href: '',
  },
  {
    id: 'news-4',
    date: '18 Dec',
    readTime: '5 min read',
    title:
      'Hindustan Coca-Cola Beverages Certified as a Top Employer in India for 2026 by Top Employers Institute',
    img: '/reach-2.jpeg',
    href: '',
  },
  {
    id: 'news-5',
    date: '18 Dec',
    readTime: '5 min read',
    title:
      'Hindustan Coca-Cola Beverages Hands Over Push Carts and Infrastructure Support to Women SHGs, Strengthening Women-Led Micr...',
    img: '/reach-4.jpeg',
    href: '',
  },
];

export default function WhatsNew() {
  const scrollRef = useRef(null);
  const progressRef = useRef(null);
  const totalCards = articles.length;
  const initialWidth = Math.max(15, 100 / totalCards);

  const updateProgress = (el) => {
    const maxScroll = el.scrollWidth - el.clientWidth;
    if (maxScroll <= 0 || !progressRef.current) return;

    const progress = Math.min(Math.max(el.scrollLeft / maxScroll, 0), 1);
    const barWidth = initialWidth + progress * (100 - initialWidth);
    progressRef.current.style.width = `${barWidth}%`;
  };

  const handleScroll = (e) => {
    updateProgress(e.currentTarget);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let targetScroll = el.scrollLeft;
    let animFrame = null;

    const smoothLoop = () => {
      const maxScroll = el.scrollWidth - el.clientWidth;
      targetScroll = Math.max(0, Math.min(targetScroll, maxScroll));
      const diff = targetScroll - el.scrollLeft;

      if (Math.abs(diff) > 0.5) {
        el.scrollLeft += diff * 0.12;
        animFrame = requestAnimationFrame(smoothLoop);
      } else {
        el.scrollLeft = targetScroll;
        cancelAnimationFrame(animFrame);
        animFrame = null;
      }
    };

    const handleWheel = (e) => {
      const maxScroll = el.scrollWidth - el.clientWidth;
      if (maxScroll <= 0) return;

      const isAtStart = el.scrollLeft <= 0 && e.deltaY < 0;
      const isAtEnd = el.scrollLeft >= maxScroll - 2 && e.deltaY > 0;

      if (!isAtStart && !isAtEnd) {
        e.preventDefault();
        targetScroll += e.deltaY * 1.5;
        if (!animFrame) {
          animFrame = requestAnimationFrame(smoothLoop);
        }
      }
    };

    let isDown = false;
    let startX = 0;
    let scrollStart = 0;

    const handleMouseDown = (e) => {
      isDown = true;
      startX = e.pageX - el.offsetLeft;
      scrollStart = el.scrollLeft;
      targetScroll = el.scrollLeft;
      if (animFrame) cancelAnimationFrame(animFrame);
    };

    const handleMouseLeaveOrUp = () => {
      isDown = false;
    };

    const handleMouseMove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - el.offsetLeft;
      const walk = (x - startX) * 1.3;
      el.scrollLeft = scrollStart - walk;
      targetScroll = el.scrollLeft;
    };

    el.addEventListener('wheel', handleWheel, { passive: false });
    el.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseLeaveOrUp);
    el.addEventListener('mousemove', handleMouseMove);

    return () => {
      if (animFrame) cancelAnimationFrame(animFrame);
      el.removeEventListener('wheel', handleWheel);
      el.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseLeaveOrUp);
      el.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="w-full bg-white pt-[60px] pb-16 lg:py-24 px-5 select-none overflow-hidden">
      <div className="w-full max-w-[1320px] mx-auto">
        <div className="flex items-end justify-between mb-8 lg:mb-[49px]">
          <SectionHeading
            align="left"
            eyebrow="WHAT'S NEW"
            title="Fresh From Our World"
          />

          <Button
            href="/news"
            variant="black"
            className="hidden lg:inline-flex shrink-0"
          >
            Read More
          </Button>
        </div>

        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-5 lg:gap-6 xl:gap-[28px] overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden pb-4 w-full cursor-grab active:cursor-grabbing will-change-scroll"
        >
          {articles.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              aria-label={item.title}
              draggable={false}
              className="group flex flex-col shrink-0 w-[253px] lg:w-[390px] xl:w-[410px] cursor-pointer"
            >
              <div className="relative w-full h-[170px] lg:h-[220px] xl:h-[260px] rounded-[16px] lg:rounded-[20px] overflow-hidden bg-neutral-100 shrink-0 pointer-events-none">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
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

        <ProgressBar
          progressRef={progressRef}
          initialWidth={`${initialWidth}%`}
          className="mt-6 lg:mt-10"
        />

        <div className="mt-8 lg:hidden">
          <Button href="/news" variant="black">
            Read More
          </Button>
        </div>
      </div>
    </section>
  );
}