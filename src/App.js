

import './App.css';
import React, { useState } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from '../src/pages/home'
import NavComponent from '../src/components/nav'
import Footer from '../src/components/footer'
import About from './pages/about';


function App() {
  
  return ( 
    <Router>
    <NavComponent></NavComponent>
     <div>
       {/* A <Switch> looks through its children <Route>s and
           renders the first one that matches the current URL. */}
       <Switch>
         <Route path="/PortfolioWebsite" exact component={Home}/>
         <Route path="/About" exact component={About}/>
       </Switch>
     </div>
     <Footer></Footer>
   </Router>
  );
}

export default App;
