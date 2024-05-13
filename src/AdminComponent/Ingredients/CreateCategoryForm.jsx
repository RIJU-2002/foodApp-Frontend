import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { createIngredientCategory } from '../../components/State/Ingredients/Action';

const CreateCategoryForm = () => {
    const [formData,setFormData] =useState({name:""});
    const {resturant}=useSelector(store=>store)
    const dispatch=useDispatch();
    const jwt=localStorage.getItem("jwt");
    // console.log("resturnt of make category page:",resturant)
    const handleSubmit=(e)=>{
      e.preventDefault();
      const data={
        name:formData.name,
        resturantId:resturant.usersResturant?.id
      };
      console.log(data)
      dispatch(createIngredientCategory({data:data,jwt:jwt}));
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
                id='name' 
                name='name' 
                label="Ingredient Category"
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

export default CreateCategoryForm
