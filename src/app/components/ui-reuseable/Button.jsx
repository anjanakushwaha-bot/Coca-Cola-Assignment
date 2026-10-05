import Link from 'next/link';

export default function Button({
  href,
  children,
  variant = 'black',
  className = '',
  onClick,
  ...props
}) {
  const baseStyles =
    "font-heading inline-flex items-center justify-center rounded-[8px] text-[14px] leading-[22.4px] lg:text-[16px] lg:leading-[160%] font-normal transition-colors px-6 py-[10px] lg:px-7 lg:py-[12px] select-none";

  const variants = {
    black: 'bg-black text-white hover:bg-neutral-800',
    white: 'bg-white text-black hover:bg-neutral-200',
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClasses} onClick={onClick} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} onClick={onClick} {...props}>
      {children}
    </button>
  );
}