import React from 'react'
import styled from 'styled-components'
import IphoneXImg from '../assets/images/iphoneX.png'
import { Text } from '../styled'

const IphoneX = () => (
  <Section>
    <Container>
      <Absolute>
        <Card>
          <Text>Hello there</Text>
        </Card>

        <Card>
          <Text>I hear your business rocks :)</Text>
        </Card>
      </Absolute>

      <IphoneImage />
    </Container>
  </Section>
)

export default IphoneX

const Section = styled.section`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`

const IphoneImage = styled.img.attrs({ src: IphoneXImg })`
  height: 90vh;
  width: auto;
`

const Absolute = styled.div`
  position: absolute;
  top: 50px;
  right: 30px;
  bottom: 25px;
  left: 30px;
  border-radius: 40px;
  padding-top: 20px;
`

const Card = styled.div`
  display: flex;
  background-color: rgba(255, 255, 255, 0.1);
  padding: 10px 20px;
  border-radius: 10px;
  margin: 10px 0;
`
