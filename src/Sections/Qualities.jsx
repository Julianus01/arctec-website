import React from 'react'
import styled from 'styled-components'
import { Anchor } from 'react-feather'
import { Subtitle, Text } from '../styled'

const Qualities = () => (
  <Section>
    <Grid>
      <Left>
        <div>
          <Anchor size={60} color='#E5E5E5' />
          <Subtitle>Weight</Subtitle>
          <Text>We lift the load that you will never have to.</Text>
        </div>
        <div>
          <Anchor size={60} color='#E5E5E5' />
          <Subtitle>Weight</Subtitle>
          <Text>We lift the load that you will never have to.</Text>
        </div>
        <div>
          <Anchor size={60} color='#E5E5E5' />
          <Subtitle>Weight</Subtitle>
          <Text>We lift the load that you will never have to.</Text>
        </div>
      </Left>

      <Middle>
        <div>4</div>
        <div>5</div>
        <div>6</div>
      </Middle>

      <Right>
        <div>
          <Anchor size={60} color='#E5E5E5' />
          <Subtitle>Weight</Subtitle>
          <Text>We lift the load that you will never have to.</Text>
        </div>
        <div>
          <Anchor size={60} color='#E5E5E5' />
          <Subtitle>Weight</Subtitle>
          <Text>We lift the load that you will never have to.</Text>
        </div>
        <div>
          <Anchor size={60} color='#E5E5E5' />
          <Subtitle>Weight</Subtitle>
          <Text>We lift the load that you will never have to.</Text>
        </div>
      </Right>
    </Grid>
  </Section>
)

export default Qualities

const Section = styled.section`
  height: 100vh;
  width: 100%;
  margin: auto;
  max-width: 1000px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`

const Grid = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
`

const Left = styled.div`
  grid-column: 1;
  grid-row: 1 / 4;

  display: grid;
`

const Middle = styled.div`
  grid-column: 2;
  grid-row: 1 / 4;

  display: flex;
  align-items: center;
  justify-content: center;
`

const Right = styled.div`
  grid-column: 3;
  grid-row: 1 / 4;

  display: grid;
  justify-content: flex-end;
`
