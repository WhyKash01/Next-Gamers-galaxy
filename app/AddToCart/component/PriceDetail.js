import React from 'react'

const PriceDetail = () => {
  return (
    <div className=' bg-[#3e3e3e] text-white text-2xl font-semibold rounded-xl p-10 my-10'>
        <h1 className='text-5xl font-bold mt-5 mb-10'>
        Order Summary
        </h1>
        <div className='mb-5 flex justify-between'>
            <h2>Price</h2>
            <h2>₹85,990</h2>
        </div>
        <div className='mb-5 flex justify-between'>
            <h2>Delivery</h2>
            <h2>₹0</h2>
        </div>
        <div className='mb-10 flex justify-between'>
            <h2>GST</h2>
            <h2>-</h2>
        </div>
        <div className='mb-5 text-3xl flex justify-between'>
            <h2>Total</h2>
            <h2>₹85,990</h2>
        </div>
    </div>
  )
}

export default PriceDetail