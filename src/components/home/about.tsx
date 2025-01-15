import { HoverBorderGradient } from "../ui/hover-border-gradient";
import { MapPin } from "lucide-react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { aboutMe } from "@/dummy-data";
// import { techStack } from "@/dummy-data";

const About = () => {
  const techStack = [
    { text: "React", icon: "react.svg" },
    { text: "TypeScript", icon: "/typescript.svg" },
    { text: "Tailwind", icon: "/tailwindcss.svg" },
    { text: "Next.js", icon: "/nextjs.svg" },
    { text: "Node.js", icon: "/nodejs.svg" },
    { text: "PostgreSQL", icon: "/postgres.svg" },
    { text: "MongoDB", icon: "/mongodb.svg" },
  ];
  return (
    <section id="about" className="mb-24">
      <div className="mx-auto max-w-screen-xl p-4 sm:px-6 lg:px-8">
        <h3 className="text-center text-3xl font-semibold sm:text-4xl mb-8">
          About<span className="text-primary animate-pulse">.</span>
        </h3>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8 mt-0 md:mt-14">
          <div>
            <div className="max-w-lg md:max-w-none">
              <HoverBorderGradient
                as="button"
                containerClassName="rounded-full"
                className="flex items-center text-xs"
              >
                <MapPin className="mr-2 h-3 w-3 animate-pulse" />
                <span>Nairobi, Kenya.</span>
              </HoverBorderGradient>

              <p className="mt-4">
                Hi, I&apos;m Nick Lusweti, a passionate Full-Stack Web Developer
                who specializes in developing modern, responsive, and
                user-friendly web applications. I enjoy in resolving complex
                challenges and transforming concepts into functional, meaningful
                digital experiences.
              </p>
              <p className="mt-4">
                I recently graduated with a degree in Software Development, and
                I&apos;ve worked on diverse projects, including SaaS platforms,
                eCommerce sites, and real-time applications.
              </p>

              <div className="mt-8">
                <p className="text-sm text-muted-foreground mb-4 font-semibold">
                  Tech Stack
                </p>
                <div className="overflow-hidden">
                  <InfiniteMovingCards
                    items={[...techStack, ...techStack]}
                    direction="left"
                    speed="normal"
                  />
                </div>
              </div>
            </div>
          </div>

          <div>
            <img src={aboutMe.img} className="rounded" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
