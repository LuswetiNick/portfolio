import { Spotlight } from "../ui/Spotlight";
import { TextGenerateEffect } from "../ui/text-generate-effect";

const Hero = () => {
  const words =
    "Building Modern Web Experiences with Precision and Creativity.";
  return (
    <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-background antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="relative z-10 max-w-screen-xl mx-auto px-4 py-8 md:px-8 flex flex-col items-center justify-center">
        <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-4 font-semibold text-xl text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 cursor-none">
          Hello👋, I&apos;m Nick
        </button>
        <div className="max-w-4xl">
          <TextGenerateEffect
            className=" font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50"
            words={words}
          />
        </div>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
          I&apos;m a Full-Stack Developer crafting dynamic, user-friendly, and
          impactful web applications. Let&apos;s bring your ideas to life
        </p>
      </div>
    </div>
  );
};
export default Hero;
