import React from "react"
import styled from "styled-components"
import { Subtitle, Text } from "../styled"
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

export const WebServices = () => (
  <React.Fragment>
    <FakeMargin />
    <Service>
      <IconGroup>
        <Package color="#AFAFAF" size={50} />
      </IconGroup>

      <Subtitle>Full package</Subtitle>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus dolorum eos amet
        delectus officia
      </Text>
    </Service>

    <Service>
      <IconGroup>
        <Edit2 color="#AFAFAF" size={50} />
      </IconGroup>

      <Subtitle>Well Designed</Subtitle>
      <Text>
        We believe design is intelligence made visible. It’s not a matter of wanting a good design,
        it’s a matter of <b>must</b> having a good design
      </Text>
    </Service>

    <Service>
      <IconGroup>
        <Zap color="#AFAFAF" size={50} />
      </IconGroup>

      <Subtitle>Lightning Fast</Subtitle>
      <Text>
        Performance is just a side effect of a well executed and organized product development. We
        offer that with discipline.
      </Text>
    </Service>

    <Service>
      <IconGroup>
        <Cloud color="#AFAFAF" size={50} />
      </IconGroup>

      <Subtitle>Power of Cloud</Subtitle>
      <Text>
        By taking advantage of the cloud technology, we are able to provide delivery and reliability
        at a blink of an eye.
      </Text>
    </Service>

    <Service>
      <IconGroup>
        <Database color="#AFAFAF" size={50} />
      </IconGroup>

      <Subtitle>Secure storage</Subtitle>
      <Text>
        Private data should remain…private. In the true sense of the word, we are keeping your data
        protected and well secured.
      </Text>
    </Service>
    <FakeMargin />
  </React.Fragment>
)

export const MobileServices = () => (
  <React.Fragment>
    <FakeMargin />
    <Service>
      <IconGroup>
        <i className="fab fa-apple" style={{ marginRight: 20 }} />

        <i className="fab fa-android" />
      </IconGroup>

      <Subtitle>Cross platform</Subtitle>
      <Text>
        iOS and Android may be two different mobile platforms, but their goal is the same, to serve
        good applications. We do that for both of them.
      </Text>
    </Service>

    <Service>
      <IconGroup>
        <UserCheck color="#AFAFAF" size={50} />
      </IconGroup>
      <Subtitle>User friendly</Subtitle>
      <Text>
        The product is not an obstacle, it’s here to help. We reflect this by designing an easy to
        use and intuitive experience from the moment the app is opened.
      </Text>
    </Service>

    <Service>
      <IconGroup>
        <BatteryCharging color="#AFAFAF" size={50} />
      </IconGroup>
      <Subtitle>Performance</Subtitle>
      <Text>We want your phone to compete with computers in application performance.</Text>
    </Service>

    <Service>
      <IconGroup>
        <Shield color="#AFAFAF" size={50} />
      </IconGroup>
      <Subtitle>Secure</Subtitle>
      <Text>
        Your phone can keep pictures, phone numbers, videos and so much more…but can it keep it
        private? We assure a secured and private way of utilizing applications.
      </Text>
    </Service>

    <Service>
      <IconGroup>
        <Edit2 color="#AFAFAF" size={50} />
      </IconGroup>

      <Subtitle>Well Designed</Subtitle>
      <Text>
        We believe design is intelligence made visible. It’s not a matter of wanting a good design,
        it’s a matter of <b>must</b> having a good design
      </Text>
    </Service>
    <FakeMargin />
  </React.Fragment>
)

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

const IconGroup = styled.div`
  display: flex;
  margin-bottom: 20px;
`
