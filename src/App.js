import React, { Component } from 'react'

import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Home from './Pages/Home';
import Weekly from './Pages/Weekly';
import WeeklyBattle from './Pages/WeeklyBattle';
import Popular from './Pages/Popular';
import PopularBattle from './Pages/PopularBattle';
import Favorites from './Pages/Favorites';
import NotFound from './Pages/NotFound';
import Nav from './Components/Nav';

import 'bootstrap/dist/css/bootstrap.min.css';




class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Nav/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/weekly" component={Weekly}/>
        <Route path="/weekly-battle" component={WeeklyBattle}/>
        <Route path="/popular" component={Popular}/>
        <Route path="/popular-battle" component={PopularBattle}/>
        <Route path="/favorites" component={Favorites}/>
        <Route path="*" component={NotFound} />
      </Switch>
      </BrowserRouter>

    )
  }
}

export default App
