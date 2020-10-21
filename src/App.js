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
