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
const Title = styled(motion.div)`
display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    div{
        display: flex;
        flex-direction: row;
    }
    h1{
        font-family: 'Merriweather', serif;
        font-size:${props => props.theme.fontBig};
        text-shadow: 1px 1px 1px ${props => props.theme.body};
    
        @media (max-width: 48em) {
        font-size: ${props => props.theme.fontxxxl};
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


    const text_container = {
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
    
    
        const animation_container = {
          hidden : { 
              opacity: 0,
          }, 
          show : {  
              opacity: 1,
              transition : { 
                  delayChildren: 1,
                  staggerChildren: 0.5,
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
          
          const item = {
            hidden : { 
                opacity: 0,
        
            }, 
            show : {  
                opacity: 1,
            },
        }
    
          
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

        <Title variants={animation_container} initial="hidden" animate="show">
            <div>
                <motion.h1 variants={item} data-scroll data-scroll-delay='0.13' data-scroll-speed='4'>D</motion.h1>
                <motion.h1 variants={item} data-scroll data-scroll-delay='0.09' data-scroll-speed='4'>R</motion.h1>
                <motion.h1 variants={item} data-scroll data-scroll-delay='0.06' data-scroll-speed='4'>B</motion.h1>
                <motion.h1 variants={item} data-scroll data-scroll-delay='0.04' data-scroll-speed='4'>K</motion.h1>

            </div>
        </Title>
        <Text variants={text_container} initial="hidden" animate="show">
            
            <h2 data-scroll data-scroll-delay='0.04' data-scroll-speed='2'>Done Right Bully Kennel</h2>
        </Text>
    </Container>
  )
}

export default Loader