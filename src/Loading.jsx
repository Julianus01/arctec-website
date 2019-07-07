import React from 'react'
import Loader from 'react-loader-spinner'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'

const Loading = ({ loading }) => (
  <Fade opposite when={loading}>
    <Container>
      <Loader type='Triangle' color='white' height='100' width='100' />
    </Container>
  </Fade>
)

export default Loading

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`
