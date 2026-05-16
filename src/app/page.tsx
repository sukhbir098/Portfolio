import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col selection:bg-indigo-500/30 selection:text-indigo-200">
      <Hero />
      <TechStack />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}
