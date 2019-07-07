import React from 'react'
import styled from 'styled-components'
import { Title, Text } from '../styled'
import Fade from 'react-reveal/Fade'

const VisionSection = () => (
  <Section>
    <Fade bottom cascade>
      <Title>Vision</Title>
      <Text style={{ maxWidth: 1000 }}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
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
  margin-bottom: 40vh;

  @media screen and (max-width: 768px) {
    margin-bottom: 10vh;
  }
`
