import React from 'react'
import { CarouselWithIndicatorsExample } from '../components/Carousel'
import FeaturedProducts from '../components/FeaturedProducts'
import Production from '../components/Production'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
        <CarouselWithIndicatorsExample />
        <FeaturedProducts 
        title='Featured Products'/>
        <Production />
        <Footer />
    </div>
  )
}

export default Home