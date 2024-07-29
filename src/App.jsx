import './App.css';
import React from 'react';

function App() {
  return (
    <div>
      <section>
        <h1><b>Christopher Josephs</b></h1>
        <div id="links">
          <a href="#MyWork">My Work</a>
          <a href="#ContactMe">Contact Me</a>
          <a href="Resume">Resume</a>
        </div>
      </section>
      <section id="AboutMe">
        <h2><u>About Me</u></h2>
        <p id="bio">
          My name is Christopher Josephs, a junior developer originally from Brooklyn, NY but currently living in Harrisburg, PA. I have experience in full stack
          development. I have experience in utilizing HTML, CSS, JavaScript, MongoDB, React, and PostgreSQL. I am interested in working with small businesses and freelance work.
        </p>
        <p>Click on the links above for more information!</p>
        <img id="self" src="./9E051D28-D067-46E4-A4C0-AED9EC2B8286.jpg" alt="Picture of Christopher Josephs" />
      </section>
    </div>
  );
}



export default App;

