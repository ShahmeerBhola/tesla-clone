import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'

function Section(props) {
    return (
        <Wrap bgImage={props.backgroundImg}> 
        <Fade top >
            <Itemtxt>
                <h1>{props.title}</h1>
                <p>{props.description}</p>
            </Itemtxt>
            </Fade>
            <Buttons>
                <Fade bottom >
                    <ButtonGrp>
                        <Leftbutton>{props.leftbutton}</Leftbutton>
                        {props.rightbutton&&
                        <Rightbutton>{props.rightbutton}</Rightbutton>}
                    </ButtonGrp>
                </Fade>
                <DownArrow src="/images/down-arrow.svg"/>
            </Buttons>
        </Wrap>
    )
}

export default Section

const Wrap=styled.div`
width : 100vw;
height: 100vh;
background-size: cover;
background-position:center;
background-repeart: no-repeat;
background-image: ${props =>`url("/images/${props.bgImage}")`};
display:flex;
flex-direction:column;
align-items:center;
justify-content:space-between;
`
const Itemtxt=styled.div`
text-align:center;
padding-top:15vh;
`
const ButtonGrp=styled.div`
display:flex;
margin-bottom:30px;
@media(max-width : 768px){
    flex-direction:column; 
    
}

`
const Leftbutton=styled.div`
background-color: rgba(23,24,32,0.8);
height:40px;
width:256px;
color:white;
align-items:center;
justify-content: center;
display:flex;
border-radius:100px;
opacity:0.85;
text-transform: uppercase;
font-size:12px;
cursor:pointer;
margin : 8px;    
`
const Rightbutton=styled(Leftbutton)`
background-color:white;
color:black;
opacity:0.65;
`

const DownArrow=styled.img`
margin-top:20px;
height:40px;
overflow-x : hidden;
animation: animateDown infinite 1.5s;
`
const Buttons=styled.div ``