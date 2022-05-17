import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'


import About_Img from '../assets/Images/dog4.webp';

const Section = styled.section`
    position: relative;
    min-height: 100vh;
    width: 80vw;
    overflow: hidden;
    display: flex;

    margin: 0 auto;

    @media (max-width: 48em) {
       width: 90vw;
    }
    @media (max-width: 30em) {
    width: 100vw;
    }
`
const Title = styled.h1`
    font-size: ${props => props.theme.fontxxxl};
    font-family: 'Kaushan Script'; 
    font-weight: 500;
    position: absolute;
    top: 1rem;
    left: 5%;
    z-index: 5;

    @media (max-width: 64em) {
        font-size: ${props => `calc(${props.theme.fontBig} - 5vw)`};
        top: 1rem;
        left: 0;

    }

    @media (max-width: 48em) {
        font-size: ${props => props.theme.fontxxxl};

    }
`
const Left = styled.div`
    width: 50%;
    font-size: ${props => props.theme.fontlg};
    font-weight: 300;
    position: relative;
    z-index: 5;
    margin-top: 10%;


    @media (max-width: 64em) {
    width: 80%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) !important;
    margin-top: 15%;

    padding: 2rem;
    font-weight: 600;

    background-filter: blur(2px);
    background-color: ${props => `rgba(${props.theme.textRgba},0.8)`};
    border-radius: 20px;

    }

    @media (max-width: 48em) {
        font-size: ${props => props.theme.fontmd};
    }

    @media (max-width: 30em) {
        font-size: ${props => props.theme.fontsm};
        width: 70%;
    }

    h1{
        text-align: center;
        font-size: ${props => props.theme.fontxl};
        font-weight: 300;

        @media (max-width: 48em) {
        font-size: ${props => props.theme.fontlg};
    }

    
    }
    
`

const Right = styled.div`
    width: 50%;
    position: relative;

    img{
        width: 50%;
        height: auto;
        padding-left: 25%;
        margin-top: 20%;

    }
    

    @media (max-width: 64em) {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        img{
            width: 100%;
            height:100vh;
            padding: 0;
            margin: 0;
            object-fit: cover;
        }   
    }
    @media (max-width: 48em) {
        img{
            display: none;            
        }
    
`
const Icons = styled.div`
    display: flex;
    flex-direction: row;

    overflow: visible;
    align-items: center;
    justify-content: center;
    margin-bottom: 5px;
    
    svg{
        margin-top: 0rem;
        display: flex;
        flex-direction: row;
        width: 4vw;
        height: auto;
        align-items: center;
        justify-content: center;
        padding-right: 15px;

        @media (max-width: 48em) {
        width: 10vw;
        height: auto;
    }

    }
`

