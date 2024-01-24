"use client"
import React from 'react'
import CategoryItem from './component/CategoryItem'
import ItemsCard from './component/ItemsCard'
import Products from '@/Components/Products'

const page = () => {
  return (
    <div>
        <CategoryItem></CategoryItem>
        <Products></Products>
    </div>
  )
}

export default page