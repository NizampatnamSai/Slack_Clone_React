import React from 'react'
import styled from 'styled-components'
import { auth, db } from '../Firebase'
import {useCollection} from 'react-firebase-hooks/firestore'
import { useDispatch } from 'react-redux'
import { enterRoom } from '../features/appSlice'



function SidebarOption({Icon, title,addChannelOption,id}) {
    // console.log(id)

   const dispatch=useDispatch();


    const [channels, loading,error]=useCollection(db.collection('rooms'));

    const addChannel=()=>{
        const ChannelName=prompt('Please enter the channel name')
        if(ChannelName){
            db.collection('rooms').add({
                name:ChannelName,

            })
        }

    };

    const SelectChannel=()=>{
        if(id){
            console.log(id)
 dispatch(enterRoom({
     roomId:id
 }))
        }

    };
  return (
    
      <SidebarOptionContainer
      onClick={addChannelOption ? addChannel: SelectChannel}
       
      >
       {Icon && <Icon fontSize='small' style={{padding:10}}/>}
       {Icon ? (
           <h3>
               {title}
           </h3>): (
               <SidebarOptionChannel>


<span>#</span> {title}

               </SidebarOptionChannel>

           )}
       
      </SidebarOptionContainer>
    
  );
}

export default SidebarOption;

const SidebarOptionContainer=styled.div`
display: flex;
font-size:12px;
align-items:center;
padding-left:2px;
curser:pointer;

 :hover{
    opacity:0.9;
curser:pointer;
background-color:#340e36;
}

>h3 {
    font-weight:500;
}

>h3 >span {
    padding:15px;
}
`;
const SidebarOptionChannel=styled.div`

padding:10px 0;
font-weight:300;

`;
