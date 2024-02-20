import React from 'react'
import Nav from './components/ui/Nav'
import './App.css'
import About from './pages/about/About'

const App = () => {
  return (
    <div className='App'>
      <Nav/>
      <About/>
    </div>
  )
}

export default App