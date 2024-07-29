import react from 'react';
import { Footer } from '../components/Footer';
import '/Users/cjosephs93/Desktop/Bootcamp/challenges/React Portfolio/React-Portfolio/src/App.css';




function MyWork() {
    return (
      <section id="MyWork">
        <h2>My Work</h2>
        <div id="weather">
          <h1>Weather App</h1>
          <p>
            Weather App is a web application that allows users to search for the weather in any city. The app uses
            the OpenWeatherMap API to get the weather data.
          </p>
          <a href="https://codecj93.github.io/Weather-Dashboard/" target="_blank" rel="noopener noreferrer">
            <img id="weatherpic" src="./Screenshot_2024-07-07_at_5.04.47_PM.png" alt="Weather app" />
          </a>
        </div>
        <div id="payroll">
          <h1>Payroll Manager</h1>
          <p>
            Payroll Manager is a web application that allows users to view and manage employee payroll data.
          </p>
          <a href="https://codecj93.github.io/Payroll-Manager/" target="_blank" rel="noopener noreferrer">
            <img id="payrollpic" src="./Screenshot_2024-07-07_at_5.27.35_PM.png" alt="Payroll Manager" />
          </a>
        </div>
      </section>
       <Footer />
       </>;
     
      
    );
  }
  
  export default MyWork;