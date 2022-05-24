import React from 'react'
import styled from 'styled-components'

import Prod_Male from '../assets/Images/Crypto/Crypto9.PNG';

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
        width: 80%;
        height: auto;
        padding-left: 0%;
        margin-top: 0%;
        justify-content: center;
    
    
    
    }

    @media (max-width: 48em) {
        width:60em;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: row;

        img{
        /* Scale Down! */
        width: 60%;
        height: auto;
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
        width: 40%;
        height: 40%;
        padding-left: 0%;
        margin-top: 10%;

    }
    }

    

    
`

const Right = styled.div`
    position: absolute;
    left: 45%;
    min-height: 100vh;

    background-color: ${props => props.theme.grey};
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    
    p{
        font-size: ${props => props.theme.fontlg};
        font-weight: 300;
        width: 80%;
        margin: 0 auto;
       
       

        button{
        
        color: ${props => props.theme.text};
        font-size: ${props => props.theme.fontmd};
        background-color: ${props => props.theme.black};
        display: flex;
        justify-content: center;
        align-items: center;
        
        }
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
                CloudConvert converts your image files online. Amongst many others, we support PNG, JPG, GIF, WEBP and HEIC. 
                You can use the options to control image resolution, quality and file size.
                <br />
                <br />
                <br />
                <button Link to='/'>View Productions</button>

            </p>
            

           
        </Right>
        
    </Section>
  )
}

export default Productions