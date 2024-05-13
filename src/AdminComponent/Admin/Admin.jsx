import React, { useEffect } from 'react'
import AdminSidebar from './AdminSidebar'
import { Route, Routes } from 'react-router-dom'
import Orders from '../Orders/Orders'
import Menu from '../Menu/Menu'
import FoodCategory from '../FoodCategory/FoodCategory'
import Ingrediets from '../Ingredients/Ingrediets'
import Events from '../Events/Events'
import Details from '../Details/Details'
import Dashboard from '../Dashboard/Dashboard'
import CreateMenuForm from '../Menu/CreateMenuForm'
import { useDispatch, useSelector } from 'react-redux'
import { getResturantCategory, getResturantsById } from '../../components/State/Resturant/Action'
import { getMenuItemByResturantId } from '../../components/State/Menu/Action'
import { getUsersOrders } from '../../components/State/Order/Action'
import { fetchResturantsOrder } from '../../components/State/Resturant Order/Action'

const Admin = () => {
  const dispatch=useDispatch();
  const jwt=localStorage.getItem("jwt");
  const {resturant}=useSelector(store=>store)
    const handleClose=()=>{

    }
    useEffect(()=>{
      dispatch(getResturantCategory({jwt:jwt,resturantId:resturant.usersResturant?.id}))
      // dispatch(getMenuItemByResturantId());
      // dispatch(getResturantsById());
      dispatch(fetchResturantsOrder({resturantId:resturant.usersResturant?.id,jwt:jwt}))
    },[])
  return (
    <div>
      <div className='lg:flex justify-between'>
        <div>
            <AdminSidebar handleClose={handleClose}/>
        </div>
        <div className='lg:w-[80%] '>
            <Routes>
                <Route path='/' element={<Dashboard/>}/>
                <Route path='/orders' element={<Orders/>}/>
                <Route path='/menu' element={<Menu/>}/>
                <Route path='/category' element={<FoodCategory/>}/>
                <Route path='/ingredients' element={<Ingrediets/>}/>
                <Route path='/event' element={<Events/>}/>
                <Route path='/details' element={<Details/>}/>
                <Route path='/add-menu' element={<CreateMenuForm/>}/>
            </Routes>
        </div>
      </div>
    </div>
  )
}

export default Admin
