import React, { Component } from 'react';
import Slider from "react-slick";
import './slice.css';

const Slice = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
  focusOnSelect:true
  };
    return (
<div className="imagen">
      <Slider {...settings} className="sliceRoot">
        <div>
        <img src={require('../../resources/images/project/portafolioWeb.jpg')} className='imagenPrincipal'/>
        </div>
        <div>
          <img src={require('../../resources/images/project/portafolioWeb.jpg')} className='imagenPrincipal'/>
        </div>
        <div>
          <img src={require('../../resources/images/project/portafolioWeb.jpg')} className='imagenPrincipal'/>
        </div>
        <div>
          <img src={require('../../resources/images/project/portafolioWeb.jpg')} className='imagenPrincipal'/>
        </div>
        <div>
          <img src={require('../../resources/images/project/portafolioWeb.jpg')} className='imagenPrincipal'/>
        </div>
        <div>
          <img src={require('../../resources/images/project/portafolioWeb.jpg')} className='imagenPrincipal'/>
        </div>
      </Slider>
    </div>
    )
}
export default Slice
