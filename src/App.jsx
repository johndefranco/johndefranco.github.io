import React from 'react';
import Intro from './components/Intro';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact';

function App() {

  return (
    <div className = "App">
        <Intro />
        <About />
        <Portfolio />
        <Contact />
    </div>
  )
}

export default App
