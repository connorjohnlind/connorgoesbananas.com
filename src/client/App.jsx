import React from 'react';
import { renderRoutes } from 'react-router-config';

import NavBar from './components/NavBar/NavBar';
import './App.scss';

const App = ({ route }) => {
  return (
    <div className="App-wrapper">
      <div className="App">
        <NavBar />
        {renderRoutes(route.routes)}
      </div>
    </div>
  );
};

export default {
  component: App
};
