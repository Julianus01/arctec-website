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
          <div style={{ maxWidth: 1400, margin: "auto", width: "100%" }}>
            <Title>Services</Title>
          </div>
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
  outline: none;
  overflow-x: hidden;
  padding: 5%;

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
  margin: 0 -50px;
  margin-right: 0px;
  @media screen and (max-width: 930px) {
    flex: 1;
    left: 35px;
    -webkit-overflow-scrolling: touch;
    position: relative;
    margin-bottom: 40px;
    display: flex;
    overflow-x: auto;
    scrollbar-width: none;
    -ms-overflow-style: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`

const Footer = styled.div`
  display: flex;
  max-width: 1400px;
  width: 90%;
  margin: auto;
`

