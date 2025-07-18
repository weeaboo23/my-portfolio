import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Resume from "@/components/Resume";
import Certificates from "@/components/sections/Certificates";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";
import BackToTop from "./components/BackToTop";


function App() {
  return (
    <>
      <Hero />
      <Projects />
      <Skills />
      <Resume />
      <Certificates />
      <Contact />
      <BackToTop />
      <Footer />
    </>
  );
}
export default App;