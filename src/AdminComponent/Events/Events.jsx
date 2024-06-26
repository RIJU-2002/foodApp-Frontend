import { Box, Button, Grid, Modal, TextField } from '@mui/material'
import React, { useState } from 'react'
import CreateEvent from './CreateEvent';
import dayjs from 'dayjs';
import { DateTimePicker, LocalizationProvider } from '@mui/x-date-pickers';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs'
import { useDispatch, useSelector } from 'react-redux';
import { createEventAction } from '../../components/State/Resturant/Action';

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
  image:"",
  location:"",
  name:"",
  startedAt:null,
  endsAt:null
}
const Events = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [formValues,setFormValues]=useState(initialValues)
  const dispatch=useDispatch();
  const jwt=localStorage.getItem("jwt")
  const {resturant}=useSelector(store=>store);

  const filterKeys = (obj, exclude) => {
    return Object.fromEntries(
      Object.entries(obj).filter(([key]) => !exclude.includes(key))
    );
  };

  const handleSubmit=(e)=>{
    e.preventDefault()
    const filteredData = filterKeys(formValues, ["startedAt", "endsAt"]);
    console.log("edited submit",filteredData);
    console.log("submit",formValues)
    dispatch(createEventAction({
      data:filteredData,
      resturantId:resturant.usersResturant.id,
      jwt:jwt
    }))
    setFormValues(initialValues)
  }
  const handleFormChange=(e)=>{
    setFormValues({...formValues,[e.target.name]:e.target.value})
  }
  const handleDateChange=(date,dateType)=>{
    const formateDate=dayjs(date).format("MMMM DD, YYYY hh:mm A");
    setFormValues({...formValues,[dateType]:formateDate})
  }
  return (
    <div>
      <div className='p-5'>
        <Button onClick={handleOpen} variant='contained'>Create New Event</Button>
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
                  name='image'
                  label='Image URL'
                  variant='outlined'
                  fullWidth
                  value={formValues.image}
                  onChange={handleFormChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                  name='location'
                  label='Location'
                  variant='outlined'
                  fullWidth
                  value={formValues.location}
                  onChange={handleFormChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                  name='name'
                  label='Name'
                  variant='outlined'
                  fullWidth
                  value={formValues.name}
                  onChange={handleFormChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateTimePicker
                      renderInput={(props)=><TextField {...props}/>}
                      label="Start Date and Time"
                      value={formValues.startedAt}
                      onChange={(newValue)=>
                        handleDateChange(newValue,"startAt")
                      }
                      inputFormat="MM/dd/yyyy hh:mm a"
                      className='w-full'
                      sx={{width:"100%"}}
                    />
                  </LocalizationProvider>
                </Grid>
                <Grid item xs={12}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateTimePicker
                      renderInput={(props)=><TextField {...props}/>}
                      label="End Date and Time"
                      value={formValues.endsAt}
                      onChange={(newValue)=>
                        handleDateChange(newValue,"endAt")
                      }
                      inputFormat="MM/dd/yyyy hh:mm a"
                      className='w-full'
                      sx={{width:"100%"}}
                    />
                  </LocalizationProvider>
                </Grid>
              </Grid>
              <Button type="submit" variant="contained">Submit</Button>
            </form>
        </Box>
        </Modal>
      </div>
    </div>
  )
}

export default Events
