import React from "react"
import styled from "styled-components"
import { Title, Text } from "../styled"
import Fade from "react-reveal/Fade"

const VisionSection = () => (
  <Section>
    <Fade bottom>
      <Title>Vision</Title>
      <Text style={{ maxWidth: 1000 }}>
        In a world surrounded by software providing multiple ways of improving day to day life and
        work productivity, our vision is to create the perfect combination of great ideas that solve
        business needs, cutting edge design and experience, performance and reliability in order to
        deliver the highest fitting product for your business.
      </Text>
    </Fade>
  </Section>
)

export default VisionSection

const Section = styled.section`
  width: 90%;
  max-width: 1400px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
  margin-bottom: 20vh;
  margin-bottom: calc(var(--vh, 1vh) * 20);

  @media screen and (max-width: 768px) {
    margin-bottom: 10vh;
    margin-bottom: calc(var(--vh, 1vh) * 10);
  }
`
