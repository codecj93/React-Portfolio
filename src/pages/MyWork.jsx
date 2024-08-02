import React from 'react';
import ProjectCard from '../components/ProjectCard';

function MyWork() {

  const projects = [
    {
      title: 'Weather App',
      id:"weather",
      description: 'Weather App is a web application that allows users to search for the weather in any city. The app uses the OpenWeatherMap API to get the weather data.',
      image: './Weather.png',
      link: 'https://codecj93.github.io/Weather-Dashboard/',
    },
    {
      title: 'Payroll Manager',
      id:"payroll",
      description: 'Payroll Manager is a web application that allows users to view and manage employee payroll data.',
      image: './Payroll.png',
      link: 'https://codecj93.github.io/Payroll-Manager/',
    },
  ]

  return (
    <>
      <section id="MyWork">
        <h2>My Work</h2>

        {
          projects.map(project => {
            return (
              <ProjectCard project={project}/>
            )
          })
        }


        {/* <div id="weather">
          <h1>Weather App</h1>
          <p>
            Weather App is a web application that allows users to search for the weather in any city. The app uses
            the OpenWeatherMap API to get the weather data.
          </p>
          <a href="https://codecj93.github.io/Weather-Dashboard/" target="_blank" rel="noopener noreferrer">
            <img id="weatherpic" src="./Weather.png" alt="Weather app" />
          </a>
        </div>
        <div id="payroll">
          <h1>Payroll Manager</h1>
          <p>
            Payroll Manager is a web application that allows users to view and manage employee payroll data.
          </p>
          <a href="https://codecj93.github.io/Payroll-Manager/" target="_blank" rel="noopener noreferrer">
            <img id="payrollpic" src="./Payroll.png" alt="Payroll Manager" />
          </a>
        </div> */}
      </section>

    </>


  );
}

export default MyWork;