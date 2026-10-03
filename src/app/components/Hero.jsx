export default function Hero() {
  return (
    <div className="w-full bg-black">
      <section className="relative w-full h-[820px] md:h-[860px] overflow-hidden rounded-b-[36px] md:rounded-b-[48px] flex items-center justify-center bg-neutral-900">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/Hero Banner.jpg"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        >
          <source src="/Hero Video.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/28 pointer-events-none" />

        <div className="relative z-10 w-full max-w-[760px] px-6 text-center select-none">
          <h1 className="text-white text-[32px] sm:text-[44px] md:text-[56px] font-normal leading-[130%]">
            Refreshing India Today <br />
            Creating Possibilities for Tomorrow
          </h1>
        </div>
      </section>
    </div>
  );
}