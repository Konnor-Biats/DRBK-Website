import React from 'react'
import styled from 'styled-components'

const Section = styled.section`
    min-height: 120vh;
    width: 100vw;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    @media (max-width: 64em) {
        min-height: 100vh;
    }

    @media (max-width: 48em) {    
        min-height: 100vh;
    }
    @media (max-width: 30em) {    
        min-height: 100vh;
    }
`

const Title = styled.h1`
    font-size: ${props => props.theme.fontxxxl};
    font-family: 'Kaushan Script';
    font-weight: 300;

    text-shadow: 1px 1px 1px ${props => props.theme.grey};
    color: ${props => props.theme.body};
    position: absolute;
    top: 1rem;
    
    z-index: 11;

    @media (max-width: 64em) {
        font-size: ${props => props.theme.fontxxl};
       
    }

    @media (max-width: 48em) {
        font-size: ${props => props.theme.fontxxl};
       
       
    }
`
const Box = styled.div`
position: relative;
top: 15%;
width: 90%;
height: 70vh;
display: flex;
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

    @media (max-width: 70em){
        width: 40vw;
        height: 80vh;
    }
    @media (max-width: 64em){
        width: 50vw;

    }
    @media (max-width: 48em){
        width: 60vw;

    }
    @media (max-width: 30em){
        width: 80vw;
        height: 70vh;

    }
    
    
`

const Test = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${props => props.theme.fontxxxl};
    `


const Upcoming = () => {
  return (
    <Section>
        <Title>UpComing Litters</Title>
        <Box>
            <Test>
            Litter Coming Soon! Check Back Later
            </Test>
        </Box>
    </Section>
    )
}

export default Upcoming