import { Avatar, Badge, Box, Button, Grid, IconButton, List, ListItem, ListItemAvatar, ListItemButton, ListItemText, Modal, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "./Navbar.css"
import { Link, useNavigate } from 'react-router-dom';
import { Person } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { searchMenuItem } from '../State/Menu/Action';
import ImageIcon from '@mui/icons-material/Image';
import { red } from '@mui/material/colors';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  const initialValues={
    keyword:""
  }
const Navbar = () => {
    const dispatch=useDispatch();
    const jwt=localStorage.getItem("jwt")
    const {auth,cart,menu}=useSelector(store=>store)
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [formValues,setFormValues]=useState(initialValues);
    const handleFormChange=(e)=>{
        setFormValues({...formValues,[e.target.name]:e.target.value})
      }
      console.log("values :",formValues)
    const navigate=useNavigate();
    const handleAvatarClick=()=>{
        if(auth.user.role==="ROLE_CUSTOMER"){
            navigate("/my-profile")
        }
        else{
            navigate("/admin/resturants")
        }
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log("values",formValues);
        setFormValues(initialValues)
      }
    useEffect(()=>{
        // console.log("New array")
        dispatch(searchMenuItem({keyword:formValues.keyword,jwt:jwt}));
    },[formValues])
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
                <IconButton onClick={handleOpen} >
                    <SearchIcon sx={{fontSize:"1.5rem"}}/>
                </IconButton>
                    <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    >
                    <Box sx={style}>
                        <form className='space-y-4' onSubmit={handleSubmit}>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                            <TextField
                            name='keyword'
                            label='Search Here'
                            variant='outlined'
                            fullWidth
                            value={formValues.keyword}
                            onChange={handleFormChange}
                            />
                            </Grid>
                        </Grid>
                        </form>
                        <div className='mt-5'>
                        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                            {menu.search?.map((item)=>
                            <ListItem>
                                <ListItemAvatar>
                                <Avatar>
                                 <img src={item.images}></img>
                                </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    onClick={(event) => {
                                        event.preventDefault();
                                        navigate(`/resturant/undefined/${item.resturant?.name}/${item.resturant?.id}`);
                                        setOpen(false);
                                    }}
                                    primary={item.name}
                                    secondary={item.resturant?.name}
                                    />
                            </ListItem>
                            )}
                        </List>
                        </div>
                    </Box>
                    </Modal>
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
            <div className='cartIcon'>
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
