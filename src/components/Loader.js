import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'

const Container = styled(motion.div)`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    touch-action: none;
    overflow: hidden;

    width: 100vw;
    height: 100vh;

    z-index: 6;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: ${props => props.theme.body};
    color: ${props => props.theme.text};

    svg {
    width: 10vw;
    height: auto;
    overflow: visible;
    

    g {
      path {
        stroke: ${(props) => props.theme.text};
      }
    }
  }
    
`

const Text = styled(motion.span)`
   
    font-size:${props => props.theme.fontxl};
    color: ${props => props.theme.text};
    padding-top: 0.5rem;

    @media (max-width: 48em) {
  font-size: ${(props) => props.theme.fontlg};
}

    

    `


    const animation_container = {
        hidden : { 
            opacity: 0,
        }, 
        show : {  
            opacity: 1,
            transition : { 
                
      duration: 1,
      yoyo: Infinity, // repeats infinite times
      ease: "easeInOut",
                }
            },
        }
    
    
   

        const pathVariants = {
            hidden: {
              opacity: 0,
              pathLength: 0,
            },
            visible: {
              opacity: 1,
              pathLength: 1,
          
              transition: {
                duration: 2,
                ease: "easeInOut",
              },
            },
          };
          
const Loader = () => {
  return (
    <Container
        initial={{
            y: 0, opacity: 1
        }}
        exit={{
            y:'100%', opacity: 0
        }}
        transition={{
            duration:2
        }}
    
    >

    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <g></g>
        <g>
            <motion.path
            variants={pathVariants}
            initial="hidden"
            animate="visible"
            d="M304 48C304 74.51 282.5 96 256 96C229.5 96 208 74.51 208 48C208 21.49 229.5 0 256 0C282.5 0 304 21.49 304 48zM304 464C304 490.5 282.5 512 256 512C229.5 512 208 490.5 208 464C208 437.5 229.5 416 256 416C282.5 416 304 437.5 304 464zM0 256C0 229.5 21.49 208 48 208C74.51 208 96 229.5 96 256C96 282.5 74.51 304 48 304C21.49 304 0 282.5 0 256zM512 256C512 282.5 490.5 304 464 304C437.5 304 416 282.5 416 256C416 229.5 437.5 208 464 208C490.5 208 512 229.5 512 256zM74.98 437C56.23 418.3 56.23 387.9 74.98 369.1C93.73 350.4 124.1 350.4 142.9 369.1C161.6 387.9 161.6 418.3 142.9 437C124.1 455.8 93.73 455.8 74.98 437V437zM142.9 142.9C124.1 161.6 93.73 161.6 74.98 142.9C56.24 124.1 56.24 93.73 74.98 74.98C93.73 56.23 124.1 56.23 142.9 74.98C161.6 93.73 161.6 124.1 142.9 142.9zM369.1 369.1C387.9 350.4 418.3 350.4 437 369.1C455.8 387.9 455.8 418.3 437 437C418.3 455.8 387.9 455.8 369.1 437C350.4 418.3 350.4 387.9 369.1 369.1V369.1z"
        />
        </g>
    </svg>
        <Text variants={animation_container} initial="hidden" animate="show">
            
            <h2 data-scroll data-scroll-delay='0.04' data-scroll-speed='2'>Done Right Bully Kennel</h2>
        </Text>
    </Container>
  )
}

export default Loader