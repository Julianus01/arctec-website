import React from 'react'
import styled, { css } from 'styled-components'
import { Button } from '../styled'
import { X } from 'react-feather'

const Popup = ({ showPopup, onClose, children }) => (
  <PopupWrapper showPopup={showPopup}>
    <PopupOverlay>
      <PopupContent showPopup={showPopup}>
        <ClosePopupButton onClick={onClose}>
          <X size={30} color="white" />
        </ClosePopupButton>
        {children}
      </PopupContent>
    </PopupOverlay>
  </PopupWrapper>
)

export default Popup

const PopupWrapper = styled.div`
  position: fixed;
  pointer-events: none;
  display: flex;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  width: 100%;
`

const PopupOverlay = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  flex: 1;
  margin-left: auto;
  margin-right: auto;
  max-width: 1400px;
  padding: 15px;
  padding-right: 50px;

  @media screen and (max-width: 768px) {
    padding-right: 15px;
  }

  * {
    pointer-events: all;
  }
`

const PopupContent = styled.div`
  transition: transform 0.3s ease-in-out;
  transform: translate(0%, 140%);
  position: relative;
  flex: 1;
  display: flex;
  justify-content: flex-end;
  ${({ showPopup }) =>
    showPopup &&
    css`
      transform: translate(0%, 0%);
    `}
`

const ClosePopupButton = styled(Button)`
  position: absolute;
  transform: translate(-50%, -50%);
  padding-bottom: 40px;
  box-shadow: 4px 10px 20px rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  border: 0;
  background-color: #1a1a1a;
  padding: 10px;
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
    background-color: #1a1a1a;
  }
`
