import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React, { useState } from 'react'

const CreateIngredientForm = () => {
    const [formData,setFormData] =useState({name:"",ingredientCategoryId:""});
  const handleSubmit=(e)=>{
    e.preventDefault();
    const data={
      name:formData.name,
      ingredientCategoryId:{
        id:1
      },
    };
    console.log(data)
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
                    name='ingredientCategoryId'
                >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
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