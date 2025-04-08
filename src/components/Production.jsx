import React from 'react'

const Production = () => {
    const productionSteps = [
        {
            id: 1,
            title: 'KNITTING MILL',
            image: '/Mill.png',
            description: 'Our expert teaming brings together textile has been manufacturing world class knit textiles for the last 50 years in Toronto, Canada. Our knowledge base and state of the art knitting machines allow us to create the highest quality fabrics for every product in our line.'
        },
        {
            id: 2,
            title: 'DYE HOUSE',
            image: '/Dye.png',
            description: 'Milling textiles is the highest quality operation. Dyeing is only the first part of our process. Our dye house is located a few meters from the mill and allows us the opportunity to be hands on with our products every step of the way.'
        },
        {
            id: 3,
            title: 'SEWING FACTORY',
            image: '/Sewing.png',
            description: 'Located next to the mill and dye house, our entire operation is where art and manufacture connect with unparalleled construction techniques and an extreme attention to detail. Every product is carefully sewn to the highest quality specification and quality assured before shipping to you.'
        }
    ]

  return (
    <div className='bg-[#DFD8CE] w-full py-16 px-4'>
        <div className='max-w-6xl mx-auto'>
            <h2 className='text-2xl md:text-3xl font-mono tracking-wider mb-14'>
                OUR PRODUCTION
            </h2>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                {productionSteps.map(step => (
                    <div key={step.id} className='flex flex-col'>
                        <div className='h-80 overflow-hidden mb-4'>
                            <img 
                            src={step.image}
                            alt={step.title}
                            className='w-full h-full object-cover'/>
                        </div>
                        <h3 className='font-mono text-sm tracking-wider mb-2'>{step.title}</h3>
                        <p className='text-xs leading-relaxed text-gray-700'>{step.description}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Production