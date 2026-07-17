import Projects from "./sections/Projects";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Services from "./sections/Services";
import Features from "./sections/Features";


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Services />
      <Projects />
    </>
  );
}

export default App;