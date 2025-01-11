import Contact from "@/components/home/contact";
import Hero from "@/components/home/hero";
import { navItems } from "@/components/home/navbar/nav-items";
import RecentProjects from "@/components/home/recent-projects";
import { FloatingNav } from "@/components/ui/floating-navbar";

const Home = () => {
  return (
    <main className="relative bg-background flex justify-center items-center flex-col overflow-hidden">
      <FloatingNav navItems={navItems} />
      <Hero />
      <RecentProjects />
      <Contact />
    </main>
  );
};
export default Home;
