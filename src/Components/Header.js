import React from 'react'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'
import { useState } from 'react'

function Header() {
    const [NavStatus,setNavstatus]=useState(false);
    return (
        <Container>
           <a><img src='/images/logo.svg' alt="tesla"/></a>
           <Menu>
                <a href="#">Model S</a> 
                <a href="#">Model 3</a> 
                <a href="#">Model X</a> 
                <a href="#">Model Y</a> 
           </Menu>
           <RightMenu>
                <a href="#">Shop</a> 
                <a href="#">Tesla Account</a> 
                <CustomMenu onClick={()=>setNavstatus(true)}/>
           </RightMenu>
           <BurgerNav show={NavStatus}>
               <CloseWrapper>
                    <CustomClose onClick={()=>setNavstatus(false)}/>
                </CloseWrapper>  
               <li><a href="#">Existing Inventory</a></li>
               <li><a href="#">Used Inventory</a></li>
               <li><a href="#">Trade-in</a></li>
               <li><a href="#">Cybertruck</a></li>
               <li><a href="#">Roadaster</a></li>
               <li><a href="#">Existing Inventory</a></li>
               <li><a href="#">Existing Inventory</a></li>
               <li><a href="#">Existing Inventory</a></li>


           </BurgerNav>
        </Container>
    )
}

export default Header

const Container=styled.div`
min-height: 60px;
position: fixed;
padding: 0px 20px;
align-items: center;
justify-content: space-between;
display: flex;
top: 0;
left: 0;
right: 0;
z-index: 1;
`
const Menu=styled.div`
display: flex;
align-items: center;
justify-content: center;
flex: 1;
   a{
       font-weight: 600;
       text-transform: uppercase;
       padding: 0px 10px;
       flex-wrap: nowrap;
   }
   @media(max-width: 768px){
       display: none;
   }
`
const RightMenu=styled.div`
display: flex;
align-items: center;
a{
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
}
`

const CustomMenu=styled(MenuIcon)`
cursor: pointer;
`

const BurgerNav=styled.div`
position: fixed;
top: 0;
right: 0;
bottom: 0;
background-color: white;
width: 300px;
z-index: 19;
list-style: none;
padding: 20px;
text-align: start;
display: flex;
flex-direction: column;
transform: ${props=> props.show ? 'translateX(0)' : 'translateX(100%)'};
transition: transform 0.3s;
    li{
        padding: 15px 0px;
        border-bottom: 1px solid rgba(0,0,0,.2);
    }
    a{
        font-weight: 600;  
    }
`

const CustomClose=styled(CloseIcon)`
cursor: pointer;
`

const CloseWrapper=styled.div`
display: flex;
justify-content: flex-end;
`