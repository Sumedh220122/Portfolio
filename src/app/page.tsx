import Header from "../../components/Header";
import Hero from "../../components/Hero";
import About from "../../components/About";
import Experience from "../../components/Experience";

export default function Home() {
  return (
    <div className = "bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory z-0 overflow-scroll">
      
        {/* Header Section */}
        <Header/>

        {/* Hero */}
        <section id = "hero" className="snap-center">
            <Hero/>
        </section>

        {/* About */}
        <section id = "about" className = "snap-center">
            <About/>
        </section>

        {/* Experience */}
        <section id = "experience" className="snap-center">
            <Experience/>
        </section>

    </div>
  );
}
