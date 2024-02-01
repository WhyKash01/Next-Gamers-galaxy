import { category } from '@/Store/atom'
import React from 'react'
import { useRecoilState } from 'recoil'
import CategorySelector from './CategorySelector'
import MinPrice from './MinPrice'
import MaxPrice from './MaxPrice'
import CustomerRating from './CustomerRating'
const Filter = () => {
    const [Category, setCategory] = useRecoilState(category)
  return (
    <div className=' h-[75vh] border border-zinc-600 m-2 bg-zinc-800'>
        <h2 className='text-white text-xl mt-5 mx-10 font-semibold'>Filters</h2>
        <div className='border-y border-zinc-600 mt-5'>
            <h2 className='text-white text-lg my-5 mx-10 font-semibold'>Category</h2>
            <div className='text-white my-5 mx-10 font-semibold'>
            <CategorySelector/>
            </div>
        </div>
        <div className='border-b border-zinc-600 mt-5'>
            <h2 className='text-white text-xl my-5 mx-10 font-semibold'>Price</h2>
            <div className='text-white my-5 mx-10 font-semibold flex  justify-between'>
            <MinPrice/>
            <h3 className='text-xl'>to</h3>
            <MaxPrice/>
            </div>
        </div>
        <div className='border-b border-zinc-600 mt-5'>
          <CustomerRating/>
        </div>
    </div>
  )
}

export default Filter