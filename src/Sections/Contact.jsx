import React, { useState } from "react"
import styled from "styled-components"
import { Title, Input, Text, Subtitle, Button, Label } from "../styled"
import { Phone, Mail, ZoomIn, Sliders, ZoomOut } from "react-feather"
import IosSpinner from "./IosSpinner"
import api from "../api"
import Rodal from "rodal"
import "rodal/lib/rodal.css"
import { async } from "q"
import { useEffect } from "react"

const wait = timer => new Promise(resolve => setTimeout(resolve, timer))

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window
  return {
    width,
    height
  }
}

export function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions())

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions())
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return windowDimensions
}

const Contact = () => {
  const [contactChoice, setContactChoice] = useState("phone")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const [showPhoneError, setShowPhoneError] = useState(false)
  const [showEmailError, setShowEmailError] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const { width } = useWindowDimensions();

  const closeModal = () => {
    setShowModal(false)
  }

  const onPhoneNumberChange = event => {
    setPhoneNumber(event.target.value.replace(/\D/, ""))
  }

  const onEmailChange = event => {
    setEmail(event.target.value)
  }

  const onContactChoiceChange = () => {
    if (contactChoice === "phone") {
      setContactChoice("email")
      setShowPhoneError(false)
      return
    }
    setShowEmailError(false)
    setContactChoice("phone")
  }

  const sendEmailWithClientInfo = async () => {
    if (contactChoice === "email" && validateEmailAddress() === true) {
      setLoading(true)
      setTimeout(() => setLoading(false), 5000)
      await wait(5000)
      setShowModal(true)
      setTimeout(() => closeModal(), 5000)
    }

    if(contactChoice === "phone" && validatePhoneNumber() === true){
    setLoading(true)
    setTimeout(() => setLoading(false), 5000)
    await wait(5000)
    setShowModal(true)
    // setTimeout(() => closeModal(), 5000)
    
  }

  return

  }

  const validatePhoneNumber = () => {
    if (phoneNumber.length < 8 || phoneNumber.length > 12) {
      setShowPhoneError(true)
      setTimeout(() => setShowPhoneError(false), 5000)

      return false
    }

    return true
  }

  const validateEmailAddress = () => {
    if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {
      return true
    }

    setShowEmailError(true)
    setTimeout(() => setShowEmailError(false), 5000)

    return false
  }

  return (
    <Section>
      <Wrapper>
        {width <= "750" && (
          <React.Fragment>
          <Rodal
            visible={showModal}
            onClose={closeModal}
            showCloseButton={false}
            animation="slideUp"
            width="fit-content"
            height="100"
            customStyles={{
              maxWidth: "1400px",
              top: "50%",
              marginLeft: "5px",
              marginRight: "5px",
              backgroundImage:
                "-webkit-linear-gradient(top, rgba(38, 38, 38, 0.7) 0%, #000000 100%)"
            }}
          >
            {contactChoice === "phone" && <Modal>We recieved your phone number !</Modal>}
            {contactChoice === "email" && <Modal>We recieved your email !</Modal>}
            <div>We'll keep in touch</div>
            <CloseModalButton onClick={closeModal}>Close</CloseModalButton>
          </Rodal>
          
          </React.Fragment>
        )}

        {width > "750" && (
          <Rodal
            visible={showModal}
            onClose={closeModal}
            animation="slideUp"
            width="400"
            height="100"
            customStyles={{
              maxWidth: "1400px",
              left: "50%",
              right: "50%",
              top: "50%",
              backgroundImage:
                "-webkit-linear-gradient(top, rgba(38, 38, 38, 0.7) 0%, #000000 100%)"
            }}
          >
            {contactChoice === "phone" && <Modal>We recieved your phone number !</Modal>}
            {contactChoice === "email" && <Modal>We recieved your email !</Modal>}
            <div>We'll keep in touch</div>
          </Rodal>
        )}

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
            {showPhoneError === true && (
              <ErrorMessage>Phone number must be between 8 and 12 numbers</ErrorMessage>
            )}
            {showEmailError === true && <ErrorMessage>Email must be a valid email</ErrorMessage>}

            <SendButton disabled={loading} onClick={sendEmailWithClientInfo}>
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
  padding-top: 0;
  padding-bottom: 0;
  margin-right: 2px;
  height: 80px;

  opacity: ${props => (props.disabled ? 0.6 : 1)};

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
const Modal = styled.p`
  display: flex;
  justify-content: center;
  align-content: center;
`
const CloseModalButton = styled.button`
width: 100%;
height: 30px; 
background-color: #afafaf;
 bottom: -20%; 
 position: absolute;
 border: 0;
 left:0;
 right:0;
`