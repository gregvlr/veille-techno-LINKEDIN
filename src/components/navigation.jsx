import React, { Component } from "react";

export class Navigation extends Component {
  render() {
    return (
      <nav id="menu" className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <a className="navbar-brand page-scroll" href="#page-top">
              Linkedin
            </a>{" "}
          </div>

          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ul className="nav navbar-nav navbar-right navbar-ihpone">
              <li>
                <a href="#features" className="page-scroll">
                  Linkedin, c'est quoi ?
                </a>
              </li>
              <li>
                <a href="#services" className="page-scroll">
                  Comment fonctionne linkedin ?
                </a>
              </li>
              <li>
                <a href="#BonnesPratiques" className="page-scroll">
                  Les bonnes pratiques
                </a>
              </li>
              <li>
                <a href="#AboutMe" className="page-scroll">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;
