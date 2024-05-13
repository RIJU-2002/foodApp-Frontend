import { red } from '@mui/material/colors';
import React from 'react'
import CancelIcon from '@mui/icons-material/Cancel';
import { Button, Card } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const PaymentFail = () => {
    const navigate=useNavigate();
    return (
      <div className='min-h-screen px-5'>
          <div className='flex flex-col items-center justify-center h-[90vh]'>
              <Card className='box w-full lg:w-1/4 flex flex-col items-center rounded-md p-5'>
                  <CancelIcon sx={{fontSize:"5rem", color:red[500]}}/>
                  <h1 className='py-5 text-2xl font-semibold'>Order Failed !</h1>
                  <p>OOPSS we faced some issues</p>
                  <p>Sorry for the inconvinience.....</p>
                  <p className='py-2 text-center text-gray-400 text-lg'>Have a Great Day!!!</p>
                  <Button onClick={()=>navigate("/")} variant='contained' className='py-5' sx={{margin:"1rem 0rem"}}>Go to Home</Button>
              </Card>
          </div> 
      </div>
    )
  }

export default PaymentFail
