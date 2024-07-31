import react from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '/Users/cjosephs93/Desktop/Bootcamp/challenges/React Portfolio/React-Portfolio/src/App.css';


function Footer() {
    return (
      <footer className="footer">
        <div className="social-icons">
          <a href="https://github.com/codecj93" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/christopher-josephs-mat-bcba-lba-lbs-b9437686//" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </footer>
    );
  }
  
  export default Footer;