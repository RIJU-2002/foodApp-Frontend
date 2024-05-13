import React, { useEffect } from 'react'
import "./Home.css"
import MultiItemCarousel from './MultiItemCarousel'
import ResturantCard from '../Resturant/ResturantCard'
import { useDispatch, useSelector } from 'react-redux'
import { getAllResturantsAction } from '../State/Resturant/Action'
import { useNavigate } from 'react-router-dom'
import { findCart } from '../State/Cart/Action'
const resturants=[1,1,1,1]
const Home = () => {
  const dispatch=useDispatch()
  const jwt=localStorage.getItem('jwt')
  const {resturant} =useSelector(store=>store)

  console.log("resturant (homepage)",resturant)

  useEffect(()=>{
    dispatch(getAllResturantsAction(jwt));
  },[])

  return (
    <div className=''>
        <section className='banner -z-50 relative flex flex-col justify-center items-center'>
            <div className='w-[50vw] z-10 text-center'>
                <p className='text-2xl lg:text-6xl font-bold z-10 py-5'>Swimatto</p>
                <p className='z-10 text-gray-300 text-xl lg:text-4xl py-5'>Ultimate stop for your cravings</p>
                <p className='z-10 text-gray-300 text-xl lg:text-4xl'>Convinience:Food, Fast and Delivered</p>
            </div>
            <div className='cover absolute top-0 left-0 right-0'>

            </div>
            <div className='fadeout'>

            </div>
        </section>
        <section className='p-10 lg:py-10 lg:px-20'>
          <p className='text-2xl font-semibold text-gray-400 py-3 pb-10'>Top Meals</p>
            <MultiItemCarousel/>
        </section>
        <section className='px-5 lg:px-20 pb-10 pt-5'>
          <h1 className='text-2xl font-semibold text-gray-400 pb-10'>
            Order From Our Hand Pick Favourites
          </h1>
          <div className='flex flex-wrap items-center justify-around gap-5'>
              {
                resturant.resturants.map((item)=><ResturantCard item={item} />)
                // resturants.map((item)=><ResturantCard  />)
              }
          </div>
        </section>
    </div>
  )
}

export default Home
