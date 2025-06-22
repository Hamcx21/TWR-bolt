import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Products from './components/Products';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-black min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Products />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;