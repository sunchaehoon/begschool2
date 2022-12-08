import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Router from './Router';
import Globalstyle from './Globalstyle';

function App() {
  return (
    <BrowserRouter>
      <Router />
      <Globalstyle />
    </BrowserRouter>
  );
}

export default App;
