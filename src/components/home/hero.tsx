import { HoverBorderGradient } from "../ui/hover-border-gradient";
import { Spotlight } from "../ui/Spotlight";
import { TextGenerateEffect } from "../ui/text-generate-effect";

const Hero = () => {
  const words =
    "Building Modern Web Experiences with Precision and Creativity.";
  return (
    <section
      id="home"
      className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-background antialiased bg-grid-white/[0.02] relative overflow-hidden"
    >
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="relative z-10 max-w-screen-xl mx-auto px-4 py-8 md:px-8 flex flex-col items-center justify-center">
        <HoverBorderGradient as="button" containerClassName="rounded-full">
          <span>Hello👋, I&apos;m Nick</span>
        </HoverBorderGradient>
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
    </section>
  );
};
export default Hero;
