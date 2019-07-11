import React, { useState } from "react"
import styled from "styled-components"
import { Title, TabButton } from "../styled"
import Fade from "react-reveal/Fade"
import { WebServices, MobileServices } from "./ServicesContent"

const Services = () => {
  const [selectedTab, setSelectedTab] = useState("web")

  return (
    <Section>
      <Wrapper>
        <Fade>
          <Title>Services</Title>
        </Fade>

        <Content>
          {selectedTab === "web" && <WebServices />}
          {selectedTab === "mobile" && <MobileServices />}
        </Content>

        <Footer>
          <TabButton active={selectedTab === "web"} onClick={() => setSelectedTab("web")}>
            Web
          </TabButton>

          <TabButton active={selectedTab === "mobile"} onClick={() => setSelectedTab("mobile")}>
            Mobile
          </TabButton>
        </Footer>
      </Wrapper>
    </Section>
  )
}

export default Services

const Section = styled.section`
  width: 90%;
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  margin-bottom: 20vh;
  margin-bottom: calc(var(--vh, 1vh) * 20);

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
  flex: 1;
  -webkit-overflow-scrolling: touch;
  position: relative;
  margin-bottom: 40px;
  margin-left: -40px;
  margin-right: -40px;
  display: flex;
  overflow-x: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }

  @media screen and (max-width: 768px) {
    margin-left: -20px;
    margin-right: -20px;
  }
`

const Footer = styled.div`
  display: flex;
`
