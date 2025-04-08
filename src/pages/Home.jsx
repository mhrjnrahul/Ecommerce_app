import React from 'react'
import { CarouselWithIndicatorsExample } from '../components/Carousel'
import FeaturedProducts from '../components/FeaturedProducts'
import Production from '../components/Production'

const Home = () => {
  return (
    <div>
        <CarouselWithIndicatorsExample />
        <FeaturedProducts />
        <Production />
    </div>
  )
}

export default Home