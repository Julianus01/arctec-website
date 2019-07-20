import React from 'react'
import styled from 'styled-components'

const Title = styled.h1`
  font-size: 80px;
  color: white;
  margin: 0;
  margin-bottom: 40px;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
`

const Subtitle = styled.h2`
  font-size: 25px;
  color: white;
  margin: 0;
  margin-bottom: 20px;

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`

const Text = styled.p`
  font-size: 20px;
  color: #afafaf;
  margin: 0;

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`

const Button = styled.button`
  color: white;
  background-color: transparent;
  font-size: 25px;
  padding: 20px 80px;
  border: 1px solid white;

  :focus {
    outline: none;
  }

  :active {
    border-style: solid;
  }

  :hover {
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.1);
  }

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`

export const Label = styled.label`
  font-size: 20px;
  color: #afafaf;
  margin-bottom: 10px;

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const TextareaStyled = styled.textarea`
  background-color: #1a1a1a;
  border: 0;
  color: white;
  padding: 13px 20px;
  font-size: 20px;
  height: 100%;
  resize: none;

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }

  ::placeholder {
    font-style: italic;
  }

  :focus {
    outline: none;
  }
`

const InputStyled = styled.input`
  background-color: transparent;
  border: 0;
  color: white;
  font-size: 20px;
  width: 100%;

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }

  ::placeholder {
    font-style: italic;
  }

  :focus {
    outline: none;
  }
`

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #1a1a1a;
  padding: 13px 20px;
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
`

const Input = ({ label, placeholder, leftIcon, className, disabled, style, ...rest }) => (
  <InputWrapper className={className} style={style}>
    {label && <Label>{label}</Label>}
    <InputContainer disabled={disabled}>
      {leftIcon && (
        <div style={{ marginRight: 13, display: 'flex', alignItems: 'center' }}>{leftIcon}</div>
      )}
      <InputStyled {...rest} placeholder={placeholder} />
    </InputContainer>
  </InputWrapper>
)

const Textarea = ({ label, placeholder, ...rest }) => (
  <InputWrapper {...rest}>
    <Label>{label}</Label>
    <TextareaStyled placeholder={placeholder} />
  </InputWrapper>
)

const TabPressable = styled.button`
  color: ${({ active }) => (active ? 'white' : '#373737')};
  border: 0;
  background-color: transparent;
  font-size: 25px;
  padding: 20px 80px;
  font-weight: bold;

  :focus {
    outline: none;
  }

  :active {
    border-style: solid;
  }

  :hover {
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    font-size: 16px;
    padding: 10px 40px;
  }
`

const TabButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Dot = styled.div`
  width: 10px;
  height: 10px;
  background-color: white;
  border-radius: 50%;

  @media screen and (max-width: 768px) {
    width: 5px;
    height: 5px;
  }
`

const TabButton = ({ active, children, ...rest }) => (
  <TabButtonWrapper {...rest}>
    <TabPressable active={active}>{children}</TabPressable>
    {active && <Dot />}
  </TabButtonWrapper>
)

export { Title, Subtitle, Text, Button, Input, Textarea, TabButton }
