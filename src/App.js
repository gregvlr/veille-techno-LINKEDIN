import React, { Component } from 'react'
import Navigation from './components/navigation';
import Header from './components/header';
import About from './components/about';
import Algorithme from './components/Algorithme';
import BonnesPratiques from './components/BonnesPratiques';
import AboutMe from './components/AboutMe';
import JsonData from './components/data/data.json';

export class App extends Component {
  state = {
    landingPageData: {},
  }
  getlandingPageData() {
    this.setState({ landingPageData: JsonData })
  }

  componentDidMount() {
    this.getlandingPageData();
  }

  render() {
    return (
      <div>
        <Navigation />
        <Header data={this.state.landingPageData.Header} />
        <About data={this.state.landingPageData.About} />
        <Algorithme data={this.state.landingPageData.Services} />
        <BonnesPratiques data={this.state.landingPageData.BonnesPratiques} />
        <AboutMe data={this.state.landingPageData.AboutMe} />
      </div>
    )
  }
}

export default App;
