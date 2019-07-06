import React from 'react'
import styled from 'styled-components'
import { Title, Button } from '../styled'

const Services = () => (
  <Section>
    <Wrapper>
      <Title>Services</Title>
      <Content />
      <Footer>
        <Button style={{ border: 0, fontWeight: 'bold' }}>Web</Button>
        <Button style={{ border: 0, fontWeight: 'bold' }}>Mobile</Button>
      </Footer>
    </Wrapper>
  </Section>
)

export default Services

const Section = styled.section`
  height: 100vh;
  width: 100%;
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  margin-bottom: 40vh;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 6vh;
  padding-bottom: 6vh;
  flex: 1;
`

const Content = styled.div`
  flex: 1;
  background-color: rgba(255, 255, 255, 0.1);
  margin-bottom: 40px;
  border-radius: 10px;
`

const Footer = styled.div`
  display: flex;
`
