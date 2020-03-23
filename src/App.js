import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


import Nav from './components/navigation/Nav';
import MainContent from './components/maincontent/MainContent';
import Footer from './components/footer/Footer';
import Contact from './components/hire/Contact';
import Blog from './components/blog/Blog';
import Projects from './components/projects/Projects';

class App extends Component {
  render(){
    return(
      <Router>
      <div className="App">
        <Nav />
        <Switch>
        <Route path="/" exact component= {MainContent}/>
        <Route path="/about" component = {Contact}/>
        <Route path="/blog" component = {Blog}/>
        <Route path="/projects" component = {Projects}/>
        </Switch>
        <Footer />
      </div>
      </Router>
    );
  }
}


export default App;
