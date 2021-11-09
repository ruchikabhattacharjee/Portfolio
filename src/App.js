import React from 'react';
import './App.css';
import Home from './components/Home';
import Experience from './components/Experience';
import Background from './components/Background';
import Skills from './components/Skills';
import Projects from './components/Projects';
import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
function App() {
  return (
    <div>
      <Background></Background>
        
           <Home></Home>
          <About></About>
          <Skills></Skills>
          <Experience></Experience>
          <Projects></Projects>
          <Footer></Footer>
      

    </div>
  )
}

export default App;
