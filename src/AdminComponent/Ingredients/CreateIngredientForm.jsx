import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { createIngredient } from '../../components/State/Ingredients/Action';

const CreateIngredientForm = () => {
  const dispatch=useDispatch();
  const jwt=localStorage.getItem("jwt");
  const {resturant,ingredients}=useSelector(store=>store)
    const [formData,setFormData] =useState({name:"",categoryId:""});
    // console.log("ingredient page resturant",resturant)
  const handleSubmit=(e)=>{
    e.preventDefault();
    const data={
      ...formData,
      resturantId:resturant.usersResturant.id
    };
    console.log(data)
    dispatch(createIngredient({data:data,jwt:jwt}))
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
              label="Name" 
              variant='outlined'
              onChange={handleInputChange}
              value={formData.name}>
          </TextField>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Cateogry</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={formData.ingredientCategoryId}
                    label="Category"
                    onChange={handleInputChange}
                    name='categoryId'
                >
                    {ingredients.category?.map((items)=>
                    <MenuItem value={items.id}>{items.name}</MenuItem>
                    )}
                    
                </Select>
            </FormControl>
          <Button variant='contained' type='submit'>
            Create Category
          </Button>
        </form>
      </div>
    </div>
  )
}

export default CreateIngredientForm
