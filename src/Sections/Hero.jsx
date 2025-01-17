import React from 'react'
import styled from 'styled-components'
import heroImgPath from '../assets/images/hero-background.jpeg'
import Fade from 'react-reveal/Fade'

const Hero = () => (
  <Fade>
    <Section>
      <MottoWrapper>
        <Dash />
        <Motto>A software company, built for your business</Motto>
        <Dash />
      </MottoWrapper>

      <CenterAbsolute>
        <CompanyName>ARCTEC</CompanyName>
      </CenterAbsolute>

      <BackgroundImage />

      <Absolute>
        <ParticlesDiv />
      </Absolute>
    </Section>
  </Fade>
)

export default Hero

const Absolute = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`

const ParticlesDiv = styled.div.attrs({ id: 'particles-div' })`
  height: 100%;
  width: 100%;
`

const Section = styled.section`
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  width: 100%;
  margin-bottom: 10vh;
  margin-bottom: calc(var(--vh, 1vh) * 10);
  display: flex;
  flex-direction: column;
  align-items: center;
`

const BackgroundImage = styled.div`
  background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.7) 0%, #000000 100%),
    url(${() => heroImgPath});
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;
`

const CenterAbsolute = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
`

const CompanyName = styled.h1`
  font-family: Anurati;
  letter-spacing: 0.3em;
  font-size: 200px;
  color: white;
  opacity: 0.6;
  margin-left: 10px;
  pointer-events: none;

  @media screen and (max-width: 1300px) {
    font-size: 150px;
  }
  @media screen and (max-width: 1000px) {
    font-size: 100px;
  }
  @media screen and (max-width: 768px) {
    font-size: 50px;
  }
`

const MottoWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 40px;
  z-index: 1;

  @media screen and (max-width: 768px) {
    margin-top: 20px;
  }
`

const Motto = styled.h2`
  font-size: 20px;
  color: rgba(255, 255, 255, 0.3);
  margin-left: 10px;
  margin-right: 10px;

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
  @media screen and (max-width: 400px) {
    font-size: 10px;
  }
`

const Dash = styled.div`
  height: 2px;
  background-color: rgba(255, 255, 255, 0.3);
  width: 40px;
  margin-top: 5px;

  @media screen and (max-width: 768px) {
    width: 30px;
    height: 1.5px;
    margin-top: 3px;
  }
  @media screen and (max-width: 400px) {
    width: 20px;
    height: 1px;
    margin-top: 1px;
  }
`
