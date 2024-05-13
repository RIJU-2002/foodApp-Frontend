import { Card, CardActions, CardContent, CardMedia, IconButton, Typography } from '@mui/material'
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';

const EventCard = () => {
  return (
    <div>
        <Card sx={{width:345}}>
            <CardMedia
            sx={{height:345}}
            image='https://cdn.pixabay.com/photo/2023/08/11/04/51/fireworks-8182800_1280.jpg'/>
            <CardContent>
                <Typography variant='h5'>
                    Event name
                </Typography>
                <Typography variant='body'>
                    Event descripton
                </Typography>
                <div className='py-2 space-y-2'>
                    <p>{"mumbai"}</p>
                    <p className='ttext-sm text-blue-500'>Start date time</p>
                    <p className='ttext-sm text-red-500'>End date time</p>
                </div>
            </CardContent>
            {false && 
            <CardActions>
                <IconButton>
                    <DeleteIcon/>
                </IconButton>
            </CardActions>}
        </Card>
    </div>
  )
}

export default EventCard
