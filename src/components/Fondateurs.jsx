import React, { Component } from "react";

export class Fondateurs extends Component {
  render() {
    return (
      <div id="features" className="text-center">
        <div className="container">
          <div className="col-md-10 col-md-offset-1 section-title">
            <h2>Fondateurs</h2>
          </div>
          <div className="row">
            {this.props.data
              ? this.props.data.map((title,content) => (
                  <div  key={`${title.title}-${content}`} className="col-xs-6 col-md-3">
                    {" "}
                    <i className={title.icon}></i>
                    <h3>{title.title}</h3>
                    <p>{content.text}</p>
                  </div>
                ))
              : ""}
          </div>
        </div>
      </div>
    );
  }
}

export default Fondateurs;
