import React from 'react';
import  Footer  from '../components/Footer';
import '../App.css'; 

function Resume() {
    return (
        <div>
            <p>
                Download my <a href="./JosephsChristopherResume.pdf" download>Resume</a>
            </p>
            <section id="Resume">
                <h2>Resume</h2>
                <div id="resume">
                    <h1>Front End Proficiencies</h1>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>Bootstrap</li>
                    </ul>
                    <h2>Back End Proficiencies</h2> 
                    <ul>
                        <li>Node.js</li>
                        <li>Express.js</li>
                        <li>MySQL</li>
                        <li>MongoDB</li>
                        <li>React</li>
                    </ul>
                </div>
            </section>
         
        </div>
    );
}

export default Resume;
