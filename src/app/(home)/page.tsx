import Image from "next/image";

import Navbar from "../../components/navbar";
import HeroSection from "../../components/hero";
import Skills from "../../components/skills";
import Project from "@/src/components/project";
import Experience from "@/src/components/experience";

export default function Home() {
  return (
    // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">

    // </div>
    // <div className="bg-gradient-to-r from-purple-600 to-blue-500 h-screen w-full">
    <section className="py-10 md:py-16">
      <div className="container max-w-screen-xl mx-auto px-4">
        {/* <Navbar /> */}
        <HeroSection />
        <Skills />
        <Project />
        <Experience />
      </div>
    </section>
  );
}
