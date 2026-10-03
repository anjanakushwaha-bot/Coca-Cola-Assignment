import Link from 'next/link';

export default function Careers() {
  return (
    <section className="w-full bg-white pt-[60px] pb-16 md:py-20 lg:py-24 px-5 select-none">
      <div className="w-full max-w-[480px] md:max-w-[94%] lg:max-w-[1096px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-8 lg:gap-12 xl:gap-[84px]">
        
        <div className="w-full md:w-[48%] lg:w-[540px] xl:w-[590px] h-[240px] sm:h-[300px] md:h-[360px] lg:h-[400px] xl:h-[440px] rounded-[16px] lg:rounded-[20px] overflow-hidden shrink-0">
          <img
            src="/Career.png"
            alt="Careers at Coca-Cola"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-full md:flex-1 xl:w-[422px] flex flex-col items-start gap-6 md:gap-6 lg:gap-8 xl:gap-9">
          <div className="flex flex-col items-start w-full">
            <span className="font-['TCCC-UnityHeadline'] text-[10px] leading-[18px] tracking-[1.4px] md:text-[11px] lg:text-[12px] md:leading-[22px] lg:leading-[24px] tracking-[1.68px] text-[#5C5C5C] uppercase block mb-2">
              Careers
            </span>
            <h2 className="font-['TCCC-UnityHeadline'] text-[24px] leading-[32px] sm:text-[26px] md:text-[28px] md:leading-[36px] lg:text-[34px] xl:text-[40px] lg:leading-[125%] xl:leading-[140%] text-black font-normal tracking-tight">
              Bring Your Energy Make a Difference
            </h2>

            <p className="font-['TCCC-UnityText'] text-[14px] leading-[22px] md:text-[13.5px] md:leading-[20px] lg:text-[15px] xl:text-[16px] lg:leading-[160%] text-[#343434] mt-2 md:mt-3 lg:mt-4 font-normal">
              We&apos;re refreshing India with people who bring fresh ideas, new perspectives and the spirit to make a difference. Come grow with us and help shape what&apos;s next
            </p>
          </div>

          <Link
            href=""
            className="inline-flex items-center justify-center px-6 py-[10px] md:px-6 md:py-[10px] lg:px-[28px] lg:py-[13px] rounded-[8px] bg-black text-white font-['TCCC-UnityHeadline'] text-[14px] leading-[22.4px] lg:text-[16px] lg:leading-[160%] text-center hover:bg-neutral-800 transition-colors"
          >
            Join us
          </Link>
        </div>

      </div>
    </section>
  );
}