import Hero from "@/components/home/hero";
import { navItems } from "@/components/home/navbar/nav-items";
import RecentProjects from "@/components/recent-projects";
import { FloatingNav } from "@/components/ui/floating-navbar";

const Home = () => {
  return (
    <main className="relative bg-background flex justify-center items-center flex-col overflow-hidden">
      <FloatingNav navItems={navItems} />
      <Hero />
      <RecentProjects />
    </main>
  );
};
export default Home;
