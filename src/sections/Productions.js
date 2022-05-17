import React from 'react'
import styled from 'styled-components'

import Prod_Male from '../assets/Images/Crypto/Crypto3.jpeg';

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
    font-family: 'Kaushan Script'; 
    font-weight: 300;
    text-shadow: 1px 1px 1px ${props => props.theme.text};
    color: ${props => props.theme.body};
    position: absolute;
    top: 1rem;
    right: 5%;
    z-index: 11;

    @media (max-width: 64em) {
        font-size: ${props => props.theme.fontxxl};


    }

    @media (max-width: 48em) {
        font-size: ${props => props.theme.fontxl};

    }
`

const Left = styled.div`
    width: 50%;
    background-color: ${props => props.theme.text};
    color: ${props => props.theme.body};

    min-height: 100vh;
    z-index: 5;

    position: fixed;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    img{
        width: 100%;
        height: auto%;
        padding-left: 0%;
        margin-top: 0%;
        justify-content: center;
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
    left: 45%;
    padding-left: 10%;
    min-height: 100vh;

    background-color: ${props => props.theme.text};
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    
    p{
        font-size: ${props => props.theme.fontlg};
        font-weight: 300;
        width: 80%;
        margin: 0 auto;
        
       

        button{
        
        color: ${props => props.theme.body};
        font-size: ${props => props.theme.fontmd};
        background-color: ${props => props.theme.text};
        display: flex;
        justify-content: center;
        align-items: center;

        }
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


    
    

const Males = styled.div`
    width: 80%;
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
        <Title>Featured Productions</Title>
        <Left>
        <img src={Prod_Male} alt="" srcset=""></img>

           
        </Left>

        <Right>
        <p>
        CloudConvert converts your image files online. Amongst many others, we support PNG, JPG, GIF, WEBP and HEIC. 
                You can use the options to control image resolution, quality and file size.
                <br />
                <br />
                <br />
            <button Link to='/'>View DRBK Productions</button>

            </p>
            <Males>
            </Males>

           
        </Right>
        
    </Section>
  )
}

export default Productions