import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Statistics from './components/Statistics';
import AboutMe from './components/AboutMe';
import EducationAchievements from './components/Education';
import Services from './components/Services';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';
import SplashCursor from './components/SplashCursor';
import './App.css';

function App() {
  return (
    <div>
      <SplashCursor />
      <Header />
      <div id="hero">
        <HeroSection />
      </div>
      <div id="education">
        <EducationAchievements />
      </div>
      <div id="about">
        <AboutMe />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="statistics">
        <Statistics />
      </div>



      <Footer />
    </div>
  );
}

export default App;