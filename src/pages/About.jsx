import React from 'react'
import Footer from '../components/Footer'

const About = () => {
  return (
    <div>
      <div className='font-mono grid grid-cols-1 max-w-4xl justify-center items-center mx-auto px-30'>
        <div>
        <h1 className='text-left mb-5'>ABOUT</h1>
        <p className='text-sm'>Shop Style is a factory brand, 
          produced by the world's best maker of fleece fabric 
          and apparel, Roopa Knitting Mills.</p>
        <img 
        src='/Headphones.png'
        alt='about'
        className='object-cover h-full w-full mb-25'/>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default About