import React, { Component } from 'react';

import './App.css';

import Header from './components/Header/Header';
import Second from './components/Second/Second';
import Third from './components/Third/Third';
import Fourth from './components/Fourth/Fourth';
import Footer from './components/Footer/Footer';


class App extends Component {

  constructor() {
    super();
    this.state = {};
  }
  
  render() {
    return (
      <div>
            <link href='http://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css' rel='stylesheet'></link>
            <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100;1,400;1,700&display=swap" rel="stylesheet"></link>
            <link rel="stylesheet" href="style.css" type="text/css"></link>

            <Header></Header>
            <Second></Second>
            <Third></Third>
            <Fourth></Fourth>
            <Footer></Footer>

      </div>
    );
  }
}

export default App;
