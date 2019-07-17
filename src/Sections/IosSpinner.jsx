import React from "react"
import styled from "styled-components"

const IosSpinner = () => (
  <SpinnerContainer>
    <div class="bar1" />
    <div class="bar2" />
    <div class="bar3" />
    <div class="bar4" />
    <div class="bar5" />
    <div class="bar6" />
    <div class="bar7" />
    <div class="bar8" />
    <div class="bar9" />
    <div class="bar10" />
    <div class="bar11" />
    <div class="bar12" />
  </SpinnerContainer>
)

export default IosSpinner

const SpinnerContainer = styled.div`
  position: relative;
  width: 18px;
  height: 18px;
  display: inline-block;
  padding: 10px;
  border-radius: 10px;

  div {
    width: 6%;
    height: 16%;
    background: #fff;
    position: absolute;
    left: 49%;
    top: 43%;
    opacity: 0;
    border-radius: 50px;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
    animation: fade 1s linear infinite;
  }

  @keyframes fade {
    from {
      opacity: 1;
    }
    to {
      opacity: 0.25;
    }
  }

  div.bar1 {
    transform: rotate(0deg) translate(0, -130%);
    animation-delay: 0s;
  }

  div.bar2 {
    transform: rotate(30deg) translate(0, -130%);
    animation-delay: -0.9167s;
  }

  div.bar3 {
    transform: rotate(60deg) translate(0, -130%);
    animation-delay: -0.833s;
  }
  div.bar4 {
    transform: rotate(90deg) translate(0, -130%);
    animation-delay: -0.7497s;
  }
  div.bar5 {
    transform: rotate(120deg) translate(0, -130%);
    animation-delay: -0.667s;
  }
  div.bar6 {
    transform: rotate(150deg) translate(0, -130%);
    animation-delay: -0.5837s;
  }
  div.bar7 {
    transform: rotate(180deg) translate(0, -130%);
    animation-delay: -0.5s;
  }
  div.bar8 {
    transform: rotate(210deg) translate(0, -130%);
    animation-delay: -0.4167s;
  }
  div.bar9 {
    transform: rotate(240deg) translate(0, -130%);
    animation-delay: -0.333s;
  }
  div.bar10 {
    transform: rotate(270deg) translate(0, -130%);
    animation-delay: -0.2497s;
  }
  div.bar11 {
    transform: rotate(300deg) translate(0, -130%);
    animation-delay: -0.167s;
  }
  div.bar12 {
    transform: rotate(330deg) translate(0, -130%);
    animation-delay: -0.0833s;
  }
`
