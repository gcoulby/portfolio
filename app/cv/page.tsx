import Nav from "@/components/nav";
import About from "@/components/about";
import Education from "@/components/education";
import Experience from "@/components/experience";
import Publications from "@/components/publications";
import Skills from "@/components/skills";
import Interests from "@/components/interests";
import Awards from "@/components/awards";

export default function Home() {
  return (
    <>
      <div className="modular">
        <Nav />
        <About />
        <hr className="m-0"></hr>
        <Education />
        <hr className="m-0"></hr>
        <Experience />
        <hr className="m-0"></hr>
        <Publications />
        <hr className="m-0"></hr>
        <Skills />
        <hr className="m-0"></hr>
        <Interests />
        <hr className="m-0"></hr>
        <Awards />
      </div>
    </>
  );
}
