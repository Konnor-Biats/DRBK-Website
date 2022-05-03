import React from 'react'
import styled from 'styled-components'

import Blue_Logo from '../assets/Images/Blue_Logo.webp';

const BackgroundContainer = styled.section`
    width: 100%;
    height: 100vh;
    position: relative;
    background-color: black;

    
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

img{
        
        width: 100%;
        height: 100vh;
        object-fit: cover;

        @media (max-width: 48em) {
            object-position: center 10%;
            
        }

        @media (max-width: 30em) {
            width: 100%;
            height: 75vh;
            object-fit: cover;

            margin-top: -2rem;
        }
    }

div{
    display:flex;
}

`

const CoverBackground = () => {
  return (
    <BackgroundContainer>
<Title>
    <div data-scroll data-scroll-delay='0.4' data-scroll-speed='2'>
        <img src={Blue_Logo} alt="" srcset=""></img>     
    </div>
</Title>
    </BackgroundContainer>
  )
}

export default CoverBackground