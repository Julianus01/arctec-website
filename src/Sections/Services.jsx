import React, { useState } from 'react'
import styled from 'styled-components'
import { Title, TabButton } from '../styled'
import Fade from 'react-reveal/Fade'

const Services = () => {
  const [selectedTab, setSelectedTab] = useState('web')

  return (
    <Fade>
      <Section>
        <Wrapper>
          <Title>Services</Title>

          <Content>
            {selectedTab === 'web' && <div>WEB</div>}

            {selectedTab === 'mobile' && <div>MOBILE</div>}
          </Content>

          <Footer>
            <TabButton
              active={selectedTab === 'web'}
              onClick={() => setSelectedTab('web')}
            >
              Web
            </TabButton>

            <TabButton
              active={selectedTab === 'mobile'}
              onClick={() => setSelectedTab('mobile')}
            >
              Mobile
            </TabButton>
          </Footer>
        </Wrapper>
      </Section>
    </Fade>
  )
}

export default Services

const Section = styled.section`
  height: 100vh;
  width: 90%;
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  margin-bottom: 20vh;

  @media screen and (max-width: 768px) {
    margin-bottom: 10vh;
  }
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
