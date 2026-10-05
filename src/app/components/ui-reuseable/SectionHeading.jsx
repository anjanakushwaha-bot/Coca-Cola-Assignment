export default function SectionHeading({
  eyebrow,
  title,
  desc,
  align = 'center', 
  theme = 'dark-text',
  className = '',
}) {
  const isCenter = align === 'center';
  const isLight = theme === 'light-text';

  return (
    <div
      className={`w-full flex flex-col ${
        isCenter ? 'items-center text-center' : 'items-start text-left'
      } ${className}`}
    >
      {eyebrow && (
        <span
          className={`[font-family:var(--font-heading)] text-[10px] leading-[18px] tracking-[1.4px] lg:text-[12px] lg:leading-[24px] lg:tracking-[1.68px] uppercase block font-normal mb-1 sm:mb-2 ${
            isLight ? 'text-[#C3C3C3]' : 'text-[#5C5C5C]'
          }`}
        >
          {eyebrow}
        </span>
      )}

      {title && (
        <h2
          className={`text-[24px] sm:text-[32px] lg:text-[40px] leading-[130%] lg:leading-[140%] font-normal tracking-tight ${
            isLight ? 'text-white' : 'text-black'
          } ${isCenter ? 'max-w-[700px]' : ''}`}
        >
          {title}
        </h2>
      )}

      {desc && (
        <p
          className={`text-[14px] lg:text-[16px] leading-[22.4px] lg:leading-[160%] font-normal mt-[10px] lg:mt-[12px] ${
            isLight ? 'text-[#E5E5E5]' : 'text-[#343434]'
          } ${isCenter ? 'max-w-[340px] sm:max-w-[540px] lg:max-w-[620px]' : 'max-w-[440px]'}`}
        >
          {desc}
        </p>
      )}
    </div>
  );
}