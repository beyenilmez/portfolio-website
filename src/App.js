import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contributions from './components/Contributions';
import Skills from './components/Skills';
import Contact from './components/Contact';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';

function App() {
  return (
    <React.Fragment>
      <Header />

      <main className='mx-[3%]'>
        <About />
        <Projects />
        <Contributions />
        <Skills />
        <Contact />
      </main>

      <ScrollToTop />
      <Footer />
    </React.Fragment>
  );
}

export default App;
