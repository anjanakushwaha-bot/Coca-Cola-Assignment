import Image from 'next/image';

export default function TheBiggerPicture() {
  return (
    <section className="w-full bg-white pt-10 sm:pt-16 lg:pt-24 pb-0 min-h-[100dvh] flex flex-col justify-between overflow-hidden select-none">
      <div className="w-full max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-6 min-[1368px]:px-[60px] flex flex-col items-center text-center">
        <span className="[font-family:var(--font-heading)] text-[10px] leading-[18px] tracking-[1.4px] lg:text-[12px] lg:leading-[24px] lg:tracking-[1.68px] text-[#5C5C5C] uppercase block font-normal text-center">
          The Bigger Picture
        </span>

        <h2 className="text-[24px] sm:text-[32px] lg:text-[40px] leading-[130%] lg:leading-[140%] text-[#000000] font-normal text-center max-w-[700px] mt-2 sm:mt-3">
          This is Hindustan <br /> Coca-Cola Holdings
        </h2>

        <p className="text-[14px] lg:text-[16px] leading-[22.4px] lg:leading-[160%] text-[#343434] font-normal text-center max-w-[340px] sm:max-w-[540px] lg:max-w-[620px] mt-[10px] lg:mt-[12px]">
          We are part of the story behind some of India&apos;s most loved beverages and the moments they are enjoyed in. Together with our network of people and partners, we help make those moments a little more refreshing
        </p>
      </div>

      <div className="relative w-full mt-auto overflow-hidden flex items-end justify-center">
        <div className="relative w-full h-[120px] sm:h-[180px] md:h-[240px] lg:h-[320px] xl:h-[380px]">
          <Image
            src="/conveyor-belt.png"
            alt="Hindustan Coca-Cola Production Conveyor Belt"
            fill
            sizes="100vw"
            priority
            className="object-cover object-bottom"
          />
        </div>
      </div>
    </section>
  );
}