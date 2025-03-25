import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Statistics from './components/Statistics';
import AboutMe from './components/AboutMe';
import Certificate from './components/Certificate';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';
import SplashCursor from './components/SplashCursor';
import './App.css';

function App() {
  return (
    <>
      <SplashCursor />
      <Header />
      <div id="home">
        <HeroSection />
      </div>
      <div id="about">
        <AboutMe />
      </div>
      <div id="statistics">
        <Statistics />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="Certificate">
        <Certificate />
      </div>

      <Footer />
    </>
  );
}

export default App;