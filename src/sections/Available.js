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
    font-family: 'Kaushan Script';
    font-weight: 300;

    text-shadow: 1px 1px 1px ${props => props.theme.grey};
    color: ${props => props.theme.body};
    position: absolute;
    top: 1rem;
    left: 5%;
    z-index: 11;
`

const Left = styled.div`
    width: 35%;
    background-color: ${props => props.theme.text};
    color: ${props => props.theme.text};

    min-height: 100vh;
    z-index: 5;

    position: fixed;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    p{
        color: ${props => props.theme.body};

        font-size: ${props => props.theme.fontlg};
        font-weight: 300;
        width: 80%;
        margin: 0 auto;
        

    }
`

const Right = styled.div`
    position: absolute;
    left: 30%;
    padding-left: 20%;
    min-height: 100vh;

    background-color: ${props => props.theme.body};
    width: 85%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;


    
    img{
        width: 80%;
        height: 80%;
        padding-left: 0%;
        margin-top: 10%;
        justify-content: center;
    }

    h1{
        color: ${props => props.theme.text};

        width: 5rem;
        margin: 0 2rem;
    }

`

const Box = styled.div`
position: absolute;
top: 50%;
transform: translate(-50%, -50%);


width: 70%;
height: 65vh;
display: flex;
flex-direction: column;
align-items: center;




background: linear-gradient(
    to right,
    ${props => props.theme.text} 50%,
    ${props => props.theme.text} 50%) bottom,
    linear-gradient(
        to right,
        ${props => props.theme.text} 50%,
        ${props => props.theme.text} 50%) top;
    
    background-repeat: no-repeat;
    background-size: 100% 2px;
    border-left: 2px solid ${props => props.theme.text};
    border-right: 2px solid ${props => props.theme.text};

    z-index: 1;

    
    
`
const Males = styled.div`
    width: 40%;
    min-height: 75vh;
    z-index: 5;

    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;


`
const Females = styled.div`
    width: 40%;
    min-height: 75vh;
    z-index: 5;

    position: relative;
    display: flex;
    justify-content: center;
    flex-direction: column;


`

const Available = () => {
  return (
    <Section>
        <Title>Available Dogs</Title>
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
                    <h1>Males</h1>

                </Box>
            </Males>

            <Females>
                <Box>
                    <img src={Prod_Female} alt="" srcset=""></img>
                    <h1>Females</h1>
                </Box>
            </Females>
                
            
                     
        </Right>
        
    </Section>
  )
}

export default Available