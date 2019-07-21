import React from 'react'
import { Title } from '../styled'
import styled from 'styled-components'
import navigationImageSrc from '../assets/images/navigation.jpeg'

const CallToAction = () => (
  <Section>
    <Content>
      <Title style={{ textAlign: 'center', marginBottom: 0 }}>Navigating towards ...</Title>
    </Content>
  </Section>
)

export default CallToAction

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 60vh;
  height: calc(var(--vh, 1vh) * 60);
  margin-top: 20vh;
  margin-top: calc(var(--vh, 1vh) * 20);
  margin-bottom: 20vh;
  margin-bottom: calc(var(--vh, 1vh) * 20);
  width: 100%;

  opacity: ${({ opacity }) => opacity};

  background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.95) 100%),
    url(${() => navigationImageSrc});
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
