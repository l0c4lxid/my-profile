import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ScrollIndicator from "./components/ScrollIndicator";
import CustomCursor from "./components/CustomCursor";
import { ActiveSectionProvider } from "./components/ActiveSectionProvider";
import MobileAppLayout from "./components/mobile/MobileAppLayout";

export default function Home() {
  return (
    <ActiveSectionProvider>
      <main className="relative min-h-screen overflow-x-hidden">
        <CustomCursor />
        <Navbar />
        <div className="md:hidden">
          <MobileAppLayout />
        </div>
        <div className="hidden md:block">
          <div className="snap-y snap-mandatory">
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Education />
            <Contact />
            <Footer />
          </div>
          <ScrollToTop />
          <ScrollIndicator />
        </div>
      </main>
    </ActiveSectionProvider>
  );
}
