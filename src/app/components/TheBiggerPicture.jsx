import Image from 'next/image';
import SectionHeading from './ui-reuseable/SectionHeading';

export default function TheBiggerPicture() {
  return (
    <section className="w-full bg-white pt-10 sm:pt-16 lg:pt-24 pb-0 min-h-[100dvh] flex flex-col justify-between overflow-hidden select-none">
      <div className="w-full max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-6 min-[1368px]:px-[60px]">
        <SectionHeading
          eyebrow="The Bigger Picture"
          title={<>This is Hindustan <br /> Coca-Cola Holdings</>}
          desc="We are part of the story behind some of India's most loved beverages and the moments they are enjoyed in. Together with our network of people and partners, we help make those moments a little more refreshing"
        />
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