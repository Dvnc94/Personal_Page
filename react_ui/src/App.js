import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from "./Header/Header";
import Home from "./Home/Home";
import Contact from "./Contact/Contact";
import About from "./About/About";
import Resume from "./Resume/Resume";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />  
        </div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/resume' component={Resume} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
        </Switch>
      </Router>
    );
  }
}

export default App;
