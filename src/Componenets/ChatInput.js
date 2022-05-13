import { Button } from '@material-ui/core'
import React from 'react'
import { useRef } from 'react'
import styled from 'styled-components'
import { db } from '../Firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { useState } from 'react';

function ChatInput({channelId,ChannelName,Chatref}) {

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
         user:"N.Sai",
         userImage:'https://lh3.google.com/u/0/ogw/ADea4I5vNNN80wn5Syeg5SngmpwiqmTcR1HuBeAwEvoS=s32-c-mo'

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
