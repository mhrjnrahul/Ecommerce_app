import React from 'react'
import FeaturedProducts from '../components/FeaturedProducts'
import Footer from '../components/Footer'

const Products = () => {
  return (
    <div>
      <FeaturedProducts 
      title='All Products'
      showAll='true'
      />

      <Footer />
    </div>
  )
}

export default Products