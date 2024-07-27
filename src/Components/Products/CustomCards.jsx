import React from 'react';
import './CustomCards.css';
import { Rating } from '@mui/material';

function CustomCards ({data}) {
  const {title, price, description, category, image, rating} = data;
  return (
        <div className="main-container">
          <div className="main-container-image">
            <img src={image} alt={title} height={150} width={125} />
          </div>
          <div className="main-container-title">
            {title.substring(0,15)}...
          </div>
          <div className="main-container-desc">
            {description.substring(0,50)}...
          </div>
          <div className="main-container-stars">
            <Rating 
            value={rating.rate}
            /> ({rating.count})
          </div>
          <div className="main-container-price">
            <div className="main-container-price-one">
              ${price}
            </div>
            <div className="main-container-price-two">
              20% off
            </div>
          </div>
          <div className="main-container-cart">
            <button className="main-container-cart-button">Add To cart</button>
          </div>
        </div>
  )
}

export default CustomCards;