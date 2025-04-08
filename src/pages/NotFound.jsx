import React from 'react'

const NotFound = () => {
  return (
    <div className='w-screen h-screen inset-0 fixed overflow-hidden flex justify-center items-center'>
      <div className='text-center'>
        <h1 className='text-5xl font-bold mb-4'>404</h1>
        <p className='text-xl'>Page Not Found</p>
        <p className='text-sm mt-2'>The page you are looking for does not exist.</p>
      </div>
    </div>
  )
}

export default NotFound