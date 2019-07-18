import React, { useState, useEffect } from "react"
import Loading from "./Loading"

// Sections
import Hero from "./Sections/Hero"
import Vision from "./Sections/Vision"
import Services from "./Sections/Services"
import Contact from "./Sections/Contact"
import Qualities from "./Sections/Qualities"
import ScrollTransition from "./Sections/ScrollTransition"

const wait = timer => new Promise(resolve => setTimeout(resolve, timer))

const App = () => {
  const [loading, setLoading] = useState(true)
  const [showApp, setShowApp] = useState(false)

  useEffect(() => {
    const triggerLoadingAnimation = async () => {
      await wait(800)
      setLoading(false)
      await wait(1000)
      setShowApp(true)
    }

    triggerLoadingAnimation()
  }, [])

  // if (!showApp) return <Loading loading={loading} />

  return (
    <React.Fragment>
      <Hero />
      <Vision />
      <Services />
      <Qualities />
      <ScrollTransition />
      <Contact />
    </React.Fragment>
  )
}

export default App
