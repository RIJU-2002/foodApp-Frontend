import React, { useState } from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import { categorizeIngredients } from '../State/util/categrizeIngredients';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../State/Cart/Action';

const demo=[
  {
    category:"Nuts and Seeds",
    ingredients:["Cashews"]
  },
  {
    category:"Protein",
    ingredients:["Ground Beef","Bacon strips"]
  }
]





const MenuCard = ({item}) => {
  const [selectedIngredients,setSelectedIngredients]=useState([])
  const dispatch=useDispatch();
  console.log("menucard",item)
  const handleCheckBoxChange=(itemName)=>{
    if(selectedIngredients.includes(itemName)){
      setSelectedIngredients(selectedIngredients.filter((item)=>item!==itemName));
    }
    else{
      setSelectedIngredients([...selectedIngredients,itemName])
    }
    console.log("value",itemName)
  }

  const handleAddItemToCart=(event)=>{
    event.preventDefault();
    const reqData=
    {token:localStorage.getItem("jwt"),
    cartItem:{
      foodId:item.id,
      quantity:1,
      ingredients:selectedIngredients,
    }};
    dispatch(addItemToCart(reqData));
    console.log("cart",reqData)
    // window.location.reload();
  };

  if(!item){
    return (
      <div>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
           <div className='lg:flex items-center justify-between'>
              <div className='lg:flex items-center lg:gap-5'>
                <img className='w-[7rem] h-[7rem] object-cover' 
                src="" alt="" />
                <div className='space-y-1 lg:space-y-5 lg:max-w-2xl'>
                  <p className='font=semibold text-xl'></p>
                  <p>Rs </p>
                  <p className='text-gray-400'>Description:</p>
                </div>
              </div>
           </div>
          </AccordionSummary>
          <AccordionDetails>
            <form>
              <div className='flex gap-5 flex-wrap '>
                {
                  demo.map((item)=>
                    <div>
                      <p>{item.category}</p>
                      <FormGroup>
                        {item.ingredients.map((item)=>
                        <FormControlLabel control={<Checkbox onChange={()=>handleCheckBoxChange(item)}/>} label={item} />
                        )}
                      </FormGroup>
                    </div>
                  )}
              </div>
              <div className='pt-5 pb-5'>
                <Button variant='contained' disabled={false} type='submit'>
                  {true?"Add to Cart":"Out Of Stock"}
                </Button>
              </div>
            </form>
          </AccordionDetails>
        </Accordion>
      </div>
    )
  }
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
         <div className='lg:flex items-center justify-between'>
            <div className='lg:flex items-center lg:gap-5'>
              <img className='w-[7rem] h-[7rem] object-cover' 
              src={item.images} alt="" />
              <div className='space-y-1 lg:space-y-5 lg:max-w-2xl'>
                <p className='font=semibold text-xl'>{item.name}</p>
                <p>Rs {item.price} </p>
                <p className='text-gray-400'>Description:{item.desription}</p>
              </div>
            </div>
         </div>
        </AccordionSummary>
        <AccordionDetails>
          <form>
            <div className='flex gap-5 flex-wrap '>
              {
                Object.keys(categorizeIngredients(item.ingredients)).map((category)=>
                  <div>
                    <p>{category}</p>
                    <FormGroup>
                      {categorizeIngredients(item.ingredients)[category].map((item)=>
                      <FormControlLabel key={item.name} control={<Checkbox onChange={()=>handleCheckBoxChange(item.name)}/>} label={item.name} />
                      )}
                    </FormGroup>
                  </div>
                )}
            </div>
            <div className='pt-5 pb-5'>
              <Button onClick={handleAddItemToCart} variant='contained' disabled={false} type='submit'>
                {true?"Add to Cart":"Out Of Stock"}
              </Button>
            </div>
          </form>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default MenuCard