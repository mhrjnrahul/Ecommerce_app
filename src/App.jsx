import React from 'react'
import Navbar from './components/Navbar'
import { Outlet, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

const App = (  ) => {
  const location = useLocation();

  return (
    <div className='size-full'>
      <Navbar />
      
      <AnimatePresence mode="wait">
        <div key={location.pathname}>
          <Outlet />
        </div>
      </AnimatePresence>
    </div>
  )
}

export default App