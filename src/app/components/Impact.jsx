'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import Image from 'next/image';

const slides = [
  {
    tag: 'HOW WE OPERATE',
    title: 'Better for Business Better for Tomorrow',
    desc: 'We focus on using water responsibly, reducing plastic, improving energy efficiency and building businesses ready for the long term',
    ctaText: 'See Impact',
    ctaLink: '',
    bg: '/windmills-on-the-background-of-forests-and-fields-2023-11-27-04-48-56-utc.png',
    stats: [
      { val: '100%', label: 'water positive' },
      { val: '1.5°C', label: 'emissions reduction\ntrajectory by 2035' },
      { val: '70–75%', label: 'of bottles and cans\ncollected by 2035' },
    ],
  },
  {
    tag: 'PROJECT SHINE',
    title: 'Making a Difference in the Communities',
    desc: 'Through Project SHINE, we work with communities across India to help create change that continues to make a difference',
    ctaText: 'Learn More',
    ctaLink: '',
    bg: '/reach-2.jpeg',
    stats: [
      { val: '₹20+ Cr', label: 'Invested in community\ninitiatives in FY 2025-26' },
      { val: '10 States', label: 'Covered under across India' },
      { val: '12+ lakh', label: 'Total direct\nbeneficiaries reached' },
    ],
  },
];

export default function Impact() {
  const [index, setIndex] = useState(0);
  const busy = useRef(false);

  const textWrap = useRef(null);
  const statsWrap = useRef(null);

  const nextSlide = () => {
    if (busy.current) return;
    busy.current = true;

    const next = (index + 1) % slides.length;

    const tl = gsap.timeline({
      onComplete: () => {
        setIndex(next);
        gsap.fromTo(
          [textWrap.current, statsWrap.current],
          { y: 24, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.35, ease: 'power2.out', clearProps: 'all' }
        );
        busy.current = false;
      },
    });

    tl.to([textWrap.current, statsWrap.current], {
      y: -24,
      opacity: 0,
      duration: 0.28,
      ease: 'power2.in',
    });
  };

  const item = slides[index];

  return (
    <section
      onClick={nextSlide}
      className="relative w-full min-h-[640px] lg:h-[820px] flex items-center lg:items-end justify-center py-[60px] lg:py-0 lg:pb-[60px] px-4 sm:px-6 lg:px-12 select-none cursor-pointer overflow-hidden"
    >
      {slides.map((s, i) => (
        <div
          key={i}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 pointer-events-none ${
            i === index ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url(${s.bg})` }}
        />
      ))}
      <div className="absolute inset-0 bg-black/15 pointer-events-none" />

      <div className="relative z-10 w-full max-w-[400px] lg:max-w-[1240px] min-h-[480px] lg:h-[440px] rounded-[24px] lg:rounded-[32px] shadow-2xl overflow-hidden flex flex-col lg:flex-row items-stretch bg-white lg:bg-transparent">
        
        <Image
          src="/coco-cola bottle.png"
          alt="Coca-Cola Frame Mask"
          fill
          className="hidden lg:block object-fill z-0 pointer-events-none select-none"
        />

        <div className="relative z-10 flex-1 flex flex-col justify-between lg:justify-center p-6 sm:p-8 lg:py-8 xl:py-10 lg:pl-[310px] min-[1150px]:pl-[350px] xl:pl-[360px] lg:pr-6 xl:pr-8">
          <div ref={textWrap}>
            <span className="font-heading text-[10px] leading-[18px] tracking-[1.4px] lg:text-[11px] xl:text-[12px] lg:leading-[20px] xl:leading-[22px] tracking-[1.68px] text-[#5C5C5C] uppercase block mb-1">
              {item.tag}
            </span>

            <h2 className="text-[24px] leading-[32px] lg:text-[28px] lg:leading-[36px] min-[1150px]:text-[32px] min-[1150px]:leading-[38px] xl:text-[38px] xl:leading-[120%] text-black font-normal tracking-tight max-w-[480px]">
              {item.title}
            </h2>

            <p className="text-[14px] leading-[22px] lg:text-[13.5px] lg:leading-[20px] xl:text-[15px] xl:leading-[24px] text-[#343434] mt-2 max-w-[440px]">
              {item.desc}
            </p>

            <div className="grid grid-cols-2 gap-x-4 gap-y-4 my-6 lg:hidden">
              {item.stats.map((st, i) => (
                <div key={i} className="flex flex-col">
                  <span className="font-heading text-[24px] leading-[36px] text-black">
                    {st.val}
                  </span>
                  <span className="text-[12px] leading-[19.2px] text-[#343434]">
                    {st.label}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-0 lg:mt-8">
              <Link
                href={item.ctaLink}
                onClick={(e) => e.stopPropagation()}
                className="font-heading inline-flex items-center justify-center px-6 py-[10px] lg:px-7 lg:py-[12px] rounded-[8px] bg-black text-white text-[14px] leading-[22.4px] lg:text-[15px] xl:text-[16px] hover:bg-neutral-800 transition-colors"
              >
                {item.ctaText}
              </Link>
            </div>
          </div>
        </div>

        <div className="relative z-10 hidden lg:block w-[260px] xl:w-[309px] shrink-0 bg-[#0B0B0B] rounded-r-[32px]">
          <div ref={statsWrap} className="h-full flex flex-col justify-center py-[30px] lg:py-[37px] pl-6 xl:pl-[50px] pr-5 xl:pr-[58px] gap-6 xl:gap-7">
            {item.stats.map((st, i) => (
              <div key={i} className="flex flex-col">
                <span className="font-heading text-[28px] xl:text-[36px] font-normal leading-[120%] text-white">
                  {st.val}
                </span>
                <span className="text-[12.5px] xl:text-[14px] leading-[140%] text-[#E5E5E5] whitespace-pre-line mt-1">
                  {st.label}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}