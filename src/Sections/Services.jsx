import React, { useState } from 'react'
import styled from 'styled-components'
import { Title, TabButton } from '../styled'
import Fade from 'react-reveal/Fade'
import { WebServices, MobileServices } from './ServicesContent'

const Services = () => {
  const [selectedTab, setSelectedTab] = useState('web')

  return (
    <Section>
      <Wrapper>
        <Fade>
          <div style={{ width: '90%', maxWidth: 1400, margin: 'auto' }}>
            <Title>Services</Title>
          </div>
        </Fade>

        <Content>
          {selectedTab === 'web' && <WebServices />}

          {selectedTab === 'mobile' && <MobileServices />}
        </Content>
        <Footer>
          <TabButton active={selectedTab === 'web'} onClick={() => setSelectedTab('web')}>
            Web
          </TabButton>

          <TabButton active={selectedTab === 'mobile'} onClick={() => setSelectedTab('mobile')}>
            Mobile
          </TabButton>
        </Footer>
      </Wrapper>
    </Section>
  )
}

export default Services

const Section = styled.section`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  margin-bottom: 20vh;
  margin-bottom: calc(var(--vh, 1vh) * 20);
  outline: none;
  overflow-x: hidden;

  @media screen and (max-width: 768px) {
    margin-bottom: 10vh;
    margin-bottom: calc(var(--vh, 1vh) * 10);
  }
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 6vh;
  padding-top: calc(var(--vh, 1vh) * 6);
  padding-bottom: 6vh;
  padding-bottom: calc(var(--vh, 1vh) * 6);
  flex: 1;
`

const Content = styled.div`
  width: 95%;
  max-width: 1500px;
  margin: 0 auto;
  flex: 1;
  -webkit-overflow-scrolling: touch;
  position: relative;
  margin-bottom: 40px;
  display: flex;
  overflow-x: auto;
  -ms-overflow-style: none;

  @media screen and (max-width: 768px) {
    width: 100%;
    ::-webkit-scrollbar {
      display: none;
    }
  }

  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }
  ::-webkit-scrollbar-button {
    width: 0px;
    height: 0px;
  }
  ::-webkit-scrollbar-thumb {
    background: #1a1a1a;
    border: 0px none #ffffff;
    border-radius: 50px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #1a1a1a;
  }
  ::-webkit-scrollbar-thumb:active {
    background: #1a1a1a;
  }
  ::-webkit-scrollbar-track {
    background: transparent;
    border: 0px none #ffffff;
    border-radius: 50px;
  }
  ::-webkit-scrollbar-track:hover {
    background: transparent;
  }
  ::-webkit-scrollbar-track:active {
    background: transparent;
  }
  ::-webkit-scrollbar-corner {
    background: transparent;
  }
`

const Footer = styled.div`
  display: flex;
  max-width: 1400px;
  width: 90%;
  margin: auto;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`
