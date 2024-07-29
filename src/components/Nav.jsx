import { Link } from 'react-router-dom';
import React from 'react';


function Nav() {
    return (
        <nav>
        <div id="links">
          <Link to="/">About Me</Link>
          <Link to="/my-work">My Work</Link>
          <Link to="/contact-me">Contact Me</Link>
          <Link to="/resume">Resume</Link>
        </div>
      </nav>
    );
  }

  export default Nav;