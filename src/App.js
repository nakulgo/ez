import React from 'react';
import Cards from './components/Cards';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Newsletter from './components/Newsletter';

function App() {
  return (
    <div>
      <Navbar />
      <Hero></Hero>
      <Cards></Cards>

      <Newsletter/>
      <Footer></Footer>
      
    </div>
  );
}

export default App;