import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import './Assets/css/default.min.css';

// Components
import Header from './components/headerComponent/header';
import Footer from './components/footerComponent/footer';
import Homepage from './components/pages/homePage';
import Projects from './components/pages/projects';



class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">

        <Header />

          <Route exact path = '/' component={ Homepage } />
          <Route exact path = '/Projects' component = { Projects } />

        <Footer />

      </div>
      </Router>
    );
  }
}

export default App;
