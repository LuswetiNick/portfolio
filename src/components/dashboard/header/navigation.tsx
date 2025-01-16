"use client";

import { Tabs } from "@/components/ui/tabs";
import Home from "../home";
import Projects from "../projects";
import Messages from "../messages";

export function Navigation() {
  const tabs = [
    {
      title: "Home",
      value: "home",
      content: (
        <section className="w-full overflow-hidden relative h-full b shadow-sm border rounded-md bg-background ">
          <Home />
        </section>
      ),
    },
    {
      title: "Projects",
      value: "projects",
      content: (
        <section className="w-full overflow-hidden relative h-full shadow-sm border rounded-md bg-background ">
          <Projects />
        </section>
      ),
    },
    {
      title: "Messages",
      value: "message",
      content: (
        <section className="w-full overflow-hidden relative h-full shadow-sm border rounded-md bg-background ">
          <Messages />
        </section>
      ),
    },
  ];

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative flex flex-col max-w-screen-xl mx-auto px-4 md:px-8 w-full  items-start justify-start mt-8">
      <Tabs tabs={tabs} />
    </div>
  );
}
