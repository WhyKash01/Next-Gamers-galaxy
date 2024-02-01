import { CatrgoryItem, StarAbove, category, data, maxPrice, minPrice } from '@/Store/atom';
import { Check } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil';

const CustomerRating = () => {
    const [oneStar, setoneStar]= useState(false);
    const [twoStar, settwoStar]= useState(false);
    const [threeStar, setthreeStar]= useState(false);
    const [fourStar, setfourStar]= useState(false);
    const [starAbove, setstarAbove]=useRecoilState(StarAbove);
    const [object, setObject]=useRecoilState(data);
    const [items, setItems] = useRecoilState(CatrgoryItem);
    const [Category,setCategory]= useRecoilState(category);
    const [array,setArray]= useState([]);
    const [Maxprice, setMaxprice]= useRecoilState(maxPrice)
    const [Minprice, setMinprice]= useRecoilState(minPrice)
    useEffect(() => {
        const CatItems = object.filter((item) => item.rating >=starAbove && item.Price>Minprice &&item.Price<Maxprice && item.category===Category);
        setItems(CatItems);
      }, [fourStar,threeStar,twoStar,oneStar]);
    return (
    <div className='text-white font-semibold text-lg mx-10'>
        <h2 className=' my-2 text-xl'>
            Customer Rating
        </h2>
        <div className='flex flex-row mb-1'>
        <input type='checkbox'  value={fourStar} onChange={()=>{setfourStar(!fourStar)
        fourStar?setstarAbove(0):setstarAbove(4);
        }} className='relative top-2 w-5 mr-3 mb-5'></input>
        <label>4 star & above</label>
        </div>
        <div className='flex flex-row mb-1'>
        <input type='checkbox' value={threeStar} onChange={()=>{setthreeStar(!threeStar)
        if(threeStar===false){setArray((item)=>item+3)}
        threeStar?setstarAbove(0):setstarAbove(3);
        }} className='relative top-2 w-5 mr-3 mb-5'></input>
        <h3>3 star & above</h3>
        </div>
        <div className='flex flex-row mb-1'>
        <input type='checkbox' value={twoStar} onChange={()=>{settwoStar(!twoStar)
        twoStar?setstarAbove(0):setstarAbove(2);}} className='relative top-2 w-5 mr-3 mb-5'></input>
        <h3>2 star & above</h3>
        </div>
        <div className='flex mb-5 flex-row '>
        <input type='checkbox' value={oneStar} onChange={()=>{setoneStar(!oneStar)
        oneStar?setstarAbove(0):setstarAbove(1);}} className='relative top-2 w-5 mr-3 mb-5'></input>
        <h3>1 star & above</h3>
        </div>
    </div>
  )
}

export default CustomerRating