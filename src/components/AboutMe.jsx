import React, { Component } from "react";
import logoLinkedin from "./assets/linkedin-logo.png"
import logoGithub from "./assets/github-logo.png"

export class AboutMe extends Component {
  render() {
    return (
      <div id="AboutMe" className="text-center">
        <div className="container">
          <div className="col-md-8 col-md-offset-2 section-title">
            <h2>Grégory Vilar</h2>
            <p>
             Etudiant Wild Code School. Formation Javascript. Skills: HTML, CSS, REACT, NODE. Méthode Agile.
            </p>
          </div>

        </div>
          <div>
          <a href="https://www.linkedin.com/in/gr%C3%A9gory-vilar-28524a1b6/" alt="" target="_blank" rel="noopener noreferrer"><img className="network-logo" src={logoLinkedin} alt="logo linkedin" /></a> 
          <a href="https://github.com/gregvlr/" alt="" target="_blank" rel="noopener noreferrer"><img className="network-logo" src={logoGithub} alt="logo github" /></a>
            
          </div>
      </div>
    );
  }
}

export default AboutMe;
