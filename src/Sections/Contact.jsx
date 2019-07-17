import React, { useState } from "react"
import styled from "styled-components"
import { Title, Input, Text, Subtitle, Button, Label } from "../styled"
import { Phone, Mail } from "react-feather"
import IosSpinner from "./IosSpinner"

const wait = timer => new Promise(resolve => setTimeout(resolve, timer))

const Contact = () => {
  const [contactChoice, setContactChoice] = useState("phone")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)

  const onPhoneNumberChange = event => {
    setPhoneNumber(event.target.value.replace(/\D/, ""))
  }

  const onEmailChange = event => {
    setEmail(event.target.value)
  }

  const onContactChoiceChange = () => {
    if (contactChoice === "phone") {
      setContactChoice("email")
      return
    }

    setContactChoice("phone")
  }

  const sendEmailWithClientInfo = async () => {}

  return (
    <Section>
      <Wrapper>
        <Title>Work with us</Title>

        <Content>
          <Label>Leave an email or phone number, we'll be in touch</Label>
          <div style={{ display: "flex" }}>
            <ChoiceButton onClick={onContactChoiceChange}>
              {contactChoice === "email" && <Phone size={30} color="#afafaf" />}
              {contactChoice === "phone" && <Mail size={30} color="#afafaf" />}
            </ChoiceButton>

            {contactChoice === "phone" && (
              <Input
                type="tel"
                value={phoneNumber}
                onChange={onPhoneNumberChange}
                style={{ width: "100%" }}
                leftIcon={<Phone size={30} color="#afafaf" />}
                placeholder="Phone number..."
              />
            )}

            {contactChoice === "email" && (
              <Input
                value={email}
                onChange={onEmailChange}
                style={{ width: "100%" }}
                leftIcon={<Mail size={30} color="#afafaf" />}
                placeholder="Email address..."
              />
            )}
          </div>

          <ActionContainer>
            {/* <ErrorMessage>Phone number must be between 8 and 12 numbers</ErrorMessage> */}
            {/* <ErrorMessage>Email must be a valid email</ErrorMessage> */}

            <SendButton onClick={sendEmailWithClientInfo}>
              {loading && <IosSpinner style={{ marginRight: 3 }} />}
              Send
            </SendButton>
          </ActionContainer>

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
  margin-bottom: 25vh;
  margin-bottom: calc(var(--vh, 1vh) * 25);
  border: 0;
  width: fit-content;
  margin-left: auto;
  margin-right: 0;
  padding-right: 0;
  padding-left: 0;

  display: flex;
  align-items: center;

  :hover {
    background-color: transparent;
  }
`

const ChoiceButton = styled(Button)`
  display: flex;
  justify-content: center;
  border: 0;
  background-color: #1a1a1a;
  padding: 0 20px;
  margin-right: 10px;
  border-radius: 5px;
  transition: transform 0.15s ease-in-out;

  :hover {
    transform: scale(1.05);
  }
`

const ActionContainer = styled.div`
  display: flex;
`

const ErrorMessage = styled(Text)`
  flex: 1;
  margin-right: 50px;
  margin-top: 25px;
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
