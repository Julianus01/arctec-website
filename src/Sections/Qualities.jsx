import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Anchor, Link2, Search, Crosshair, Heart, Box } from 'react-feather'
import { Subtitle, Text } from '../styled'
import iphoneXImg from '../assets/images/iphoneX.png'

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window
  return {
    width,
    height
  }
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  )

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions())
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return windowDimensions
}

function useIconSize() {
  const { width } = useWindowDimensions()

  return width > 650 ? 60 : 40
}

const Qualities = () => {
  const size = useIconSize()

  return (
    <Section>
      <Grid>
        <Quality>
          <Anchor size={size} color='#E5E5E5' style={{ marginBottom: 20 }} />
          <Subtitle style={{ marginBottom: 10 }}>Weight</Subtitle>
          <Description>
            We lift the load that you will never have to.
          </Description>
        </Quality>

        <Quality>
          <Link2 size={size} color='#E5E5E5' style={{ marginBottom: 20 }} />
          <Subtitle style={{ marginBottom: 10 }}>Commucation</Subtitle>
          <Description>
            In any collaboration, communication landed the business on the
            success line.
          </Description>
        </Quality>

        <Quality>
          <Search size={size} color='#E5E5E5' style={{ marginBottom: 20 }} />
          <Subtitle style={{ marginBottom: 10 }}>Proactive</Subtitle>
          <Description>
            In constant search of your company’s improvement.
          </Description>
        </Quality>

        <Quality>
          <Crosshair size={size} color='#E5E5E5' style={{ marginBottom: 20 }} />
          <Subtitle style={{ marginBottom: 10 }}>Clear Target</Subtitle>
          <Description>
            Aiming at success with the discipline of achieving it.
          </Description>
        </Quality>

        <Quality>
          <Heart size={size} color='#E5E5E5' style={{ marginBottom: 20 }} />
          <Subtitle style={{ marginBottom: 10 }}>Warm</Subtitle>
          <Description>
            Products that users will love, an unforgettable experience.
          </Description>
        </Quality>

        <Quality>
          <Box size={size} color='#E5E5E5' style={{ marginBottom: 20 }} />
          <Subtitle style={{ marginBottom: 10 }}>Quality</Subtitle>
          <Description>Top quality products, delivered on time.</Description>
        </Quality>
      </Grid>

      {/* <Extra style={{ flex: 1 }}>
        <img
          src={iphoneXImg}
          style={{ maxWidth: 200, width: '100%', height: 'auto' }} alt="loading..."
        />
  
        <Title>Well Designed</Title>
      </Extra> */}
    </Section>
  )
}

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
  margin-bottom: 200px;
  flex-wrap: wrap;

  @media screen and (max-width: 650px) {
    justify-content: flex-start;
  }
`

const Extra = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
`

const Description = styled(Text)`
  width: 200px;
`

const Quality = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
`
