import React from 'react'
import styled from 'styled-components'

import Blue_Logo from '../assets/Images/Blue_Logo.webp';

const BackgroundContainer = styled.section`
    width: 100%;
    height: 100vh;
    position: relative;
    background-color: black;
`
const DarkOverlay = styled.div`
position: absolute;
top: 0;
bottom: 0;
left: 0;
right: 0;
z-index: 1;

background-color:  ${props => 'rgba(${props.theme.bodyRgba},0.6)'};
`

const Title = styled.div`
position: absolute;
top: 0;
bottom: 0;
left: 0;
right: 0;
z-index: 5;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
color: ${props => props.theme.text };

div{
    display:flex;
}

h1{
    font-family: 'Kaushan Script' ;
    font-size:${props => props.theme.fontBig};
}

h2{
    font-family: 'Sirin Stencil' ;
    font-size:${props => props.theme.fontlg};
    font-weight: 300;
    text-transform: capitalize;
}

`

const CoverBackground = () => {
  return (
    <BackgroundContainer>
<DarkOverlay />
<Title>
    <div data-scroll data-scroll-delay='0.4' data-scroll-speed='2'>
        <img src={Blue_Logo} alt="" srcset=""></img>     
    </div>
</Title>
    </BackgroundContainer>
  )
}

export default CoverBackground