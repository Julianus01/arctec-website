import React from 'react'
import { Title } from '../styled'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'

const BigWord = ({ word, opacity = 1 }) => (
  <Section opacity={opacity}>
    <Fade>
      <Title style={{ marginBottom: 0 }}>{word}</Title>
    </Fade>
  </Section>
)

export default BigWord

const Section = styled.section`
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  opacity: ${({ opacity }) => opacity};
`
