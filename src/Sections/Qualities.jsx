import React from "react"
import styled from "styled-components"
import { Anchor, Link2, Search, Crosshair, Heart, Clock } from "react-feather"
import { Subtitle, Text } from "../styled"
import Fade from "react-reveal/Fade"

const Qualities = () => (
  <Section>
    <Grid>
      <Fade bottom>
        <Quality>
          <Anchor color="#E5E5E5" style={{ marginBottom: 20 }} />
          <Subtitle style={{ marginBottom: 10 }}>Weight</Subtitle>
          <Description>We lift the load that you will never have to.</Description>
        </Quality>
      </Fade>

      <Fade bottom>
        <Quality>
          <Link2 color="#E5E5E5" style={{ marginBottom: 20 }} />
          <Subtitle style={{ marginBottom: 10 }}>Commucation</Subtitle>
          <Description>
            In any collaboration, communication landed the business on the success line.
          </Description>
        </Quality>
      </Fade>

      <Fade bottom>
        <Quality>
          <Search color="#E5E5E5" style={{ marginBottom: 20 }} />
          <Subtitle style={{ marginBottom: 10 }}>Proactive</Subtitle>
          <Description>In constant search of your company’s improvement.</Description>
        </Quality>
      </Fade>

      <Fade bottom>
        <Quality>
          <Crosshair color="#E5E5E5" style={{ marginBottom: 20 }} />
          <Subtitle style={{ marginBottom: 10 }}>Clear Target</Subtitle>
          <Description>Aiming at success with the discipline of achieving it.</Description>
        </Quality>
      </Fade>

      <Fade bottom>
        <Quality>
          <Heart color="#E5E5E5" style={{ marginBottom: 20 }} />
          <Subtitle style={{ marginBottom: 10 }}>Warm</Subtitle>
          <Description>Products that users will love, an unforgettable experience.</Description>
        </Quality>
      </Fade>

      <Fade bottom>
        <Quality>
          <Clock color="#E5E5E5" style={{ marginBottom: 20 }} />
          <Subtitle style={{ marginBottom: 10 }}>Time</Subtitle>
          <Description>Delivered on time, time is precious</Description>
        </Quality>
      </Fade>
    </Grid>
  </Section>
)

export default Qualities

const Section = styled.section`
  width: 90%;
  flex-direction: column;
  margin: auto;
  display: flex;
  color: white;
`

const Grid = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  @media screen and (max-width: 768px) {
    justify-content: flex-start;
  }
`

const Description = styled(Text)`
  width: 200px;
`

const Quality = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;

  svg {
    width: 60px;
    height: 60px;

    @media screen and (max-width: 768px) {
      width: 40px;
      height: 40px;
    }
  }
`
