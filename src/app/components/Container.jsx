export default function Container({ children, className = "" }) {
  return (
    <div className={`w-full max-w-[1440px] mx-auto px-4 md:px-8 ${className}`}>
      {children}
    </div>
  );
}