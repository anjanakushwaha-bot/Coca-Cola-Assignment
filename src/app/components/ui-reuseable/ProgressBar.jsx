export default function ProgressBar({
  progressRef,
  initialWidth = '33.33%',
  className = '',
}) {
  return (
    <div
      className={`w-full h-[2px] bg-[#E5E5E5] rounded-full overflow-hidden ${className}`}
    >
      <div
        ref={progressRef}
        className="h-full bg-[#FC620F] rounded-full transition-all duration-150 ease-out"
        style={{ width: initialWidth }}
      />
    </div>
  );
}