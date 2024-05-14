import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminRoute from './AdminRoute'
import CustomerRoute from './CustomerRoute'
import Navbar from '../components/Navbar/Navbar'

const Routers = () => {
  return (
    <Routes>
        <Route path='/admin/resturants/*' element={<AdminRoute/>}/>
        <Route path='/*' element={<CustomerRoute/>}/>
    </Routes>
  )
}

export default Routers
