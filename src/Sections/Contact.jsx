import React from 'react'
import styled from 'styled-components'
import { Title, Button, Input, Textarea } from '../styled'
import Fade from 'react-reveal/Fade'

const Contact = () => {
  return (
    <Fade bottom>
      <Section>
        <Wrapper>
          <Title>Work with us</Title>

          <Content>
            <PersonalInformationWrapper>
              <Input
                style={{ marginBottom: 20 }}
                label='Full Name'
                placeholder='Name...'
              />
              <Input
                style={{ marginBottom: 20 }}
                label='Email'
                placeholder='Email...'
              />
              <Input label='Phone Number' placeholder='Phone Number...' />
            </PersonalInformationWrapper>

            <MessageWrapper>
              <Textarea
                style={{ height: '100%' }}
                label='Message'
                placeholder='Description...'
              />
            </MessageWrapper>

            <Footer>
              <Button>Send</Button>
            </Footer>
          </Content>
        </Wrapper>
      </Section>
    </Fade>
  )
}

export default Contact

const Section = styled.section`
  /* min-height: 100vh; */
  width: 90%;
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 6vh;
  padding-bottom: 6vh;
  flex: 1;
`

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const PersonalInformationWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-right: 40px;

  @media screen and (max-width: 992px) {
    margin-right: 20px;
  }

  @media screen and (max-width: 768px) {
    margin-right: 0px;
    margin-bottom: 20px;
  }
`

const MessageWrapper = styled.div`
  flex: 1;
  margin-left: 40px;

  @media screen and (max-width: 992px) {
    margin-left: 20px;
  }

  @media screen and (max-width: 768px) {
    margin-left: 0px;
    flex: auto;
    width: 100%;
    min-height: 300px;
  }
`

const Footer = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: flex-end;
  width: 100%;
`
