import React from 'react'
import { CarouselWithIndicatorsExample } from '../components/Carousel'
import FeaturedProducts from '../components/FeaturedProducts'
import Production from '../components/Production'
import Footer from '../components/Footer'
import PageTransition, { FadeTransition } from '../components/PageTransition'

const Home = () => {
  return (
    <FadeTransition>
      <div>
        <CarouselWithIndicatorsExample />
        <FeaturedProducts 
        title='Featured Products'withReveal={true}/>
        <Production />
        <Footer />
    </div>
    </FadeTransition>
  )
}

export default Home