import { Avatar, AvatarGroup, Box, Button, Card, CardHeader, Chip, Menu, MenuItem, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import {FormControl, FormControlLabel, Radio, RadioGroup, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchResturantsOrder, updateOrderStatus } from '../../components/State/Resturant Order/Action';

const orders=[1,1,1,1,]
const orderStatuses=[
    {label:"Pending",value:"PENDING"},
    {label:"Completed",value:"COMPLETED"},
    {label:"Out For Delivery",value:"OUT_FOR_DELIVERY"},
    {label:"Delivered",value:"DELIVERED"},
    {label:"All",value:"ALL"},
  ]
const orderStatus=[
    {label:"Pending",value:"PENDING"},
    {label:"Completed",value:"COMPLETED"},
    {label:"Out For Delivery",value:"OUT_FOR_DELIVERY"},
    {label:"Delivered",value:"DELIVERED"},
]
const OrderTable = () => {
    const [filterValue,setFilterValue]=useState();
  const handleFilter=(e,value)=>{
    setFilterValue(value === "ALL" ? undefined : value);
  }
  console.log("value",filterValue)
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    const dispatch=useDispatch();
  const jwt=localStorage.getItem("jwt");
  const {resturant,ingredients,menu,resturantOrder}=useSelector(store=>store);
  useEffect(()=>{
    dispatch(fetchResturantsOrder({
        resturantId:resturant.usersResturant.id,
        jwt:jwt,
        orderStatus:filterValue
    }))
  },[filterValue])

    const handleUpdateOrders=(orderId,orderStatus,)=>{
        dispatch(updateOrderStatus({orderId,orderStatus,jwt:jwt}))
        handleClose();
    }

  return (
    <>
    <Card className='p-5'>
        <Typography sx={{paddingBottom:"1rem"}} variant='h5'>
          Order Status
        </Typography>
        <FormControl>
          <RadioGroup onChange={handleFilter} row name='category' value={filterValue || "all"}>
            {orderStatuses.map((item)=><FormControlLabel 
            key={item.label} 
            value={item.value} 
            control={<Radio/>}
            label={item.label}
            sx={{color:"gray"}}
            />)}
          </RadioGroup>
        </FormControl>
      </Card>
    <Box>
        <Card className='mt-5'>
            <CardHeader 
            title={"All Orders"}
            sx={{pt:2,alignItems:"center"}}/>
                <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell align="right">Image</TableCell>
                        <TableCell align="left">Customer</TableCell>
                        <TableCell align="left">Price</TableCell>
                        <TableCell align="left">Name</TableCell>
                        <TableCell align="left">Ingredients</TableCell>
                        <TableCell align="left">Status</TableCell>
                        <TableCell align="left">Update-Status</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                        {resturantOrder.orders.map((item) => (
                        <TableRow
                        key={item.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th" scope="row">
                            {item.id}
                        </TableCell>
                        <TableCell align="right">
                            <AvatarGroup>
                                {item.items.map((orderItem)=>
                                    <Avatar src={orderItem.food.images}/>
                                )}
                            </AvatarGroup>
                        </TableCell>
                        <TableCell align="left">{item.customer.fullname}</TableCell>
                        <TableCell align="left">{item.totalPrice}</TableCell>
                        <TableCell align="left">{item.items.map((orderItem)=>
                            <p>{orderItem.food.name}</p>
                        )}</TableCell>
                        <TableCell align="left">{item.items.map((orderItem)=>
                            orderItem.ingredients.map((ingredient)=>
                                <Chip label={ingredient}/>
                            )
                        )}</TableCell>
                        <TableCell align="left">{item.orderStatus}</TableCell>
                        <TableCell>
                            <Button
                                id="basic-button"
                                aria-controls={open ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}
                            >
                                Dashboard
                            </Button>
                            <Menu
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                MenuListProps={{
                                'aria-labelledby': 'basic-button',
                                }}
                            >
                                {orderStatus.map((status)=>
                                    <MenuItem onClick={()=>handleUpdateOrders(item.id,status.value)}>{status.label}</MenuItem>
                                )}
                            </Menu>
                        </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
                </TableContainer>
        </Card>
    </Box>
    </>
  )
}

export default OrderTable

// const OrderTable = () => {
//   return (
//     <div>
//       hello
//     </div>
//   )
// }

// export default OrderTable
