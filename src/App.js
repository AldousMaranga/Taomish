import React from 'react';
import './App.css';
import Landing from './Components/Landing';
import Work from './Components/Work';
import Team from './Components/Team';
import Careers from './Components/Careers';
import Company from './Components/Company';
import Contact from './Components/Contact'
import Navigation from './Components/Navigation'
import Projects from './Components/Projects';
import Technology from './Components/Technology';
import Jobs from './Components/Jobs';
import Morals from './Components/Morals';

function App() {
  return (
    <div>

      <Navigation />
      <div className='box-cont'>
        <Landing />
        <Work />
        <Projects />
        <Technology />
        <Team />
        <Careers />
        <Jobs />
        <Company />
        <Morals />
        <Contact />
      </div>


    </div>
  );
}

export default App;
