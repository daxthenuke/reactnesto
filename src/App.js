import React from 'react';

import './bootstrap.min.css';
import List from './components/List' ;
import Add from './components/Add' ;
import Update from './components/Update' ;

import {Switch,Route , Link } from 'react-router-dom';

// List
// Add form
// Update Form


function App() {
  return (
    <div className="container">
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      
        
      <li class="nav-item">
        <Link class="nav-link" to="#">List</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="#">Add</Link>
      </li>
      
    </ul>
  </div>
</nav>

      <Link to="/"> List</Link>
      <Link to="/add">Add</Link>
      <Link to="/update/1">Update</Link>
      <Switch>
        <Route path="/" component={List} exect />
        <Route path="/add" component={Add} />
        <Route path="/update/:id" component={Update} />
      </Switch>
    </div>
  );
}

export default App;
