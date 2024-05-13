import { Avatar, Badge, IconButton } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "./Navbar.css"
import { Link, useNavigate } from 'react-router-dom';
import { Person } from '@mui/icons-material';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const {auth,cart}=useSelector(store=>store)

    const navigate=useNavigate();
    const handleAvatarClick=()=>{
        if(auth.user.role==="ROLE_CUSTOMER"){
            navigate("/my-profile")
        }
        else{
            navigate("/admin/resturants")
        }
    }
  return (
    <div className='px-5 sticky top-0 h-20 z-50 py-[.8rm] bg-[#e91e63] lg:px-20 flex justify-between'>
        <div className='lg:mr-10 cursor-pointer flex items-center space-x-4'>
            <li onClick={()=>navigate("/")} className='logo font-semibold text-gray-300 text-2xl'>
                Swimatto
            </li>
        </div>
        <div className='flex items-center cursor-pointer space-x-2 lg:space-x-10'>
            <div className='searchIcon'>
                <Link to={"/"}>
                <IconButton >
                    <SearchIcon sx={{fontSize:"1.5rem"}}/>
                </IconButton>
                </Link>
            </div>
            <div className='avatarIcon'>
                {auth.user?
                <Avatar onClick={handleAvatarClick} sx={{bgcolor:"white",color:"#e91e63"}}>{auth.user?.fullname[0].toUpperCase()}</Avatar>
                :
                <IconButton onClick={()=>navigate("/account/login")}>
                    <Person/>    
                </IconButton>}
            </div>
            <div className='searchIcon'>
                <Link to={"/cart"}>
                <IconButton onClick={()=>navigate("/cart")} >
                    <Badge color='primary' badgeContent={cart.cartItems.length}>
                    <ShoppingCartIcon sx={{fontSize:"1.5rem"}}/>
                    </Badge>
                </IconButton>
                </Link>
            </div>       
        </div>
    </div>
  )
}

export default Navbar
