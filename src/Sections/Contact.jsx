import React from 'react'
import styled from 'styled-components'
import { Title, Input } from '../styled'
import { Phone } from 'react-feather'

const Contact = () => (
  <Section style={{ marginBottom: 100 }}>
    <Wrapper>
      <Title>Work with us</Title>

      <Content>
        <Input
          style={{ width: '100%', marginBottom: 60 }}
          leftIcon={<Phone size={30} color='#afafaf' />}
          placeholder='Phone number...'
          label="Leave us a phone number, we'll be in touch"
        />
      </Content>
    </Wrapper>
  </Section>
)

export default Contact

const Section = styled.section`
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
  padding-top: calc(var(--vh, 1vh) * 6);
  padding-bottom: 6vh;
  padding-bottom: calc(var(--vh, 1vh) * 6);
  flex: 1;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  align-items: center;
`
