import { useState } from 'react'
import './App.css'
import AnimatedBackground from './components/AnimatedBackground'
import IntroCard from './components/IntroCard'
import Envelope from './components/Envelope'
import LetterCard from './components/LetterCard'
import Carousel from './components/Carousel'
import BackButton from './components/BackButton'
import MusicPlayer from './components/MusicPlayer'
import TimeCounter from './components/TimeCounter'

type AppState = 'intro' | 'time' | 'envelope' | 'letter' | 'carousel'

function App() {
  const [currentState, setCurrentState] = useState<AppState>('intro')

  const handleIntroNext = () => {
    setCurrentState('time')
  }

  const handleTimeNext = () => {
    setCurrentState('envelope')
  }

  const handleEnvelopeOpen = () => {
    setCurrentState('letter')
  }

  const handleLetterExpand = () => {
    setCurrentState('carousel')
  }

  const handleBack = () => {
    if (currentState === 'time') {
      setCurrentState('intro')
    } else if (currentState === 'envelope') {
      setCurrentState('time')
    } else if (currentState === 'letter') {
      setCurrentState('envelope')
    } else if (currentState === 'carousel') {
      setCurrentState('letter')
    }
  }

  return (
    <div className="relative min-h-screen overflow-hidden">
      <AnimatedBackground />
      <BackButton onBack={handleBack} show={currentState !== 'intro'} />
      <MusicPlayer />
      
      {currentState === 'intro' && <IntroCard onNext={handleIntroNext} />}
      {currentState === 'time' && <TimeCounter onNext={handleTimeNext} />}
      {currentState === 'envelope' && <Envelope onOpen={handleEnvelopeOpen} />}
      {currentState === 'letter' && <LetterCard onExpand={handleLetterExpand} />}
      {currentState === 'carousel' && <Carousel />}
    </div>
  )
}

export default App
