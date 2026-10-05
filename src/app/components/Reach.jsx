'use client';

import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import SectionHeading from './ui-reuseable/SectionHeading';

const slides = [
  {
    num: '29 Years',
    desc: 'Of Refreshing India, Every Day',
    img: '/Reach-1.png',
  },
  {
    num: '17,00,000+',
    desc: 'Retail Partners',
    img: '/reach-2.jpeg',
  },
  {
    num: '2000+',
    desc: 'Distributors',
    img: '/reach-3.jpeg',
  },
  {
    num: '5000+',
    desc: 'Associates',
    img: '/reach-4.jpeg',
  },
  {
    num: '14',
    desc: 'Manufacturing Plants',
    img: '/reach-5.jpeg',
  },
];

const getStep = (items) => {
  if (!items[0] || !items[1]) return 0;
  return items[1].offsetTop - items[0].offsetTop;
};

const isMobile = () => window.matchMedia('(max-width: 1023px)').matches;

const getOpacity = (i, active) => {
  if (i === active) return 1;
  if (isMobile() && i === active + 1) return 0.4;
  return 0.2;
};

export default function Reach() {
  const [index, setIndex] = useState(0);
  const lock = useRef(false);

  const containerRef = useRef(null);
  const listRef = useRef(null);
  const textRefs = useRef([]);

  useEffect(() => {
    const layout = () => {
      const step = getStep(textRefs.current);
      if (listRef.current) gsap.set(listRef.current, { y: -index * step });
      textRefs.current.forEach((el, i) => {
        if (el) gsap.set(el, { opacity: getOpacity(i, index) });
      });
    };

    layout();
    window.addEventListener('resize', layout);
    return () => window.removeEventListener('resize', layout);
  }, [index]);

  const nextSlide = () => {
    if (lock.current) return;

    const next = (index + 1) % slides.length;
    lock.current = true;

    const activeImg = containerRef.current?.querySelector(`[data-slide="${index}"]`);
    const nextImg = containerRef.current?.querySelector(`[data-slide="${next}"]`);
    const step = getStep(textRefs.current);

    const tl = gsap.timeline({
      onComplete: () => {
        setIndex(next);
        lock.current = false;
      },
    });

    if (listRef.current) {
      tl.to(listRef.current, { y: -next * step, duration: 0.8, ease: 'power2.inOut' }, 0);
    }

    textRefs.current.forEach((el, i) => {
      if (el) tl.to(el, { opacity: getOpacity(i, next), duration: 0.35, ease: 'power1.out' }, 0);
    });

    if (activeImg && nextImg) {
      gsap.set(nextImg, { zIndex: 10 });
      gsap.set(activeImg, { zIndex: 5 });

      if (index === 0) {
        tl.to(
          activeImg,
          { scale: 0.94, y: -50, opacity: 0, duration: 0.8, ease: 'power2.inOut' },
          0
        );
      } else {
        tl.to(
          activeImg,
          { yPercent: -100, opacity: 0.2, duration: 0.8, ease: 'power2.inOut' },
          0
        );
      }

      tl.fromTo(
        nextImg,
        { yPercent: 100, y: 0, opacity: 0.5, scale: 1 },
        { yPercent: 0, opacity: 1, duration: 0.8, ease: 'power2.out' },
        0.1
      );
    }
  };

  return (
    <section
      onClick={nextSlide}
      className="w-full bg-black text-white pt-16 pb-20 px-5 sm:px-6 lg:pt-20 lg:pb-28 lg:px-12 select-none cursor-pointer"
    >
      <div className="max-w-[1320px] mx-auto">
        <SectionHeading
          align="left"
          theme="light-text"
          eyebrow="Our Reach"
          title={<>A Lot Goes Into <br className="lg:hidden" /> Reaching Millions</>}
          className="text-center lg:text-left mb-[26px] lg:mb-14"
        />

        <div className="flex flex-col lg:flex-row items-center gap-9 lg:gap-[81px]">
          <div className="w-full lg:flex-1 self-stretch h-[230px] sm:h-[400px] lg:h-[646px]">
            <div
              ref={containerRef}
              className="relative w-full h-full rounded-[16px] lg:rounded-[32px] overflow-hidden bg-[#111111]"
            >
              {slides.map((item, i) => (
                <img
                  key={i}
                  data-slide={i}
                  src={item.img}
                  alt={item.desc}
                  className={`absolute max-w-none w-[611.541px] h-[270.923px] left-[calc(50%-305.77px)] top-[calc(50%-135.46px)] object-cover sm:max-w-full sm:w-full sm:h-full sm:left-0 sm:top-0 ${
                    i === 0 ? 'opacity-100 z-10' : 'opacity-0 z-0'
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="w-full lg:flex-1 h-[242px] lg:h-[646px] overflow-hidden relative px-[15px] lg:px-0">
            <div ref={listRef} className="flex flex-col gap-5 lg:gap-[40px] w-full lg:pt-4">
              {slides.map((item, i) => (
                <div
                  key={i}
                  ref={(el) => (textRefs.current[i] = el)}
                  style={{ opacity: i === 0 ? 1 : 0.2 }}
                  className="flex flex-col justify-center shrink-0 text-center lg:text-left lg:h-[142px]"
                >
                  <div className="font-heading text-[32px] leading-[1.4] lg:text-[72px] lg:leading-none lg:tracking-[-0.02em] font-normal">
                    {item.num}
                  </div>
                  <div className="text-[14px] leading-[1.6] text-[#E5E5E5] lg:text-[16px] lg:leading-normal lg:text-[#A0A0A0] lg:mt-3 font-normal">
                    {item.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}