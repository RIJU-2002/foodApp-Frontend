import React from 'react'

const CarouselItem = ({image,title}) => {
  return (
    <div className='flex flex-col justify-center item-center'>
      <div className='flex justify-center items-center pt-5'>
        <img className='justify-center w-[10rem] h-[10rem] lg:h-[14rem] lg:w-[14rem] rounded-full
       object-cover object-center' src={image} alt=''/>
      </div>
       <span className='py-5 font-semibold text-xl text-gray-400'>{title}</span>  
    </div>
  )
}

export default CarouselItem
