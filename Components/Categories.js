import React from 'react'
import CategoryCard from './CategoryCard'

const Categories = () => {
  return (
    <div className='bg-white sm:py-[5vh] py-2 px-5 sm:px-[2vw]'>
        <h2 className='text-center  sm:mb-[5vh] mb-2 font-semibold sm:text-4xl text-lg'>Explore Products</h2>
        <div>
            <CategoryCard/>
        </div>
    </div>
  )
}

export default Categories