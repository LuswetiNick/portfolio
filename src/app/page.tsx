import Hero from "@/components/home/hero";
import RecentProjects from "@/components/recent-projects";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { HomeIcon } from "lucide-react";

const Home = () => {
  return (
    <main className="relative bg-background flex justify-center items-center flex-col overflow-hidden">
      <FloatingNav
        navItems={[{ name: "Home", link: "/", icon: <HomeIcon /> }]}
      />
      <Hero />
      <RecentProjects />
    </main>
  );
};
export default Home;
