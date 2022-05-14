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
import Spinner from 'react-spinkit'


function App() {


  const [user,loading]=useAuthState(auth)



  if(loading){

    return(
      <AppLoading>
        <AppLoadingContents>
     <img src='https://webdesigntips.blog/wp-content/uploads/2019/02/Slack-sparks-further-outrage-with-tweak-to-new-logo.jpg' />
       
       <Spinner
       name='ball-spin-fade-loader'
       color='purple'
       fadeIn='none'
       
       />
       
        </AppLoadingContents>
      </AppLoading>
    )
  }


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

const AppLoading=styled.div`
display:grid;
place-items:center;
height:100vh;
width:100%

`



const AppLoadingContents=styled.div`

text-align:center;
padding-bottom:100px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;

>img {
  height:100px;
  padding:20px;
  margin-bottom:40px;
}`


const Appbody=styled.div`
display:flex;
height:100vh;
`