const About = () => {
  return (
    <Section>
       <Title>
           About Our Team
       </Title>
    <Left>
        <h2>Background </h2>
        <br />
        Done Right Bully prides themselves in their ability to raise their puppies like an extension of our own family. Located in Akron, Ohio, Devin and Cheyenne, strive to bring you a loyal family member who is fun, loving, healthy, and strong! Our puppies are raised in-house, side by side with our young children. Providing a loving atmosphere helps better familiarize our dogs with what they will be seeing once they leave us! They receive daily cuddles, training, socializing, and weekly grooming. Our puppies are registered through the ABKC and UKC.
        <br />
        <br />
        <h2>DRBK Standard</h2>
        <br />
        At DRBK we breed for health, temperament , and structure. Our goal is to produce healthy and happy companions for your family. We offer around the clock availability for any guidance or to answer any questions you may have about you new family member.
        <br />
        <br />
        <h2>Community</h2>
        <br />
        We regularly attend dog shows where we strive to adhere to the registry standards set forth by ABKC and UKC. As a way to say thanks for the continuous support we organize puppy raffles and discounted rates when needed. We have done and will continue to do numerous things to give back to the community in any way we can!
        <br />
        <br />
        <h1>Follow Us on Social Media!</h1>
        <br />
        <Icons>
            <Link to="/">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">

            <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"/></svg>
            </Link>

            <Link to="/">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">

            <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
            </Link>

            <Link to="/">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            
            <path d="M496.926,366.6c-3.373-9.176-9.8-14.086-17.112-18.153-1.376-.806-2.641-1.451-3.72-1.947-2.182-1.128-4.414-2.22-6.634-3.373-22.8-12.09-40.609-27.341-52.959-45.42a102.889,102.889,0,0,1-9.089-16.12c-1.054-3.013-1-4.724-.248-6.287a10.221,10.221,0,0,1,2.914-3.038c3.918-2.591,7.96-5.22,10.7-6.993,4.885-3.162,8.754-5.667,11.246-7.44,9.362-6.547,15.909-13.5,20-21.278a42.371,42.371,0,0,0,2.1-35.191c-6.2-16.318-21.613-26.449-40.287-26.449a55.543,55.543,0,0,0-11.718,1.24c-1.029.224-2.059.459-3.063.72.174-11.16-.074-22.94-1.066-34.534-3.522-40.758-17.794-62.123-32.674-79.16A130.167,130.167,0,0,0,332.1,36.443C309.515,23.547,283.91,17,256,17S202.6,23.547,180,36.443a129.735,129.735,0,0,0-33.281,26.783c-14.88,17.038-29.152,38.44-32.673,79.161-.992,11.594-1.24,23.435-1.079,34.533-1-.26-2.021-.5-3.051-.719a55.461,55.461,0,0,0-11.717-1.24c-18.687,0-34.125,10.131-40.3,26.449a42.423,42.423,0,0,0,2.046,35.228c4.105,7.774,10.652,14.731,20.014,21.278,2.48,1.736,6.361,4.24,11.246,7.44,2.641,1.711,6.5,4.216,10.28,6.72a11.054,11.054,0,0,1,3.3,3.311c.794,1.624.818,3.373-.36,6.6a102.02,102.02,0,0,1-8.94,15.785c-12.077,17.669-29.363,32.648-51.434,44.639C32.355,348.608,20.2,352.75,15.069,366.7c-3.868,10.528-1.339,22.506,8.494,32.6a49.137,49.137,0,0,0,12.4,9.387,134.337,134.337,0,0,0,30.342,12.139,20.024,20.024,0,0,1,6.126,2.741c3.583,3.137,3.075,7.861,7.849,14.78a34.468,34.468,0,0,0,8.977,9.127c10.019,6.919,21.278,7.353,33.207,7.811,10.776.41,22.989.881,36.939,5.481,5.778,1.91,11.78,5.605,18.736,9.92C194.842,480.951,217.707,495,255.973,495s61.292-14.123,78.118-24.428c6.907-4.24,12.872-7.9,18.489-9.758,13.949-4.613,26.163-5.072,36.939-5.481,11.928-.459,23.187-.893,33.206-7.812a34.584,34.584,0,0,0,10.218-11.16c3.434-5.84,3.348-9.919,6.572-12.771a18.971,18.971,0,0,1,5.753-2.629A134.893,134.893,0,0,0,476.02,408.71a48.344,48.344,0,0,0,13.019-10.193l.124-.149C498.389,388.5,500.708,376.867,496.926,366.6Zm-34.013,18.277c-20.745,11.458-34.533,10.23-45.259,17.137-9.114,5.865-3.72,18.513-10.342,23.076-8.134,5.617-32.177-.4-63.239,9.858-25.618,8.469-41.961,32.822-88.038,32.822s-62.036-24.3-88.076-32.884c-31-10.255-55.092-4.241-63.239-9.858-6.609-4.563-1.24-17.211-10.341-23.076-10.739-6.907-24.527-5.679-45.26-17.075-13.206-7.291-5.716-11.8-1.314-13.937,75.143-36.381,87.133-92.552,87.666-96.719.645-5.046,1.364-9.014-4.191-14.148-5.369-4.96-29.189-19.7-35.8-24.316-10.937-7.638-15.748-15.264-12.2-24.638,2.48-6.485,8.531-8.928,14.879-8.928a27.643,27.643,0,0,1,5.965.67c12,2.6,23.659,8.617,30.392,10.242a10.749,10.749,0,0,0,2.48.335c3.6,0,4.86-1.811,4.612-5.927-.768-13.132-2.628-38.725-.558-62.644,2.84-32.909,13.442-49.215,26.04-63.636,6.051-6.932,34.484-36.976,88.857-36.976s82.88,29.92,88.931,36.827c12.611,14.421,23.225,30.727,26.04,63.636,2.071,23.919.285,49.525-.558,62.644-.285,4.327,1.017,5.927,4.613,5.927a10.648,10.648,0,0,0,2.48-.335c6.745-1.624,18.4-7.638,30.4-10.242a27.641,27.641,0,0,1,5.964-.67c6.386,0,12.4,2.48,14.88,8.928,3.546,9.374-1.24,17-12.189,24.639-6.609,4.612-30.429,19.343-35.8,24.315-5.568,5.134-4.836,9.1-4.191,14.149.533,4.228,12.511,60.4,87.666,96.718C468.629,373.011,476.119,377.524,462.913,384.877Z"/></svg>
            </Link>
        </Icons>
    </Left>
    <Right>
            <img src={About_Img} alt="" srcset=""></img>     

    </Right>
    </Section>
  )
}

export default About