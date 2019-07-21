import React from 'react'
import styled from 'styled-components'
import { Title, Text } from '../styled'
import Fade from 'react-reveal/Fade'

const VisionSection = () => (
  <Section>
    <Fade bottom>
      <React.Fragment>
        <Title>Vision</Title>

        <Description style={{ marginBottom: 20 }}>
          Our vision is to create the perfect combination of great ideas that solve real needs,
          cutting edge design and smooth user experience, performance and reliability in order to
          deliver the highest fitting product for your business.
        </Description>
        <Description>
          Nobody knows how far technology can take us in productivity and efficiency...we plan on
          finding out.
        </Description>
      </React.Fragment>
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

const Description = styled(Text)`
  max-width: 700px;
`
