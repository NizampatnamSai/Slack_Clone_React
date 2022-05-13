import React from 'react';
import {BrowserRouter as Router, Switch,Route, Link, Routes} from 'react-router-dom'
import styled from 'styled-components'


import './App.css';
import Chat from './Componenets/Chat';
import Header from './Componenets/Header';
import Sidebar from './Componenets/Sidebar';

import {useAuthState} from 'react-firebase-hooks/auth'
import { auth } from './Firebase';
import Login from './Componenets/Login';


function App() {

  const [user,loading]=useAuthState(auth)


  return (
    <div className="app">

      {
        !user ? (<Login/>):(<> <Header/>
        <Appbody>
          <Sidebar/>
  
         <Routes>
        <Route path='/' element={<Chat/>}/>
  
      </Routes>
      
  
    
      </Appbody> 
      </>
      )
      }
     

    </div>
  );
}

export default App;

const Appbody=styled.div`
display:flex;
height:100vh;
`
