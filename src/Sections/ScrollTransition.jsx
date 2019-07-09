import React from 'react'
import styled from 'styled-components'
import { Controller, Scene } from 'react-scrollmagic'
import CallToAction from './CallToAction'
import BigWord from './BigWord'

const ScrollTransition = () => (
  <Controller>
    <Scene offset={window.innerHeight / 4} duration={300} reverse>
      {progress => (
        <Container>
          {progress < 0.5 && (
            <ScreenAbsolute style={{ opacity: 1 - progress * 2 }}>
              <CallToAction />
            </ScreenAbsolute>
          )}

          {progress > 0.5 && (
            <ScreenAbsolute style={{ opacity: progress }}>
              <BigWord word='Quality.' />
            </ScreenAbsolute>
          )}
        </Container>
      )}
    </Scene>
  </Controller>
)

export default ScrollTransition

const Container = styled.section`
  position: relative;
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  width: 100%;
`

const ScreenAbsolute = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`
