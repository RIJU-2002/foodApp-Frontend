import React from 'react'
import AddressCard from '../Cart/AddressCard'
import { Card } from '@mui/material';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
const AddressCards=[
  {"PLACE":"HOME","ADDRESS":"15/C KOLKATA 700020"},
  {"PLACE":"HOME","ADDRESS":"23/D HOWRAH 710020"}
]
const Address = () => {
  const createOrderUsingSelectedAddress=()=>{};
  return (
    <div>
                <h1 className='font-semibold text-2xl py-10'>My Addresses</h1>
                <div className='flex gap-5 flex-wrap justify-center'>
                {AddressCards.map((item)=>(<AddressCard handleSelectAddress={createOrderUsingSelectedAddress} 
                    item={item} showButton={false}/>))}
                </div>
            </div>
  )
}

export default Address
