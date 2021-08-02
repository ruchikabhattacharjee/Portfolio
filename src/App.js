import React from 'react';
import './App.css';
import Home from './components/Home';
import Experience from './components/Experience';
import Background from './components/Background';
import Skills from './components/Skills';
import Projects from './components/Projects';
function App() {
  return (
    <div>
     
       <Background></Background> 
      <Home></Home>
      <Experience></Experience>
      <Skills></Skills>
      <Projects></Projects>
    </div>
  )
}

export default App;
