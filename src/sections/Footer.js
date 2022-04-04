import React from 'react'
import styled from 'styled-components'

import Logo from '../assets/Images/Blue_Logo.webp';

const Section = styled.section`
    min-height: 100vh;
    width: 100vw;
    margin: auto;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: ${props => props.theme.body};
    color: ${props => props.theme.text};

    position: relative;

`
const LogoCont = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img{
        width: 25vw;
        height: auto;
    }
`

const FooterSections = styled.footer`
    width: 80vw;

    ul{
        list-style: none;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        margin: 2rem;
        margin-top: 1rem;
        padding: 0 1rem;
        border-top: 1px solid ${props => props.theme.text};
        border-bottom: 1px solid ${props => props.theme.text};

    }

    li{
        
        padding: 2rem;
        font-size: ${props => props.theme.fontlg};
        text-transform: uppercase;
        cursor: pointer;
        transition: all 0.3s ease;

        &:hover{
            transform: scale(1,1);
        }
    }
`

const Bottom = styled.div`
    width: 80vw;
    margin: 0 4rem;
    font-size: ${props => props.theme.fontlg};
    display: flex;
    justify-content: space-between;
    align-items: center;

    a{
        text-decoration: underline;
    }

   

`

const Footer = () => {
  return (
    <Section>
        <LogoCont>
            <img src={Logo} alt="DRBK"></img>
        </LogoCont>
        <FooterSections>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Productions</li>
                <li>Available</li>
                <li>Upcoming Litters</li>
                <li>FAQ</li>
            </ul>
        </FooterSections>
        <Bottom>
            <span>&copy; {new Date().getFullYear()}. All Rights Reserved.</span>
            <span>Site Operated and Maintained by &nbsp;
                <a href="/" target="_blank" rel="BDMSite">
                    Biats Digital Media
                </a>
            </span>
        </Bottom>
    </Section>
  )
}

export default Footer