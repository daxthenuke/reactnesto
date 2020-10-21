import React from 'react';

import './bootstrap.min.css';
import List from './components/List' ;
import Add from './components/Add' ;
import Update from './components/Update' ;

import {BrowserRouter ,Route , NavLink } from 'react-router-dom';

// List
// Add form
// Update Form


function App() {
  return (
    <div className="container">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-3">
      <NavLink class="navbar-brand" to="/">Navbar</NavLink>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          
            
          <li class="nav-item">
            <NavLink class="nav-link" to="/" exact={true}>List</NavLink>
          </li>
          <li class="nav-item">
            <NavLink class="nav-link" to="/add" exact={true}>Add</NavLink>
          </li>
          
        </ul>
      </div>
      </nav>

      
      <BrowserRouter>
        <Route path={'/'} exact={true} component={List} />
        <Route path={'/add'}  exact={true} component={Add}/>
        <Route path={"/update/:id"} exact={true} component={Update} />
      </BrowserRouter>
    </div>
  );
}

export default App;
