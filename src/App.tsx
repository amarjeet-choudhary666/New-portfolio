
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import StarryBackground from './components/StarryBackground';
import MeteorShower from './components/MeteorShower';
import SolarSystem from './components/SolarSystem';
import './App.css';

function App() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
      <StarryBackground />
      <SolarSystem />
      <MeteorShower />
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;