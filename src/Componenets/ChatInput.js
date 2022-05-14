import { Button } from '@material-ui/core'
import React from 'react'
import { useRef } from 'react'
import styled from 'styled-components'
import { auth, db } from '../Firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

function ChatInput({channelId,ChannelName,Chatref}) {
  const [user]=useAuthState(auth)


    const [input,setInput]=useState('');

const sendMessage=(e)=>{
    e.preventDefault();
     if(!channelId){
         return false;
     }
   console.log(channelId)
     db.collection('rooms').doc(channelId).collection('messages').add({
         message:input,
         timestamp:firebase.firestore.FieldValue.serverTimestamp(),
         user:user.displayName,
         userImage:user.photoURL

     });

     Chatref.current.scrollIntoView({
         behavior:'smooth'
     })

setInput('')

};

  return (
    <ChatInputContainer>
      <form>
          <input value={input}
          onChange={e=>setInput(e.target.value)}
          placeholder={`Message #${ChannelName} room`} />
          <Button hidden type='submit' onClick={sendMessage}>
              SEND

          </Button>


      </form>
    </ChatInputContainer>
  )
}

export default ChatInput

const ChatInputContainer=styled.div`

border-radius:20px;

>form{
display:flex;
position:relative;
justify-content:center;
};

>form >input {
    position:fixed;
    bottom:30px;
    width:60%;
    border:1px solid gray;
    border-radius:3px;
    padding:20px;
    outline:none;
}

>form >button {
    display:none !important;
}
`
