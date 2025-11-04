import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import Doctors from './components/Doctors';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-inter antialiased bg-white text-slate-900">
      <Hero />
      <Services />
      <Doctors />
      <Footer />
    </div>
  );
}

export default App;
