import React from 'react'
import styled from 'styled-components'
import {Button} from '@material-ui/core'
import { auth, provider } from '../Firebase'

function Login() {

    const signIn=(e)=>{
        e.preventDefault()
        auth.signInWithPopup(provider).catch((error)=>{
            alert(error.message)
        })

    }
  return (
    <LoginContainer>

      <LoginInnerContainer>
          <img  src='data:image/png;base64,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' alt='slack logo'/>
     
     <h1>Sign in to Slack1</h1>
     <p>NSai.Slack.com</p>


     <Button   onClick={signIn}>Sign in with Google</Button>
     
      </LoginInnerContainer>
    </LoginContainer>
  )
}

export default Login

const LoginContainer=styled.div`
background-color:#f8f8f8;
height:100vh;
display:grid;
place-items:center;
`
const LoginInnerContainer=styled.div`
padding:100px;
text-align:center;
background-color:white;
border-radius:10px;
box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);

>img {
    object-fit:contain;
    height:100px;
    margin-bottom:40px;

}

>button {
    margin-top:50px;
    text-transform:inherit !important;
    background-color: #0a8d48 !important;
    color:white;
}
`
