import React from 'react'
import { useNavigate } from 'react-router-dom'

const CarouselItem = ({image,title,resturantName,resturantId}) => {
  const navigate=useNavigate();
  return (
    <div className='flex flex-col justify-center item-center'>
      <div className='flex justify-center items-center pt-5'>
        <img className='justify-center w-[10rem] h-[10rem] lg:h-[14rem] lg:w-[14rem] rounded-full
       object-cover object-center' src={image} alt=''/>
      </div>
       <span onClick={()=>navigate(`/resturant/undefined/${resturantName}/${resturantId}`)} className='py-5 font-semibold text-xl text-gray-400'>{title}</span>  
    </div>
  )
}

export default CarouselItem
