import React from 'react';
import {BrowserRouter as Router, Switch,Route, Link, Routes} from 'react-router-dom'


import './App.css';
import Header from './app/Header';

function App() {
  return (
    <div className="app">
       <Routes>
      <Route path='/' element={<Header/>}/>
    </Routes>
    
    </div>
  );
}

export default App;
