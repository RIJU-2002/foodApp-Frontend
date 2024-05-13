import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { createCategoryAction } from '../../components/State/Resturant/Action';
const CreateCateogryForm = () => {
  const {resturant}=useSelector((store)=>store);
  const dispatch=useDispatch();
  const [formData,setFormData] =useState({categoryName:"",resturantId:""});
  const handleSubmit=(e)=>{
    e.preventDefault();
    const data={
      name:formData.categoryName,
      resturantId:resturant.usersResturant.id
    };
    console.log(data)
    dispatch(createCategoryAction({reqData:data,jwt:localStorage.getItem("jwt")}));
  };
  const handleInputChange=(e)=>{
    e.preventDefault();
    const {name,value}=e.target
    setFormData({
      ...formData,[name]:value
    })
  }
  return (
    <div className=''>
      <div className='p-5'>
        <h1 className='text-gray-400 text-center text-xl pb-10'>Create Category</h1>
        <form className='space-y-4' onSubmit={handleSubmit}>
          <TextField fullWidth 
              id='categoryName' 
              name='categoryName' 
              label="Food Category" 
              variant='outlined'
              onChange={handleInputChange}
              value={formData.name}>
          </TextField>
          <Button variant='contained' type='submit'>
            Create Category
          </Button>
        </form>
      </div>
    </div>
  )
}

export default CreateCateogryForm
