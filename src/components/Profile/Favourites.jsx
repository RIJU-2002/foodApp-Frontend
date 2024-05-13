import React from 'react'
import ResturantCard from '../Resturant/ResturantCard'
import { useSelector } from 'react-redux'
const Favourites = () => {
  const {auth} =useSelector(store=>store)
  return (
    <div>
     <h1 className='py-5 text-xl font-semibold text-center'>My favourites</h1> 
     <div className='flex flex-wrap gap-5 justify-center'>
        {auth.favorites.map((item)=>(
          <ResturantCard item={item}/>
        ))}
     </div>
    </div>
  )
}

export default Favourites
