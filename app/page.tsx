import About from "@/app/components/About";
import Contact from "@/app/components/Contact";
import Divider from "@/app/components/Divider";
import Experience from "@/app/components/Experience";
import Inter from "@/app/components/Inter";
import Projects from "@/app/components/Projects";
import Resume from "@/app/components/Resume";
import Skills from "@/app/components/Skills";

export default function Home() {
  return (
    <main
      id="home"
      className="flex gap-[180px] flex-col px-3 justify-center items-center grainy-bg"
    >
      <Inter />
      <Divider />
      <About />
      <Divider />
      <Projects />
      <Divider />
      <Skills />
      <Divider />
      <Experience />
      <Divider />
      <Resume />
      <Divider />
      <Contact />
    </main>
  );
}
