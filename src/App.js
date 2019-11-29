import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


import Nav from './components/navigation/Nav';
import MainContent from './components/maincontent/MainContent';
import Footer from './components/footer/Footer';
import Contact from './components/hire/Contact';
import Blog from './components/blog/Blog';
import Projects from './components/projects/Projects';
import NotesApp from './components/noteapp/noteapp';
import LoginPage from './components/noteapp/login';
import SignupPage from './components/noteapp/register';

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
        <Route path="/notesapp" component = {NotesApp}/>
        <Route path="/login" component = {LoginPage}/>
        <Route path="/register" component = {SignupPage}/>
        </Switch>
        <Footer />
      </div>
      </Router>
    );
  }
}


export default App;
