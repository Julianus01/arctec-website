import React from 'react'
import styled from 'styled-components'
import IphoneXImg from '../assets/images/iphoneX.png'
import { Text } from '../styled'
import Fade from 'react-reveal/Fade'

const IphoneX = () => (
  <Fade bottom>
    <Section>
      <Container>
        <Absolute>
          <Content>
            <Card>
              <Text>Hello there</Text>
            </Card>

            <Card>
              <Text>I hear your business rocks :)</Text>
            </Card>

            <Card>
              <Text>Let's work together</Text>
            </Card>

            <Card>
              <Text>
                Hit me up so we can have a chat Hit me up so we can have a chat
                Hit me up so we can have a chat
              </Text>
            </Card>
          </Content>

          <Footer>
            <Card
              style={{ flex: 1, display: 'flex', justifyContent: 'center' }}
            >
              <Text>Team up</Text>
            </Card>
          </Footer>
        </Absolute>

        <IphoneImage />
      </Container>
    </Section>
  </Fade>
)

export default IphoneX

const Section = styled.section`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 40vh;

  @media screen and (max-width: 768px) {
    margin-bottom: 10vh;
  }
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
  bottom: 50px;
  left: 30px;
  border-radius: 40px;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
`

const Card = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 10px;
  margin: 10px 0;
`

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`

const Footer = styled.div`
  display: flex;
  flex: 1;
  align-items: flex-end;
`
