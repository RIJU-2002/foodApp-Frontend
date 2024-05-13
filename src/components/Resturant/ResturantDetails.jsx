import { Divider, FormControl, FormControlLabel, Grid, Radio, RadioGroup, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EventIcon from '@mui/icons-material/Event';
import MenuCard from './MenuCard';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getResturantCategory, getResturantsById } from '../State/Resturant/Action';
import { getMenuItemByResturantId } from '../State/Menu/Action';

// const categories=[
//     "pizza","biriyani","burger","chicken","rice"
// ]

const foodTypes=[
    {label:"All",value:"all"},
    {label:"Vegetarian only",value:"vegetarian"},
    {label:"Non-vegetarian",value:"non_vegetarian"},
    {label:"Seasonal",value:"seasonal"}
]

const menus=[1,1,1,1,1,1]

const ResturantDetails = () => {
    const [foodType,setFoodType]=useState("all") 
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const jwt=localStorage.getItem("jwt");
    const {auth,resturant,menu}=useSelector(store=>store);
    const [selectedCategories,setSelectedCategory]=useState("");

    const {id,city}=useParams();

    const [foodCategories,setFoodCategories]=useState()
    const handleFilter=(e)=>{
        setFoodType(e.target.value)
        console.log(e.target.value,e.target.name)
    } 
    const handleFilterCategory=(e,value)=>{
        setSelectedCategory(value)
        console.log(e.target.value,e.target.name,value)
    } 

    console.log("resturant (detailpage)",resturant);
    console.log("resturant menu (detailpage)",menu);
    
    useEffect(()=>{
        dispatch(getResturantsById({jwt,resturantId:id}));
        dispatch(getResturantCategory({jwt,resturantId:id}));
    },[]);

    useEffect(()=>{
        dispatch(getMenuItemByResturantId({jwt,resturantId:id,vegetarian:foodType=="vegetarian",nonveg:foodType=='non_vegetarian',seasonal:foodType=="seasonal",foodCategory:selectedCategories}));
    },[selectedCategories,foodType])

  return (
    <div className='resurantDetailMain px-5 lg:px-20'>
      <section>
        <h3 className='text-gray-500 py-2 mt-10' style={{textAlign:'left'}}>Home/country/restu-name/id</h3>
        <div className='pb-10'>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <img className='BannerImg w-full h-[40vh] object-cover'
                    src={resturant.resturant?.images[1]} alt=''/>
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={12} lg={6}>
                    <img className='BannerImg w-full h-[40vh] object-cover'
                    src={resturant.resturant?.images[0]} alt=''/>
                </Grid>
                <Grid item xs={12} lg={6}>
                    <img className='BannerImg w-full h-[40vh] object-cover'
                    src={resturant.resturant?.images[0]} alt=''/>
                </Grid>
            </Grid>
        </div>
        <div className='pt-3 pb-5'>
            <h1 className='text-4xl font-semibold' style={{textAlign:'left'}}>{resturant.resturant?.name}</h1>
            <p className='text-gray-500 mt-1' style={{textAlign:'left'}}>
                {resturant.resturant?.description}
            </p>
            <div className='space-y-3 mt-3'>
            <p className='text-gray-500 flex items-center gap-3' style={{textAlign:'left'}}>
                <LocationOnIcon/>
                <span>
                    Location
                </span>
            </p>
            <p className='text-gray-500 flex items-center gap-3' style={{textAlign:'left'}}>
                <EventIcon/>
                <span>
                    Date
                </span>
            </p>
            </div>
        </div>
      </section>
      <Divider/>
      <section className='pt-[2rem] lg:flex relative'>
        <div className='space-y-10 lg:w-[20%] filter p-5' style={{textAlign:'left'}}>
            <div className='box space-y-5 lg:sticky top-28'>
                <div>
                    <Typography variant="h5" sx={{paddingBottom:'1rem'}}>
                        Food Type
                    </Typography>

                    <FormControl className='py-10 space-y-5' component={"fieldset"}>
                        <RadioGroup onChange={handleFilter} name="food_type" value={foodType}>
                            {foodTypes.map((item)=> 
                            <FormControlLabel key={item.value} 
                            value={item.value} 
                            control={<Radio/>} 
                            label={item.label}/>
                            )}
                        </RadioGroup>
                    </FormControl>
                </div>
                <Divider/>
                <div>
                    <Typography variant="h5" sx={{paddingBottom:'1rem'}}>
                        Food Category
                    </Typography>

                    <FormControl className='py-10 space-y-5' component={"fieldset"}>
                        <RadioGroup onChange={handleFilterCategory} name="food_categories" value={selectedCategories}>
                            {resturant.categories.map((item)=> 
                            <FormControlLabel key={item} 
                            value={item.name} 
                            control={<Radio/>} 
                            label={item.name}/>
                            )}
                        </RadioGroup>
                    </FormControl>
                </div>
            </div>
        </div>
       
        <div className='space-y-5 lg:w-[80%] lg:pl-10 pb-10' style={{textAlign:'left'}}>
            {menu.menuItems?.map((item)=><MenuCard item={item}/>)}
        </div>
      </section>
    </div>
  )
}

export default ResturantDetails
