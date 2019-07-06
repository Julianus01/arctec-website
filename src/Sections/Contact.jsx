import React from 'react'
import styled from 'styled-components'
import { Title, Button, Input } from '../styled'

const Contact = () => {
  return (
    <Section>
      <Wrapper>
        <Title style={{ marginBottom: 100 }}>Work with us</Title>

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
            <Input
              style={{ marginBottom: 20 }}
              label='Phone Number'
              placeholder='Phone Number...'
            />
          </PersonalInformationWrapper>

          <MessageWrapper>
            <Input label='Message' placeholder='Description...' />
          </MessageWrapper>
        </Content>

        <Footer>
          <Button>Send</Button>
        </Footer>
      </Wrapper>
    </Section>
  )
}

export default Contact

const Section = styled.section`
  min-height: 100vh;
  width: 100%;
  max-width: 1000px;
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
  margin-bottom: 40px;
  /* flex: 1; */
`

const PersonalInformationWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-right: 40px;
`

const MessageWrapper = styled.div`
  flex: 1;
  margin-left: 40px;
`

const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
`
