'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionHeading from './ui-reuseable/SectionHeading';
import Button from './ui-reuseable/Button';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const assets = [
  {
    id: 'item-1',
    src: '/object-1.png',
   
  },
  {
    id: 'item-2',
    src: '/Object.png',
  },
  {
    id: 'item-3',
    src: '/object-3.png',
  },
];

export default function TheBiggerPicture() {
  const triggerRef = useRef(null);
  const pinRef = useRef(null);
  const trackRef = useRef(null);
  const item3Ref = useRef(null);
  const truckRef = useRef(null);

  useEffect(() => {
    if (!triggerRef.current || !pinRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerRef.current,
          pin: pinRef.current,
          start: 'top top',
          end: '+=200%',
          scrub: 1,
          anticipatePin: 1,
          pinSpacing: true,
        },
      });
      tl.to(
        trackRef.current,
        {
          x: '-480px',
          ease: 'none',
          duration: 2,
        },
        0
      );
      tl.fromTo(
        truckRef.current,
        { x: '100%' },
        { x: '0%', ease: 'power1.out', duration: 1.4 },
        0.3
      );
      tl.to(
        item3Ref.current,
        {
          x: 260,
          scale: 0.85,
          opacity: 0,
          duration: 1.1,
          ease: 'power1.in',
        },
        1.3
      );
    }, triggerRef);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section ref={triggerRef} className="relative w-full bg-white select-none">
      <div
        ref={pinRef}
        className="w-full h-screen flex flex-col justify-between overflow-hidden" >
        <div className="w-full max-w-[1320px] mx-auto pt-10 sm:pt-14 px-5 sm:px-8 lg:px-6 text-center z-20">
          <SectionHeading
            align="center"
            eyebrow="THE BIGGER PICTURE"
            title={
              <>
                This is Hindustan <br /> Coca-Cola Holdings
              </>
            }
            desc="Hindustan Coca-Cola Holdings (HCCH) is the parent company of Hindustan Coca-Cola Beverages (HCCB), the largest Coca-Cola bottler in India"
          />

          <div className="mt-5 flex justify-center">
            <Button href="#discover" variant="black">
              Discover HCCH
            </Button>
          </div>
        </div>
        <div className="relative w-full h-[280px] sm:h-[340px] lg:h-[400px] flex items-end overflow-hidden">
          <div className="absolute inset-x-0 bottom-0 h-[80px] sm:h-[100px] lg:h-[115px] z-10 pointer-events-none flex flex-col justify-end">
            <div className="w-full h-[12px] sm:h-[14px] bg-[#d1d5db] border-y border-[#9ca3af] flex items-center overflow-hidden">
              <div className="w-full h-[3px] bg-[#9ca3af]/40" />
            </div>
            <div className="w-full h-[22px] sm:h-[26px] bg-gradient-to-b from-[#e5e7eb] via-[#d1d5db] to-[#9ca3af] border-b border-[#6b7280] shadow-sm flex items-center justify-around px-8">
              <div className="w-2 h-2 rounded-full bg-[#9ca3af]" />
              <div className="w-2 h-2 rounded-full bg-[#9ca3af]" />
              <div className="w-2 h-2 rounded-full bg-[#9ca3af]" />
              <div className="w-2 h-2 rounded-full bg-[#9ca3af]" />
            </div>
            <div className="w-full h-[46px] sm:h-[60px] lg:h-[75px] flex justify-around px-12 sm:px-24">
              <div className="w-[18px] sm:w-[22px] h-full bg-[#9ca3af] border-x border-[#6b7280] flex flex-col justify-end items-center">
                <div className="w-[28px] sm:w-[34px] h-[6px] bg-[#4b5563] rounded-t-sm" />
              </div>
              <div className="w-[18px] sm:w-[22px] h-full bg-[#9ca3af] border-x border-[#6b7280] flex flex-col justify-end items-center">
                <div className="w-[28px] sm:w-[34px] h-[6px] bg-[#4b5563] rounded-t-sm" />
              </div>
              <div className="w-[18px] sm:w-[22px] h-full bg-[#9ca3af] border-x border-[#6b7280] flex flex-col justify-end items-center">
                <div className="w-[28px] sm:w-[34px] h-[6px] bg-[#4b5563] rounded-t-sm" />
              </div>
              <div className="w-[18px] sm:w-[22px] h-full bg-[#9ca3af] border-x border-[#6b7280] flex flex-col justify-end items-center">
                <div className="w-[28px] sm:w-[34px] h-[6px] bg-[#4b5563] rounded-t-sm" />
              </div>
            </div>
          </div>

          <div
            ref={trackRef}
            className="absolute bottom-[68px] sm:bottom-[86px] lg:bottom-[101px] left-0 flex items-end gap-16 sm:gap-24 pl-[10vw] z-15 will-change-transform"
          >
            {assets.map((item, index) => (
              <div
                key={item.id}
                ref={index === 2 ? item3Ref : null}
                className="relative w-[130px] sm:w-[170px] lg:w-[220px] h-[110px] sm:h-[150px] lg:h-[190px] shrink-0"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-contain object-bottom"
                />
              </div>
            ))}
          </div>

          <div
            ref={truckRef}
            className="absolute right-0 bottom-0 w-[360px] sm:w-[520px] lg:w-[700px] h-[200px] sm:h-[280px] lg:h-[350px] z-25 pointer-events-none will-change-transform"
          >
            <Image
              src="/Truck.png"
              alt="Coca-Cola Truck"
              fill
              className="object-contain object-bottom"
              priority
            />
          </div>

        </div>
      </div>
    </section>
  );
}