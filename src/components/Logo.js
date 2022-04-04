import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {motion} from 'framer-motion';


const Container = styled.div`
    position: absolute;
    top: 1rem;
    left: 1rem;

    width: 100%;
    color: ${props => props.theme.text};
    z-index: 5;


    a{
        display: flex;
        align-items: flex-end;
    }

    h1{
        width: 4rem;
        height: auto;
        overflow: visible;
        stroke-linejoin: round;
        stroke-linecap: round;

        g{
            path{
                stroke: ${props => props.theme.text};
            }
        }
    }
`;

const Text = styled(motion.span)`
    font-size: ${props => props.theme.fontlg};
    color: ${props => props.theme.text};


`

const textVariants = {
    hidden : { opacity: 0, x: -50, }, 
    visible : {  opacity: 1, x: -5,
    transition : { duration: 5, delay: 2, ease: 'easeInOut'}},
    
}

const pathVariants = {
    hidden : { opacity: 0, pathLength: 0, }, 
    visible : {  opacity: 1, pathLength: 0,
    transition : { duration: 2, ease: 'easeInOut'}},
    
}
const Logo = () => {
  return (
    <Container>
        <Link to="/">
            <h1>DRBK</h1>
        <g>
            <motion.path
               variants={pathVariants}
               intitial="hidden"
               animate="visible"         
            />
        </g>
        <Text
            variants={textVariants}
            intitial="hidden"
            animate="visible" 
        >
            Done Right Bully Kennel
        </Text>
        </Link>
    </Container>
  )
}

export default Logo