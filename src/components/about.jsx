import React, { Component } from 'react'

export class about extends Component {
  render() {
    return (
        <div id="about">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-6"> <img src="img/social-network-linkedin.png" className="img-responsive" alt="social network"/> </div>
            <div className="col-xs-12 col-md-6">
              <div className="about-text">
                <h2>Quelques chiffres</h2>
                <div className="list-style">
                  <div className="col-lg-6 col-sm-6 col-xs-12">
                    <ul className="style-list">
                      <li>Plus grand réseau professionnel au monde</li>
                      <li>Racheter par Microsoft en 2016 pour 26,2 milliards de dollars</li>
                      <li>660 millions de membres dans le monde !</li>
                      <li>150 millions d'utilisateurs actifs</li>
                      <li>94% des professionnels en BtoB y diffusent du contenu</li>
                    </ul>
                  </div>
                  <div className="col-lg-6 col-sm-6 col-xs-12">
                    <ul className="style-list">
                      <li>Présent dans 200 pays</li>
                      <li>15ème plateforme la plus utilisée</li>
                      <li>2 nouveaux inscrits par seconde</li>
                      <li>56% d'hommes inscrit pour 44% de femmes</li>
                      <li>Age moyen des utilisateurs : 44 ans</li>
                      <li>30 millions d'entreprises sont inscrite en 2020</li>

                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default about
