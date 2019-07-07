import React from 'react'
import styled from 'styled-components'
import heroImgPath from '../assets/images/hero-background.jpeg'

const Hero = () => (
  <Section>
    <BackgroundImage>
      <MottoWrapper>
        <Dash />
        <Motto>A software company, built for your business</Motto>
        <Dash />
      </MottoWrapper>

      <div>
        <CompanyName>ARCTEC</CompanyName>
      </div>

      {/* <ArrowDiv>
        <Arrow />
        <ArrowDash />
      </ArrowDiv> */}
    </BackgroundImage>
  </Section>
)

export default Hero

const Section = styled.section`
  height: 100vh;
  width: 100%;
  position: relative;
  margin-bottom: 10vh;
`

const BackgroundImage = styled.div`
  background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.7) 0%, #000000 100%),
    url(${() => heroImgPath});
  height: 100%;
  width: 100%;
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  align-items: center;
  justify-content: center;
`

const CompanyName = styled.h1`
  font-family: Anurati;
  letter-spacing: 0.3em;
  font-size: 200px;
  color: rgba(255, 255, 255, 0.55);
  margin-left: 10px;

  @media screen and (max-width: 1300px) {
    font-size: 150px;
  }
  @media screen and (max-width: 1000px) {
    font-size: 100px;
  }
  @media screen and (max-width: 768px) {
    font-size: 50px;
    color: #8c8c8c;
  }
`

const MottoWrapper = styled.div`
  position: absolute;
  top: 5%;
  display: flex;
  align-items: center;
`

const Motto = styled.h2`
  /* font-family: GlacialIndifference-Regular; */
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

const ArrowDiv = styled.div`
  font-size: 0;
  position: absolute;
  bottom: 5%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`

const Arrow = styled.div`
  height: 40px;
  width: 40px;
  border-style: solid;
  border-color: rgba(255, 255, 255, 0.3);
  border-width: 0px 1px 1px 0px;
  transform: rotate(45deg);
  transition: border-width 150ms ease-in-out;
  position: absolute;
`
const ArrowDash = styled.div`
  font-size: 0;
  height: 1px;
  background-color: rgba(255, 255, 255, 0.3);
  width: 60px;
  margin-bottom: 10px;
`
