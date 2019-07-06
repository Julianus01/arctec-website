import React from 'react'
import styled from 'styled-components'
import { Title, Text } from '../styled'

const VisionSection = () => (
  <Section>
    <Title>Vision</Title>

    <Text>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five centuries, but
      also the leap into electronic typesetting, remaining essentially
      unchanged. It was popularised in the 1960s with the release of Letraset
      sheets containing Lorem Ipsum passages, and more recently with desktop
      publishing software like Aldus PageMaker including versions of Lorem Ipsum
    </Text>
  </Section>
)

export default VisionSection

const Section = styled.section`
  height: 100vh;
  width: 70%;
  max-width: 1000px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
`
