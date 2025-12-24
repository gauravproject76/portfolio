import React from 'react'
import NavBar from './components/NavBar'
import Content from './components/Content'
import Hero from './components/Hero'

const App = () => {
  return (
    <main>
        <NavBar/>
        <Hero/>
        <Content/>
    </main>
  )
}

export default App