// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import './App.css';
import {heading} from './components/heading';
import { introduction } from './components/introduction';
import education from './components/education';
import skill from './components/skill';
import projects from './components/projects';
import Navbar from './components/Navbar';
import sociallinks from './components/sociallinks';
import footer from './components/footer';

function App() {
  return (    
    <>
    {Navbar()}
    <div class='container'>
      
      {heading()}
      <div id='introduction'>{introduction()}</div>
      <div id="sociallinks">{sociallinks()}</div>
      <div id='education'>{education()}</div>
      <div id="skill">{skill()}</div>
      <div id="projects">{projects()}</div>
      <div id="footer">{footer()}</div>

    </div>
    </>
    
  );
}

export default App;

