// src/App.tsx
import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { Experience } from './sections/Experience';
import { Projects } from './sections/Projects';
import { Skills } from './sections/Skills';
import { Footer } from './components/Footer';
import { About } from './sections/About';

function App() {
  return (
    // Agregamos clases Flexbox para asegurar que el footer baje siempre al final
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      
      {/* flex-grow-1 hace que el contenido principal ocupe todo el espacio sobrante */}
      <main className="flex-grow-1">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
      </main>
      
      <Footer /> {/* <-- Lo inyectamos fuera del main */}
    </div>
  );
}

export default App;