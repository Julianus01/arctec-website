import React from 'react'
import styled from 'styled-components'

const Title = styled.h1`
  font-size: 80px;
  color: white;
  margin: 0;
  margin-bottom: 40px;
`

const Subtitle = styled.h2`
  font-size: 25px;
  color: white;
  margin: 0;
  margin-bottom: 20px;
`

const Text = styled.p`
  font-size: 20px;
  color: #afafaf;
  margin: 0;
`

const Button = styled.button`
  color: white;
  background-color: black;
  font-size: 25px;
  padding: 20px 80px;

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
`

const Label = styled.label`
  font-size: 20px;
  color: #afafaf;
  margin-bottom: 10px;
`

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const InputStyled = styled.input`
  background-color: #1A1A1A;
  border: 0;
  color: white;
  padding: 13px 20px;
  font-size: 20px;

  ::placeholder {
    font-style: italic;
  }

  :focus {
    outline: none;
  }
`

const Input = ({ label, placeholder, ...rest }) => (
  <InputContainer {...rest}>
    <Label>{label}</Label>
    <InputStyled placeholder={placeholder} type="text" />
  </InputContainer>
)

export { Title, Subtitle, Text, Button, Input }
