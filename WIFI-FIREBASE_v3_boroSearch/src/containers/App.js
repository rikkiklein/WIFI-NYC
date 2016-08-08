import React, { Component }   from 'react';
import Header                 from '../components/Header.js';
import Footer                 from '../components/Footer.js';
import Background             from '../components/Background.js';

import '../css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Background/>
        <Header/>
        <div className="home">
          <h1>WIFI LOCATOR!</h1>
        </div>
        <Footer>Rikki Rifka Rabinowitz 2016 All Rights Reserved.</Footer>
    </div>
    );
  }
}

export default App;
