import { Facebook, Instagram, Twitter } from '@mui/icons-material'
import { Button, Card, CardContent, CardHeader, Grid } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateResturantStatus } from '../../components/State/Resturant/Action'

const Details = () => {
  const {resturant}=useSelector((store=>store));
  const dispatch=useDispatch();
  const handleResturantStatus=()=>{
    dispatch(updateResturantStatus({resturantId:resturant.usersResturant.id,jwt:localStorage.getItem("jwt")}))
  }
  return (
    <div className='lg:px-20 px-5'>
      <div className='py-5 flex justify-center items-center gap-5'>
        <h1 className='text-2xl lg:text-7xl text-center font-bold p-5'>{resturant.usersResturant?.name}</h1>
        <div>
          <Button color={!resturant.usersResturant?.open?"primary":"error"} className='py-[1rem] px-[2rem]' variant='contained' onClick={handleResturantStatus} size='large'>
            {resturant.usersResturant?.open?"close":"open"}
          </Button>
        </div>
      </div>
      <Grid container spacing={2} style={{textAlign:"left"}}>
        <Grid item xs={12}>
          <Card>
            <CardHeader title={<span className='text-gray-300'>Resturant</span>}/>
            <CardContent>
              <div className='space-y-4 text-gray-200'>
                <div className='flex'>
                  <p className='w-48'>Owner</p>
                  <p className='text-gray-400'>
                    <span className='pr-5'>- </span>
                    {resturant.usersResturant?.owner?.fullname}
                  </p>
                </div>
                <div className='flex'>
                  <p className='w-48'>Resturant description</p>
                  <p className='text-gray-400'>
                    <span className='pr-5'>- </span>
                    {resturant.usersResturant?.description}
                  </p>
                </div>
                <div className='flex'>
                  <p className='w-48'>Cuisine type</p>
                  <p className='text-gray-400'>
                    <span className='pr-5'>- </span>
                    {resturant.usersResturant?.cuisineType}
                  </p>
                </div>
                <div className='flex'>
                  <p className='w-48'>Openning Hours</p>
                  <p className='text-gray-400'>
                    <span className='pr-5'>- </span>
                    {resturant.usersResturant?.openingHours}
                  </p>
                </div>
                <div className='flex'>
                  <p className='w-48'>Status</p>
                  <p className='text-gray-400'>
                    <span className='pr-5'>- </span>
                    {resturant.usersResturant?.open?<span className='px-5 py-2 rounded-full bg-green-400 text-gray-950'>OPEN</span>:
                    <span className='px-5 py-2 rounded-full bg-red-400 text-gray-950'>CLOSED</span>}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card>
            <CardHeader title={<span className='text-gray-300'>Address</span>}/>
            <CardContent>
              <div className='space-y-4 text-gray-200'>
                <div className='flex'>
                  <p className='w-48'>Country</p>
                  <p className='text-gray-400'>
                    <span className='pr-5'>- </span>
                    India
                  </p>
                </div>
                <div className='flex'>
                  <p className='w-48'>City</p>
                  <p className='text-gray-400'>
                    <span className='pr-5'>- </span>
                    city
                  </p>
                </div>
                <div className='flex'>
                  <p className='w-48'>Postal Code</p>
                  <p className='text-gray-400'>
                    <span className='pr-5'>- </span>
                    code
                  </p>
                </div>
                <div className='flex'>
                  <p className='w-48'>Street Address</p>
                  <p className='text-gray-400'>
                    <span className='pr-5'>- </span>
                    street
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card>
            <CardHeader title={<span className='text-gray-300'>Contact</span>}/>
            <CardContent>
              <div className='space-y-4 text-gray-200'>
                <div className='flex'>
                  <p className='w-48'>Email</p>
                  <p className='text-gray-400'>
                    <span className='pr-5'>- </span>
                    {resturant.usersResturant?.contactInformation?.email}
                  </p>
                </div>
                <div className='flex'>
                  <p className='w-48'>Mobile</p>
                  <p className='text-gray-400'>
                    <span className='pr-5'>- </span>
                    {resturant.usersResturant?.contactInformation?.mobile}
                  </p>
                </div>
                <div className='flex'>
                  <p className='w-48 mt-2'>Social</p>
                  <div className='text-gray-400 flex items-center pb-3 gap-2'>
                    <span className='pr-5'>-</span>
                    <a href={resturant.usersResturant?.contactInformation?.instagram}><Instagram sx={{fontSize:"3rem"}}/></a>
                    <a href={resturant.usersResturant?.contactInformation?.twitter}><Twitter sx={{fontSize:"3rem"}}/></a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  )
}

export default Details
