import React, { useEffect } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import "./topMeal"
import { topMeal } from './topMeal';
import CarouselItem from './CarouselItem';
import { useDispatch, useSelector } from 'react-redux';
import { store } from '../State/store';
import { allFoodAction } from '../State/Menu/Action';

const MultiItemCarousel = () => {
  const {menu}=useSelector(store=>store);
  const jwt=localStorage.getItem("jwt");
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(allFoodAction({jwt:jwt}));
  },[])

  console.log("all food frontend",menu);
  const settings={
    dots:true,
    infinite:true,
    speed:500,
    slidesToShow:3,
    slidesToScroll:1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows:false
  };
  return (
    <div>
      <Slider {...settings}>
       {menu.allMenuItems.map((item)=>(<CarouselItem  image={item.images} title={item.name} resturantName={item.resturant?.name} resturantId={item.resturant?.id}/>))}
      </Slider>
    </div>
  )
}

export default MultiItemCarousel
