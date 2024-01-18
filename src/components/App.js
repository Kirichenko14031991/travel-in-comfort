// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from '../pages/home/Home.jsx';
import Catalog from '../pages/catalog/Catalog';
import Favorites from '../pages/favorites/Favorites';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact component={Home} />
        <Route path="/catalog" component={Catalog} />
        <Route path="/favorites" component={Favorites} />
      </Routes>
    </Router>
  );
};

export default App;
