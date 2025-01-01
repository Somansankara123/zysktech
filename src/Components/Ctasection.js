import React from 'react'

const Ctasection = () => {
  return (
    <div className='text-center mt-10 bg-gray-100 '>
<div className='pt-2 pb-5'>
    <p className='font-semibold text-2xl lg:pt-10'>Start Your Free Trial</p>
    <p className='p-4'>Join over 4,000+ startups already growing with Untitled.</p>
    <div className='p-4 flex flex-col md:flex-row lg:justify-center lg:gap-2 lg:mb-5'>
      
        <button className='bg-purple-600 p-3 text-white rounded-lg hover:bg-purple-700 transition-all duration-200 order-1 md:order-2'>
            Get Started
        </button>
        
        
        <button className='p-3 border-2 border-gray-500 rounded-lg hover:bg-gray-100 transition-all duration-200 order-2 md:order-1'>
            Learn More
        </button>
    </div>
</div>


    </div>
  )
}

export default Ctasection