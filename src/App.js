import './App.css';

import React from 'react'
import { Link, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Personas from './Personas';
import Responsive from './Responsive';
import Development from './Development';
import IterativeDesign from './IterativeDesign';

function App() {

  return (

    <div className="App">
      <Routes>
        <Route path="/" element={
          <>
            <a id="top"></a>
            <NavBar />
            <AppHeader title="Spin User Assesment" subtitle="Personas & Storyboard" />
            <Personas />
            <a href='/#' className="HomeButton">
              Return To Home</a>
          </>
        } />
      </Routes>
    </div>

  )
}

function AppHeader(props) {
  if (props.title == "home") {
    return (
      <div className="App-header">
        <div className='header-text'>
          Hey there, I'm sleepycow228!
          <br />
          <div className='header-sub'>
            {"Welcome to my UI/UX Portfolio :)"}
          </div>
        </div>
      </div>
    )
  }
  else {
    return (
      <div className="App-header">
        <div className='header-text'>
          {props.title}
          <div className='header-sub'>
            {props.subtitle}
          </div>
        </div>
      </div>
    )
  }
}

function NavBar() {
  return (
    <div className='NavBar' id='NavBar'>
      <nav>
        <Link to="/" className='NavBarElement'> Home</Link>
        <a className='NavBarElement' href="/csci1300-portfolio/#AboutMe"> About Me</a>
      </nav>
    </div>
  )
}

export default App;
