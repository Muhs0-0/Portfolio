import Collaboration from "./components/Collaboration";
import CurrentlyImproving from "./components/CurrentlyImproving";
import Direction from "./components/Direction";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <CurrentlyImproving />
        <Direction />
        <Collaboration />
      </main>
      <Footer />
    </>
  );
}

export default App;
