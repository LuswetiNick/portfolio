import { projects } from "@/dummy-data";
import Image from "next/image";
import { PinContainer } from "../ui/3d-pin";

const RecentProjects = () => {
  return (
    <section id="projects" className="mb-24">
      <h1 className="text-3xl font-bold sm:text-2xl text-center mb-8">
        My Projects<span className="text-primary animate-pulse">.</span>
      </h1>
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              className="lg:mi-h-[30rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw] "
              key={project.id}
            >
              <PinContainer
                title={project.link}
                href={project.link}
                className=""
              >
                <div className="relative flex flex-col items-center justify-center sm:w-[350px] w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh]">
                  {/* <Image
                    src={project.img}
                    alt={project.title}
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  /> */}
                  <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
                </div>
                <div className="my-4 w-full space-y-3">
                  <h2 className="font-bold text-lg md:text-xl">
                    {project.title}
                  </h2>
                  <p className="text-muted-foreground font-normal text-sm line-clamp-2">
                    {project.des}
                  </p>
                </div>
                <div className="w-full flex items-center justify-between">
                  <div className="flex items-center">
                    {project.iconLists.map((icon, index) => (
                      <div
                        key={index}
                        className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                        style={{
                          transform: `translateX(-${5 * index + 2}px)`,
                        }}
                      >
                        <Image src={icon} alt="icon5" fill className="p-2" />
                      </div>
                    ))}
                  </div>
                </div>
              </PinContainer>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default RecentProjects;
