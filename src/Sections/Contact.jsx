import React, { useState } from 'react'
import styled from 'styled-components'
import { Title, Input, Text, Subtitle, Button, Label } from '../styled'
import { Phone, Mail } from 'react-feather'
import IosSpinner from './IosSpinner'
import { useTemporaryMessage } from '../hooks'
import Popup from './Popup'
import api from '../api'

const wait = timer => new Promise(resolve => setTimeout(resolve, timer))

const Contact = () => {
  const [contactChoice, setContactChoice] = useState('phone')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, showError, hideError] = useTemporaryMessage()
  const [showPopup, setShowPopup] = useState(false)

  const onContactChoiceChange = () => {
    setContactChoice(contactChoice === 'phone' ? 'email' : 'phone')
    hideError()
  }

  const showSuccessPopup = () => {
    setShowPopup(true)
    setTimeout(() => setShowPopup(false), 5000)
  }

  const validatePhoneNumberAndSendMail = async () => {
    if (phoneNumber.length < 6 || phoneNumber.length > 14) {
      showError(`Phone number must be between 8 and 12 characters`)
      return
    }

    hideError()
    setLoading(true)

    api.sendMail({
      from: 'iulian.crisan@arctec.ro',
      to: 'office@arctec.ro',
      subject: 'New client from website',
      html: `<p>Phone number of client is  ${phoneNumber}</p>`
    })

    await wait(2000)
    setLoading(false)
    showSuccessPopup()
  }

  const validateEmailAddressAndSendMail = async () => {
    if (!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {
      showError(`Email must be a valid email`)
      return
    }

    hideError()
    setLoading(true)

    api.sendMail({
      from: 'iulian.crisan@arctec.ro',
      to: 'office@arctec.ro',
      subject: 'New client from website',
      html: `<p>Email of client is  ${email}</p>`
    })

    await wait(2000)
    setLoading(false)
    showSuccessPopup()
  }

  const sendMail = () => {
    contactChoice === 'phone' && validatePhoneNumberAndSendMail()
    contactChoice === 'email' && validateEmailAddressAndSendMail()
  }

  return (
    <Section>
      <Wrapper>
        <Title>Work with us</Title>
        <Content>
          <Label>Leave an email or phone number, we'll be in touch</Label>

          <div style={{ display: 'flex' }}>
            <ChoiceButton onClick={onContactChoiceChange}>
              {contactChoice === 'email' && <Phone color="#afafaf" />}
              {contactChoice === 'phone' && <Mail color="#afafaf" />}
            </ChoiceButton>

            {contactChoice === 'phone' && (
              <StyledInput
                type="tel"
                value={phoneNumber}
                disabled={loading}
                onKeyDown={({ key }) => key === 'Enter' && sendMail()}
                onChange={({ target: { value } }) => setPhoneNumber(value.replace(/\D/, ''))}
                style={{ width: '100%' }}
                leftIcon={<Phone size={30} color="#afafaf" />}
                placeholder="Phone number..."
              />
            )}

            {contactChoice === 'email' && (
              <StyledInput
                value={email}
                disabled={loading}
                onKeyDown={({ key }) => key === 'Enter' && sendMail()}
                onChange={({ target: { value } }) => setEmail(value)}
                style={{ width: '100%' }}
                leftIcon={<Mail size={30} color="#afafaf" />}
                placeholder="Email address..."
              />
            )}
          </div>

          <ActionContainer>
            {error && <ErrorMessage>{error}</ErrorMessage>}

            <SendButton disabled={loading} onClick={sendMail}>
              {loading && <IosSpinner style={{ marginRight: 3 }} />}
              Send
            </SendButton>
          </ActionContainer>

          <Popup showPopup={showPopup} onClose={() => setShowPopup(false)}>
            <Notification>
              <Subtitle style={{ color: 'white' }}>We received your contact!</Subtitle>
              <Text style={{ color: 'white' }}>
                We'll be in touch soon to have a discussion in more detail :)
              </Text>
            </Notification>
          </Popup>

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

  svg {
    width: 30px;
    height: 30px;

    @media screen and (max-width: 768px) {
      width: 20px;
      height: 20px;
    }
  }

  :hover {
    transform: scale(1.05);
  }
`

const ActionContainer = styled.div`
  display: flex;
`

const ErrorMessage = styled(Text)`
  flex: 1;
  font-style: italic;
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

const Notification = styled.div`
  padding-top: 40px;
  padding-bottom: 40px;
  padding-left: 25px;
  padding-right: 25px;
  border-radius: 15px;
  max-width: 400px;
  align-items: center;
  background-color: rgba(26, 26, 26, 0.99);

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`

const StyledInput = styled(Input)`
  svg {
    width: 30px;
    height: 30px;

    @media screen and (max-width: 768px) {
      width: 20px;
      height: 20px;
    }
  }
`
