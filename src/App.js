import React from 'react';
import {BrowserRouter as Router, Switch,Route, Link, Routes} from 'react-router-dom'
import styled from 'styled-components'


import './App.css';
import Header from './Componenets/Header';
import Sidebar from './Componenets/Sidebar';

function App() {
  return (
    <div className="app">
      <Header/>
      <Appbody>
        <Sidebar/>

       <Routes>
      <Route path='/' element={''}/>

    </Routes>
    

    </Appbody>
    {/* hg,jgysaad */}
    </div>
  );
}

export default App;

const Appbody=styled.div`
display:flex;
height:100vh;
`
