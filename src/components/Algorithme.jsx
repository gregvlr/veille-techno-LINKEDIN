import React, { Component } from "react";

export class Algorithme extends Component {
  render() {
    return (
      <div id="services" className="text-center">
        <div className="container">
          <div className="section-title">
            <h2>L'algorithme derrière le réseau</h2>
            <p>
             Niveau de qualité. Niveau d'interaction. La crédibilité. L'intervention humaine.
            </p>
          </div>
          <div className="row">
            {this.props.data
              ? this.props.data.map((d, i) => (
                  <div  key={`${d.name}-${i}`} className="col-md-4">
                    <div className="service-desc">
                      <h3>{d.name}</h3>
                      <p>{d.text}</p>
                    </div>
                  </div>
                ))
              : ""}
          </div>
        </div>
      </div>
    );
  }
}

export default Algorithme;
