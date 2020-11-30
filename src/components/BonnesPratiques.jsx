import React, { Component } from "react";

export class BonnesPratiques extends Component {
  render() {
    return (
      <div id="BonnesPratiques">
        <div className="container">
          <div className="section-title text-center">
            <h2>Les bonnes pratiques !</h2>
          </div>
          <div className="row">
            {this.props.data
              ? this.props.data.map((d, i) => (
                  <div  key={`${d.title}-${i}`} className="col-md-bp">
                    <div className="service-desc">
                      <h3>{d.title}</h3>
                      <p>{d.content}</p>
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

export default BonnesPratiques;
