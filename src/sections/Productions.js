import React from 'react'
import styled from 'styled-components'

import Prod_Male from '../assets/Images/dog3.jpg';
import Prod_Female from '../assets/Images/dog2.jpg';


const Section = styled.section`
    min-height: 100vh;
    height: auto;
    width: 100vw;
    margin: 0 auto;
    overflow: hidden;

    display: flex;
    justify-content: flex-start;
    align-items: flex-start;

    position: relative;
`

const Title = styled.h1`
    font-size: ${props => props.theme.fontxxxl};
    font-family: 'Merriweather', serif;
    font-weight: 500;

    text-shadow: 1px 1px 1px ${props => props.theme.body};
    color: ${props => props.theme.text};
    position: absolute;
    top: 1rem;
    left: 5%;
    z-index: 11;

    @media (max-width: 64em) {
        font-size: ${props => props.theme.fontxxl};


    }

    @media (max-width: 48em) {
        font-size: ${props => props.theme.fontxl};

    }
`

const Left = styled.div`
    width: 35%;
    background-color: ${props => props.theme.body};
    color: ${props => props.theme.text};

    min-height: 100vh;
    z-index: 5;

    position: fixed;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    p{
        font-size: ${props => props.theme.fontlg};
        font-weight: 300;
        width: 80%;
        margin: 0 auto;
        

    }

    @media (max-width: 64em) {
        p{
            font-size: ${props => props.theme.fontmd};

        }
    }
    @media (max-width: 48em) {
        width:40%;
        p{
            font-size: ${props => props.theme.fontsm};

        }
    }
    @media (max-width: 30em) {
        p{
            font-size: ${props => props.theme.fontxs};

        }
    }

`

const Right = styled.div`
    position: absolute;
    left: 30%;
    padding-left: 10%;
    min-height: 100vh;

    background-color: ${props => props.theme.grey};
    width: 85%;
    display: flex;
    justify-content: center;
    align-items: center;
    
    img{
        width: auto;
        height: 100%;
        padding-left: 0%;
        margin-top: 10%;
        justify-content: center;
    }

    h1{
        width: 15rem;
        margin: 0 2rem;
    }


    @media (max-width: 48em) {
        width:60em;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: row;

        img{
        /* Scale Down! */
        width: 80%;
        height: 80%;
        padding-left: 0%;
        margin-top: 10%;
        justify-content: center;

    }
    }

    @media (max-width: 30em) {
        width:60em;
        display: flex;
        align-items: center;
        flex-direction: row;

        img{
        /* Scale Down! */
        width: 80%;
        height: 80%;
        padding-left: 0%;
        margin-top: 10%;

    }
    }
`

const Box = styled.div`
position: absolute;
top: 50%;
transform: translate(-50%, -50%);


width: 80%;
height: 65vh;
display: flex;
flex-direction: column;
align-items: center;




background: linear-gradient(
    to right,
    ${props => props.theme.body} 50%,
    ${props => props.theme.body} 50%) bottom,
    linear-gradient(
        to right,
        ${props => props.theme.body} 50%,
        ${props => props.theme.body} 50%) top;
    
    background-repeat: no-repeat;
    background-size: 100% 2px;
    border-left: 2px solid ${props => props.theme.body};
    border-right: 2px solid ${props => props.theme.body};

    z-index: 1;

    @media (max-width: 48em) {
        position: absolute;
        top: 25%;
        transform: translate(-50%, -50%);
        width:50%;
        height: 35vh;
        display: flex;
        flex-direction: column;
        align-items: center;
    }  

    
    
    
`
const Males = styled.div`
    width: 50%;
    min-height: 75vh;
    z-index: 5;

    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;


`


const Productions = () => {
  return (
    <Section>
        <Title>DRBK Productions</Title>
        <Left>
            <p>
                CloudConvert converts your image files online. Amongst many others, we support PNG, JPG, GIF, WEBP and HEIC. 
                You can use the options to control image resolution, quality and file size.
                <br />
                <br />
                <br />
                CloudConvert converts your image files online. Amongst many others, we support PNG, JPG, GIF, WEBP and HEIC. 
                You can use the options to control image resolution, quality and file size.
            </p>
        </Left>

        <Right>

            <Males>
                <Box>
                    <img src={Prod_Male} alt="" srcset=""></img>
                    <h1>View All Productions</h1>
                </Box>
            </Males>

           
        </Right>
        
    </Section>
  )
}

export default Productions