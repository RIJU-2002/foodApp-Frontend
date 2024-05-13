import React from 'react'
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

const Admin = () => {
    const handleClose=()=>{

    }
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
