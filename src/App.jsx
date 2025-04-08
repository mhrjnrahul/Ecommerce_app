import React from 'react'
import Navbar from './components/Navbar'
import { CarouselWithIndicatorsExample } from './components/Carousel'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <div className='size-full'>
      <Navbar />
      
      <Outlet />
    </div>
  )
}

export default App