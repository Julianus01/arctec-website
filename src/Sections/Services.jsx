import React, { useState } from "react"
import styled from "styled-components"
import { Title, TabButton, Subtitle, Text } from "../styled"
import Fade from "react-reveal/Fade"
import {
  Package,
  Database,
  Cloud,
  Edit2,
  UserCheck,
  Zap,
  BatteryCharging,
  Shield
} from "react-feather"

const Services = () => {
  const [selectedTab, setSelectedTab] = useState("web")

  return (
    <Section>
      <Wrapper>
        <Fade>
          <Title>Services</Title>
        </Fade>

        <Content>
          {selectedTab === "web" && (
            <React.Fragment>
              <Service>
                <IconGroup>
                  <Package color="#AFAFAF" size={50} />
                </IconGroup>

                <Subtitle>Full package</Subtitle>
                <Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus dolorum eos
                  amet delectus officia
                </Text>
              </Service>

              <Service>
                <IconGroup>
                  <Edit2 color="#AFAFAF" size={50} />
                </IconGroup>

                <Subtitle>Well Designed</Subtitle>
                <Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus dolorum eos
                  amet delectus officia
                </Text>
              </Service>

              <Service>
                <IconGroup>
                  <Zap color="#AFAFAF" size={50} />
                </IconGroup>

                <Subtitle>Lightning Fast</Subtitle>
                <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
              </Service>

              <Service>
                <IconGroup>
                  <Cloud color="#AFAFAF" size={50} />
                </IconGroup>

                <Subtitle>Power of Cloud</Subtitle>
                <Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus dolorum eos
                  amet delectus officia
                </Text>
              </Service>

              <Service>
                <IconGroup>
                  <Database color="#AFAFAF" size={50} />
                </IconGroup>

                <Subtitle>Secure storage</Subtitle>
                <Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus dolorum eos
                  amet delectus officia
                </Text>
              </Service>
              <FakeMargin />
            </React.Fragment>
          )}

          {selectedTab === "mobile" && (
            <React.Fragment>
              <Service>
                <IconGroup>
                  <i class="fab fa-apple" style={{ marginRight: 20 }} />

                  <i class="fab fa-android" />
                </IconGroup>

                <Subtitle>Cross platform</Subtitle>
                <Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus dolorum eos
                  amet delectus officia
                </Text>
              </Service>

              <Service>
                <IconGroup>
                  <UserCheck color="#AFAFAF" size={50} />
                </IconGroup>
                <Subtitle>User friendly</Subtitle>
                <Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus dolorum eos
                  amet delectus officia
                </Text>
              </Service>

              <Service>
                <IconGroup>
                  <BatteryCharging color="#AFAFAF" size={50} />
                </IconGroup>
                <Subtitle>Performance</Subtitle>
                <Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus dolorum eos
                  amet delectus officia
                </Text>
              </Service>

              <Service>
                <IconGroup>
                  <Shield color="#AFAFAF" size={50} />
                </IconGroup>
                <Subtitle>Secure</Subtitle>
                <Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus dolorum eos
                  amet delectus officia
                </Text>
              </Service>

              <Service>
                <IconGroup>
                  <Edit2 color="#AFAFAF" size={50} />
                </IconGroup>

                <Subtitle>Well Designed</Subtitle>
                <Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus dolorum eos
                  amet delectus officia
                </Text>
              </Service>
              <FakeMargin />
            </React.Fragment>
          )}
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

const Service = styled.div`
  flex: 0 0 100%;
  max-width: 300px;
  padding-top: 60px;
  padding-bottom: 80px;
  padding-left: 30px;
  padding-right: 30px;
  margin-left: 20px;
  margin-right: 20px;
  border-radius: 10px;
  max-height: 320px;

  background-image: -webkit-linear-gradient(top, rgba(38, 38, 38, 0.7) 0%, #000000 100%);

  @media screen and (max-width: 768px) {
    flex: 0 0 60%;
    margin-left: 10px;
    margin-right: 10px;
  }
`

const FakeMargin = styled.div`
  max-height: 300px;
  flex: 0 0 10px;
  background-color: black;
`

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

const IconGroup = styled.div`
  display: flex;
  margin-bottom: 20px;
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
