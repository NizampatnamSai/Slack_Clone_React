import React from 'react'
import styled from 'styled-components'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'



function Sidebar() {
  return (
    <SidebarContainer>
      
     <SidebarHeader>
 
 <SidebarInfo>
     <h2>Slack clone</h2>
     <h3>
         <FiberManualRecordIcon/>
         N.Sai
     </h3>
 </SidebarInfo>
     </SidebarHeader>

    </SidebarContainer>
  )
}

export default Sidebar


const SidebarContainer=styled.div`
color:white;
background-color: var(--slack-color);
flex:0.3;
border-top: 1px solid #49274b;
max-width: 240px;
margin-top: 60px`;
const SidebarHeader=styled.div``;
const SidebarInfo=styled.div``;