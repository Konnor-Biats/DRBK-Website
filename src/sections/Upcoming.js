import React from 'react'
import styled from 'styled-components'

const Section = styled.section`
    min-height: 100vh;
    width: 100vw;
    margin: 0 auto;

    display: flex;
    justify-content: center;
    align-items: center;

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
const Box = styled.div`
position: relative;
top: 10%;
width: 80%;
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

    
    
`
const Upcoming = () => {
  return (
    <Section>
        <Title>UpComing Litters</Title>
        <Box>

        </Box>
    </Section>
    )
}

export default Upcoming