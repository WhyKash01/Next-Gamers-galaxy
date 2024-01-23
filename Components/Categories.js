import React from 'react'
import CategoryCard from './CategoryCard'

const Categories = () => {
  return (
    <div className='bg-white py-[5vh] px-[2vw]'>
        <h2 className='text-center  mb-[5vh] font-semibold text-4xl'>Explore Products</h2>
        <div>
            <CategoryCard/>
        </div>
    </div>
  )
}

export default Categories