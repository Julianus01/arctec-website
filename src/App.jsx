import React from 'react'

// Sections
import Hero from './Sections/Hero'
import Vision from './Sections/Vision'
import Services from './Sections/Services'
import CallToAction from './Sections/CallToAction'
import Contact from './Sections/Contact'
import BigWord from './Sections/BigWord'
import Qualities from './Sections/Qualities'
import IphoneX from './Sections/IphoneX'

const App = () => (
  <React.Fragment>
    <Hero />
    <Vision />
    <Services />
    <Qualities />
    <CallToAction />
    <BigWord word="Quality." />
    <IphoneX />
    <Contact />
  </React.Fragment>
)

export default App
