import React from 'react'
import LeftSection from './CompoentsProduct/LeftSection'
import RightSection from './CompoentsProduct/RightSection'
const page = () => {
  return (
    <div className=' mx-[5vw] mt-[5vh] flex gap-[10vw]'>
      <LeftSection/>
      <RightSection/>
    </div>
  )
}

export default page