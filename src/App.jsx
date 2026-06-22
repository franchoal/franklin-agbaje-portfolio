import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import AISection from "./components/AISection";
import Contact from "./components/Contact";

export default function App() {
  return (
    <main className="font-sans text-gray-800 bg-white scroll-smooth">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <AISection />
      <Contact />
    </main>
  );
}