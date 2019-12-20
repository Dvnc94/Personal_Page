import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from "./Header/Header";
import Home from "./Home/Home";
import Contact from "./Contact/Contact";
import About from "./About/About";
// import Footer from "./Footer/Footer";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path='/Portfolio' component={Home} />
          <Route path='/Portfolio/about' component={About} />
          <Route path='/Portfolio/contact' component={Contact} /> 
          {/* <Footer /> */}
        </div>
      </Router>
    );
  }
}

export default App;
