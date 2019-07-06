import React from 'react'
import { Title, Button } from '../styled'
import styled from 'styled-components'
import roadImageSrc from '../assets/images/road.jpg'

const CallToAction = () => (
  <Section>
    <Content>
      <Title style={{ textAlign: 'center', marginBottom: 60 }}>
        Steady. Surely. Ongoing
      </Title>
      <Button>Works with us</Button>
    </Content>
  </Section>
)

export default CallToAction

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20vh;
  width: 100%;
  padding-top: 100px;
  padding-bottom: 100px;

  background-image: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.8) 0%,
      rgba(0, 0, 0, 0.95) 100%
    ),
    url(${() => roadImageSrc});
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;
`

const Content = styled.div`
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
