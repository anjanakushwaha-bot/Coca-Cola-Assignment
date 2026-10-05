import Image from 'next/image';
import SectionHeading from './ui-reuseable/SectionHeading';
import Button from './ui-reuseable/Button';

export default function Careers() {
  return (
    <section className="w-full bg-white pt-[60px] pb-16 md:py-20 lg:py-24 px-5 select-none">
      <div className="w-full max-w-[480px] md:max-w-[94%] lg:max-w-[1096px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-8 lg:gap-12 xl:gap-[84px]">
        
        <div className="relative w-full md:w-[48%] lg:w-[540px] xl:w-[590px] h-[240px] sm:h-[300px] md:h-[360px] lg:h-[400px] xl:h-[440px] rounded-[16px] lg:rounded-[20px] overflow-hidden shrink-0">
          <Image src="/Career.png" alt="Careers at Coca-Cola" fill className="object-cover" />
        </div>

        <div className="w-full md:flex-1 xl:w-[422px] flex flex-col items-start gap-6 md:gap-8">
          <SectionHeading
            align="left"
            eyebrow="Careers"
            title="Bring Your Energy Make a Difference"
            desc="We're refreshing India with people who bring fresh ideas, new perspectives and the spirit to make a difference. Come grow with us and help shape what's next"
          />
          <Button href="/careers">Join us</Button>
        </div>

      </div>
    </section>
  );
}