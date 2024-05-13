import { Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import { Field, Form, Formik } from 'formik'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logout, registerUser } from '../State/Authentication/Action'

const initialValues={
    fullname:"",
    email:"",
    password:"",
    role:"ROLE_CUSTOMER"
}

const RegisterForm = () => {
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const handleSubmit=(values)=>{
        console.log("form-values",values);
        dispatch(registerUser({userData:values,navigate}))
        dispatch(logout())
        navigate("/account/login")
    };
  return (
    <div>
        <Typography variant='h5' className='text-center'>
            Register
        </Typography>
        <Formik onSubmit={handleSubmit} initialValues={initialValues}>
            <Form>
                <Field as={TextField}
                name="fullname"
                label="FULLNAME"
                fullWidth
                variant="outlined"
                margin="normal"
                />
                <Field as={TextField}
                name="email"
                label="EMAIL"
                fullWidth
                variant="outlined"
                margin="normal"
                />
                <Field as={TextField}
                name="password"
                label="PASSWORD"
                fullWidth
                variant="outlined"
                margin="normal"
                />
                <Field
                    fullWidth
                    margin="normal"
                    as={Select}
                    labelId="role-simple-select-label"
                    id="role-simple-select"
                    name="role"
                    // value={age}
                    // onChange={handleChange}
                >
                    <MenuItem value={"ROLE_CUSTOMER"}>CUSTOMER</MenuItem>
                    <MenuItem value={"ROLE_RESTURANT_OWNER"}>OWNER</MenuItem>
                </Field>
                
                <Button sx={{mt:2,padding:'1rem'}} fullWidth type='submit' variant='contained' >REGISTER</Button>
            </Form>
        </Formik>
        <Typography variant='body2' align='center' sx={{mt:3}}>
            If have an account already...
                <Button size='small' onClick={()=>navigate("/account/login")}>
                    Login
                </Button>
        </Typography>
    </div>
  )
}

export default RegisterForm
