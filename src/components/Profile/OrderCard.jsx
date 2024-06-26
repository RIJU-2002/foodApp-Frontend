import { Button, Card } from '@mui/material'
import React from 'react'

const OrderCard = ({item,orderitems}) => {
  return (
    <Card className='flex justify-between items-center p-5'>
        <div className='flex items-center space-x-5'>
            <img className='h-16 w-16' 
            src={item.food.images[0]} 
            alt=''/>
            <div>
                <p>{item.food.name}</p>
                <p>Rs.{item.totalPrice}</p>
            </div>
        </div>
        <div>
            <Button className='cursor-not-allowed'>{orderitems.orderStatus}</Button>
        </div>
    </Card>
  )
}

export default OrderCard
