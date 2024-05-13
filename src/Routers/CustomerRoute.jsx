import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Home from '../components/Home/Home'
import ResturantDetails from '../components/Resturant/ResturantDetails'
import Cart from '../components/Cart/Cart'
import Profile from '../components/Profile/Profile'
import { Route, Routes } from 'react-router-dom'
import Auth from '../components/Auth/Auth'
import PaymentSuccess from '../components/PaymentSuccess/PaymentSuccess'
import PaymentFail from '../components/PaymentSuccess/PaymentFail'
const CustomerRoute = () => {
  return (
    <div>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/account/:register' element={<Home/>}/>
            <Route path='/resturant/:city/:title/:id' element={<ResturantDetails/>} />
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/my-profile/*' element={<Profile/>}/>
            <Route path='/payment/success/:id' element={<PaymentSuccess/>}/>
            <Route path='/payment/fail/' element={<PaymentFail/>}/>
        </Routes>
        <Auth/>
    </div>
  )
}

export default CustomerRoute
