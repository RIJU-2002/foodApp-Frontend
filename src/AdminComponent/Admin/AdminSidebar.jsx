import { AdminPanelSettings, Category, Dashboard, Event, Fastfood, Logout, ShopTwo, ShoppingBag } from '@mui/icons-material'
import { Divider, Drawer, useMediaQuery } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logout } from '../../components/State/Authentication/Action'

const menu=[
    {title:"Dashboard",
        icon:<Dashboard/>,
        path:'/'
    },
    {title:"Orders",
        icon:<ShoppingBag/>,
        path:'/orders'
    },
    {title:"Menu",
        icon:<ShopTwo/>,
        path:'/menu'
    },
    {title:"FoodCategory",
        icon:<Category/>,
        path:'/category'
    },
    {title:"FoodIngredints",
        icon:<Fastfood/>,
        path:'/ingredients'
    },
    // {title:"Event",
    // icon:<Event/>,
    // path:'/event'
    // },
    {title:"Details",
    icon:<AdminPanelSettings/>,
    path:'/details'
    },
    {title:"Logout",
    icon:<Logout/>,
    path:'/logout'
    },
]
const AdminSidebar = ({handleClose}) => {
    const isSmallScreen=useMediaQuery("(max-width:1080px)");
    const navigate=useNavigate();
    const dispatch=useDispatch();

    const handleNavigate=(item)=>{
        navigate(`/admin/resturants${item.path}`);
        if (item.title==='Logout'){
            navigate('/');
            dispatch(logout());
            handleClose();
        }
    }
  return (
    <div>
      <Drawer onClose={handleClose} variant={isSmallScreen?"temporary":"permanent"} open={true} anchor='left' sx={{zIndex:1}}>
        <div className='w-[70vw] lg:w-[20vw] h-screen flex-col justify-center text-xl space-y-[1.65rem]'>
            {menu.map((item,i)=>
            <>
            <div onClick={()=>handleNavigate(item)} className='mt-10 px-5 flex items-center gap-5 cursor-pointer'>
                {item.icon}
                <span>{item.title}</span>
            </div>
            {i!==menu.length-1 && <Divider/>}
            </>)}
        </div>
      </Drawer>
    </div>
  )
}

export default AdminSidebar
