import React from 'react';
import { useEffect, useState } from 'react';
import fetchProducts from '../api/product';

const FeaturedProducts = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getProducts = async () => {
      try{
        const data = await fetchProducts();
        setFeaturedProducts(data);
      } catch(error)  {
        setError('Failed to load products');
      } finally {
        setLoading(false);
      }
    };
    getProducts();
  }, [])

  if (loading) {
    return <p>Loading...</p>
  } 

  if (error) {
    return <p>{error}</p>
  }

  return (
    <div className="featured-products py-8">
        <h2 className="text-2xl font-bold text-center mb-4">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {featuredProducts.slice( 0,4 ).map((product) => (
                <div key={product.id} className="bg-white p-4 rounded-lg shadow-lg">
                    <img src={product.image} alt={product.title} className="w-full h-48 object-cover mb-4" />
                    <h3 className="text-lg font-semibold">{product.title}</h3>
                    <p className="text-gray-500">${product.price}</p>
                </div>
            ))}
        </div>
    </div>
);
}

export default FeaturedProducts