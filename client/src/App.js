import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import Saved from './pages/saved';
import Nav from './components/Nav'
import Header from './components/Header'

function App() {
  return (
    <Router>
      <Nav/>
      <Header/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/saved_articles' component={Saved}/>
      </Switch>
    </Router>
  );
}

export default App;
