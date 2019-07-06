import React from 'react'
import { Title } from '../styled'
import styled from 'styled-components'

const BigWord = ({ word }) => (
  <Section>
    <Title>{word}</Title>
  </Section>
)

export default BigWord

const Section = styled.section`
  height: 100vh;
  margin-top: 10vh;
  margin-bottom: 20vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`
