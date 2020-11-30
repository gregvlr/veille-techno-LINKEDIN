import React, { Component } from "react";

export class Header extends Component {
  render() {
    return (
      <header id="header">
        <div className="intro">
          <div className="overlay">
            <div className="container">
              <div className="row">
                <div className="col-md-8 col-md-offset-2 intro-text">
                  <h1>
                    Parlons Réseau. 
                    <h2 className="subtitle">
                    Talk about Linkedin.
                    </h2>
                  </h1>
                  <a
                    href="#features"
                    className="btn btn-custom btn-lg page-scroll"
                  >
                    En savoir plus
                  </a>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
