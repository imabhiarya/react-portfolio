import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Projects from './components/Projects'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-full h-auto'>
      <div className='flex flex-col items-center '>
          <Header />
          <Home />
          <Skills />
          <Projects />
          <Contact />
          
      </div>

    </div>
  )
}

export default App
