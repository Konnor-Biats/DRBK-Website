import React from 'react'
import styled from 'styled-components'
import CoverBackground from '../components/CoverBackground'
import Logo from '../components/Logo'
import NavBar from '../components/NavBar'



const Section = styled.section`
    position: relative;
    min-height: 100vh;
    overflow: hidden;
`


const Home = () => {
  return (
    <Section>
        <CoverBackground />
        <Logo />
        <NavBar />
    </Section>
  )
}

export default Home