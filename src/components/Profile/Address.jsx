import React from 'react'
import AddressCard from '../Cart/AddressCard'
import { Card } from '@mui/material';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
const Address = () => {
  const createOrderUsingSelectedAddress=()=>{};
  return (
    <div>
                <h1 className='font-semibold text-2xl py-10'>Choose Delivery Address</h1>
                <div className='flex gap-5 flex-wrap justify-center'>
                    {[1,1,1,1,1].map((item)=>(<AddressCard handleSelectAddress={createOrderUsingSelectedAddress} 
                    item={item} showButton={false}/>))}
                </div>
            </div>
  )
}

export default Address
