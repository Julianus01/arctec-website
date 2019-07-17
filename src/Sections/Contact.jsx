import React, { useState } from "react"
import styled from "styled-components"
import { Title, Input, Text, Subtitle, Button } from "../styled"
import { Phone } from "react-feather"
import IosSpinner from "./IosSpinner"

const Contact = () => {
  const [contactChoice, setContactChoice] = useState("phone")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [email, setEmail] = useState("")

  const onPhoneNumberChange = event => {
    setPhoneNumber(event.target.value.replace(/\D/, ""))
  }

  return (
    <Section>
      <Wrapper>
        <Title>Work with us</Title>

        <Content>
          <Input
            type="tel"
            value={phoneNumber}
            onChange={onPhoneNumberChange}
            style={{ width: "100%" }}
            leftIcon={<Phone size={30} color="#afafaf" />}
            placeholder="Phone number..."
            label="Leave us a phone number, we'll be in touch"
          />
          <SendButton>
            <IosSpinner />
            Send
          </SendButton>

          <Subtitle>Or contact us at</Subtitle>
          <Text style={{ marginBottom: 5 }}>office@arctec.ro</Text>
          <Text>0742 376 973</Text>
        </Content>
      </Wrapper>
    </Section>
  )
}

export default Contact

const Section = styled.section`
  width: 90%;
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
`

const SendButton = styled(Button)`
  margin-bottom: 15vh;
  padding-bottom: calc(var(--vh, 1vh) * 15);
  border: 0;
  width: fit-content;
  margin-left: auto;
  margin-right: 0;
  padding-right: 0;
  padding-left: 0;

  :hover {
    background-color: transparent;
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
  display: flex;
  flex-direction: column;
  max-width: 500px;
`
