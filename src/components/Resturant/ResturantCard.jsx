import { Card, Chip, IconButton } from '@mui/material'
import { Grid } from '@mui/material'
import React from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { addToFavorite } from '../State/Authentication/Action';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {isPresentInFavorites} from '../config/logic'

const ResturantCard = ({item}) => {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const jwt=localStorage.getItem("jwt");
  const {auth}=useSelector(store=>store)

  const handleAddToFavourite=()=>{
    dispatch(addToFavorite({resturantId:item.id,jwt}))
  }

  const handleNavigationToResturant=()=>{
    if(item.open){
      navigate(`/resturant/undefined/${item.name}/${item.id}`)
    }
  }
  return (
    <Card className='w-[18rem]'>
        <div className={`${true?'cursor-pointer':"cursor-not-allowed"} relative`}>
            <img className='w-full h-[10rem] rounded-t-md object-cover' 
            src={item.images[1]} alt=''/>
            <Chip size="small" 
            className='absolute top-2 left-2' 
            color={item.open?"success":"error"}
            label={item.open?"open":"closed"}/>
        </div>
        <div className='p-4 textPart lg:flex w-full justify-between'>
        <Grid container spacing={1} alignItems="center">
          <Grid item xs={10}sm={10}>
            <div className='space-y-1'>
              <p onClick={handleNavigationToResturant} className='font-semibold text-lg cursor-pointer'>{item.name?item.name:item.title}</p>
              <p className='text-gray-500 text-sm'>{item.description}</p>
            </div>
          </Grid>
          <Grid item xs={2} sm={2}>
            <IconButton onClick={handleAddToFavourite}>
              {isPresentInFavorites ? <FavoriteIcon /> : <FavoriteBorderIcon />}
            </IconButton>
          </Grid>
        </Grid>
        </div>
    </Card>
  )
}

export default ResturantCard



// const ResturantCard = () => {
//   const navigate=useNavigate();
//   const dispatch=useDispatch();
//   const jwt=localStorage.getItem("jwt");
//   const {auth}=useSelector(store=>store)

//   // const handleAddToFavourite=()=>{
//   //   dispatch(addToFavorite({resturantId:item.id,jwt}))
//   // }
//   return (
//     <Card className='w-[18rem]'>
//         <div className={`${true?'cursor-pointer':"cursor-not-allowed"} relative`}>
//             <img className='w-full h-[10rem] rounded-t-md object-cover' 
//             src='' alt=''/>
//             <Chip size="small" 
//             className='absolute top-2 left-2' 
//             color={true?"success":"error"}
//             label={true?"open":"closed"}/>
//         </div>
//         <div className='p-4 textPart lg:flex w-full justify-between'>
//         <Grid container spacing={1} alignItems="center">
//           <Grid item xs={10}sm={10}>
//             <div className='space-y-1'>
//               <p className='font-semibold text-lg'></p>
//               <p className='text-gray-500 text-sm'></p>
//             </div>
//           </Grid>
//           <Grid item xs={2} sm={2}>
//             <IconButton >
//               {true ? <FavoriteIcon /> : <FavoriteBorderIcon />}
//             </IconButton>
//           </Grid>
//         </Grid>
//         </div>
//     </Card>
//   )
// }

// export default ResturantCard
