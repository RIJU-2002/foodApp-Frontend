import React from 'react'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PaymentIcon from '@mui/icons-material/Payment';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LogoutIcon from '@mui/icons-material/Logout';
import EventIcon from '@mui/icons-material/Event';
import { Divider, Drawer, useMediaQuery } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../State/Authentication/Action';

const menu=[
    {title:"Orders",icon:<ShoppingBasketIcon/>},
    {title:"Favourites",icon:<FavoriteIcon/>},
    {title:"Address",icon:<LocationOnIcon/>},
    {title:"Payments",icon:<PaymentIcon/>},
    {title:"Notification",icon:<NotificationsIcon/>},
    {title:"Events",icon:<EventIcon/>},
    {title:"Logout",icon:<LogoutIcon/>},
]
const ProfileNavigation = ({open,handleClose}) => {
    const isSmallScreen=useMediaQuery("(max-width:900px)")

    const navigate=useNavigate();
    const dispatch=useDispatch();

    const handleNavigate=(item)=>{
      if(item.title==='Logout'){
        dispatch(logout());
        navigate("/");
      }
      else{
        navigate(`/my-profile/${item.title.toLowerCase()}`)
      }
    }
  return (
    <div>
      <Drawer variant={isSmallScreen?"temporary":"permanent"} 
      onClose={handleClose} 
      open={isSmallScreen?open:true} 
      anchor="left" 
      sx={{zIndex:1,position:"sticky"}}>
        <div className='w-[50vw] lg:w-[20vw] h-[100vh] flex flex-col justify-center text-xl gap-8 pt-16'>
          {menu.map((item,i)=><>
          <div onClick={()=>handleNavigate(item)} className='px-5 flex items-center space-x-5 cursor-pointer'>
            {item.icon}
            <span>{item.title}</span>
          </div>
          {i!== menu.length-1 && <Divider/>}
          </>
        )}
        </div>
      </Drawer>
    </div>
  )
}

export default ProfileNavigation
