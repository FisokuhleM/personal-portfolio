import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background selection:bg-accent-blue/20 selection:text-accent-blue font-inter">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
      </main>
      <Footer />
    </div>
  );
}

export default App;
