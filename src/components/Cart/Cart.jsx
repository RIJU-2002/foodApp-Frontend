import { Box, Button, Card, Divider, Grid, Modal, TextField } from '@mui/material'
import React from 'react'
import CartItem from './CartItem'
import AddressCard from './AddressCard'
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import { ErrorMessage, Field, Form, Formik } from 'formik';
// import * as Yup from 'yup';
import { GridOnSharp } from '@mui/icons-material';
import { number } from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { createOrder } from '../State/Order/Action';
import { clearCartAction } from '../State/Cart/Action';

 export const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    outline:"none",
    pt: 2,
    px: 4,
    pb: 3,
  };

const initialValues={
    streetAddress:"",
    state:"",
    pincode:"",
    city:""
}

// const validationSchema=Yup.object.shape({
//     streetAddress:Yup.string().required("Street address is required"),
//     state:Yup.string().required("State address is required"),
//     pincode:Yup.required("pincode required"),
//     city:Yup.string().required("city is required")
// })

// const items=[1,1,]
const AddressCards=[
    {"PLACE":"HOME","ADDRESS":"15/C KOLKATA 700020"},
    {"PLACE":"HOME","ADDRESS":"23/D HOWRAH 710020"}
]

const Cart = () => {
    const createOrderUsingSelectedAddress=()=>{};
    const handleOpenAddressModal=()=>{setOpen(true)};
    const [open, setOpen] = React.useState(false);
    const {cart,auth}=useSelector(store=>store)
    console.log("cart",cart)
    const dispatch=useDispatch();
    const handleClose = () => {
        setOpen(false);
    };
    const handleSubmit=(value)=>{
        const data={
            jwt:localStorage.getItem("jwt"),
            order:{
                resturantId:cart.cartItems[0].food?.resturant.id,
                deliveryAddress:{
                    fullName:auth.user?.fullname,
                    streetAddress:value.streetAddress,
                    city:value.city,
                    state:value.state,
                    postalCode:value.pincode,
                    country:"India"
                }
            }
        }
        dispatch(createOrder(data))
        // dispatch(clearCartAction())
        console.log("form value",value);
    };
  return (
    <>
      <main className='lg:flex justify-between px-10' style={{textAlign:"left"}}>
        <section className='lg:w-[30%] space-y-6 lg:min-h-screen pt-10'>
            {cart.cartItems.map((item)=>
                <CartItem item={item}/>
            )}
            <Divider/>
            <div className='billDetails px-5 text-sm pb-5'>
                <p className='font-extralight py-5'>Bill Details</p>
                <div className='space-y-3'>
                    <div className='flex justify-between text-gray-400'>
                        <p>Item Total</p>
                        <p>Rs {cart.cart?.total}</p>
                        {/* <p>Rs 99</p> */}
                    </div>
                    <Divider/>
                </div>
                <div className='flex justify-between text-gray-400'>
                    <p>Total pay</p>
                    <p>Rs {cart.cart?.total}</p>
                    {/* <p>Rs 999</p> */}
                </div>
            </div>
        </section>
        <Divider orientation='vertical' flexItem/>
        <section className='lg:w-[70%] flex justify-center px-5 pb-10 lg:pb-0'>
            <div>
                <h1 className='font-semibold text-2xl py-10'>Choose Delivery Address</h1>
                <div className='flex gap-5 flex-wrap justify-center'>
                    {AddressCards.map((item)=>(<AddressCard handleSelectAddress={createOrderUsingSelectedAddress} 
                    item={item} showButton={true}/>))}
                    <Card className='flex gap-5 w-64 p-5'>
                        <AddLocationAltIcon/>
                        <div className='space-y-3  text-gray-500'>
                            <h1 className='font-semibold text-lg text-white'>Add new Address</h1>
                            <Button variant='outlined' fullWidth onClick={handleOpenAddressModal}>
                                Add
                            </Button>
                        </div>
                    </Card>
                </div>
            </div>
        </section>
      </main>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
        <Box sx={style}>
            <Formik initialValues={initialValues}
            // validationSchema={validationSchema}
            onSubmit={handleSubmit}>
                <Form>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Field as={TextField} fullWidth name="streetAddress" 
                            label="Street Address" 
                            variant="outlined" 
                            // error={!ErrorMessage("streetAddress")}
                            // helperText={
                            //     <ErrorMessage>
                            //         {(msg)=><span className='text-red-600'>{msg}</span>}
                            //     </ErrorMessage>
                            // }
                            />     
                        </Grid>
                        <Grid item xs={6}>
                            <Field as={TextField} name="state" 
                                label="State" 
                                variant="outlined" />
                        </Grid>
                        <Grid item xs={6}>
                            <Field as={TextField} name="pincode" 
                                label="PIN-CODE" 
                                variant="outlined" />
                        </Grid>
                        <Grid item xs={12}>
                            <Field as={TextField} fullWidth name="city" 
                                label="CITY" 
                                variant="outlined" />
                        </Grid>
                        <Grid item xs={12}>
                            <Button variant='contained' fullWidth type="submit" color='primary'>Add</Button>
                        </Grid>
                    </Grid>
                </Form>
            </Formik>
        </Box>
        </Modal>
    </>
  )
}

export default Cart
