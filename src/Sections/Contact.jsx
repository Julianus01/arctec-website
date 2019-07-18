import React, { useState } from "react"
import styled from "styled-components"
import { Title, Input, Text, Subtitle, Button } from "../styled"
import { Phone } from "react-feather"
import  sendMail  from "../api/index"
import api from "../api/index";
console.log(sendMail)

const Contact = () => {
  const [contactChoice, setContactChoice] = useState("phone")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [email, setEmail] = useState("")
  const [showError, setShowError] = useState(false)

  const onPhoneNumberChange = event => {
    setPhoneNumber(event.target.value.replace(/\D/, ""))
  }

  const validatePhoneNumber = () => {
    if (phoneNumber.length < 8 || phoneNumber.length > 12) {
      setShowError(true)
      setTimeout(() => setShowError(false), 5000)
      return 
    } 

    api.sendMail()
    
    console.log(showError)
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

          <div style={{ display: "flex" }}>
            {showError && <Error>You must enter a phone number between 8 and 12 characters !</Error>}
            <SendButton onClick={validatePhoneNumber}> Send</SendButton>
          </div>
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
const Error = styled.div`
  margin-top: 25px;
  flex: 1;
  font-size: 15px;
  color: red;
  width: fit-content;
`
