import "./index.css";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonals";

function App() {
  return (
    <div className="bg-[#121212] text-white font-sans">
      <NavBar />
      <Hero />
      <Skills />
      <Projects />
      <Testimonials/>
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
