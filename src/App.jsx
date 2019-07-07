import React, { useState, useEffect } from 'react'
import Loading from './Loading'

// Sections
import Hero from './Sections/Hero'
import Vision from './Sections/Vision'
import Services from './Sections/Services'
import CallToAction from './Sections/CallToAction'
import Contact from './Sections/Contact'
import BigWord from './Sections/BigWord'
import Qualities from './Sections/Qualities'
import IphoneX from './Sections/IphoneX'

const wait = timer => new Promise(resolve => setTimeout(resolve, timer))

const App = () => {
  const [loading, setLoading] = useState(true)
  const [showApp, setShowApp] = useState(false)

  useEffect(() => {
    const appFlow = async () => {
      await wait(2500)
      setLoading(false)
      await wait(1000)
      setShowApp(true)
    }

    appFlow()
  }, [])

  // if (!showApp) return <Loading loading={loading} />

  return (
    <React.Fragment>
      <Hero />
      <Vision />
      <Services />
      <Qualities />
      <CallToAction />
      <BigWord word='Quality.' />
      <IphoneX />
      <Contact />
    </React.Fragment>
  )
}

export default App
