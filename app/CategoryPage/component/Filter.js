import { category } from '@/Store/atom'
import React from 'react'
import { useRecoilState } from 'recoil'

const Filter = () => {
    const [Category, setCategory] = useRecoilState(category)
  return (
    <div className=''>
        <h2 className='text-white text-xl mt-5 mx-5 font-semibold'>Filters</h2>
        <div className='border-y border-zinc-600 mt-5'>
            <h2 className='text-white text-lg my-5 mx-5 font-semibold'>Category</h2>
            <h3 className='text-white my-5 mx-5 font-semibold'>{Category}</h3>
        </div>
        
    </div>
  )
}

export default Filter