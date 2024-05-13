import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React, { useState } from 'react'

const CreateCategoryForm = () => {
    const [formData,setFormData] =useState({name:""});
    const handleSubmit=(e)=>{
      e.preventDefault();
      const data={
        name:formData.name,
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
