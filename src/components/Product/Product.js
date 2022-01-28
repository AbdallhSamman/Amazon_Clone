import React from "react";
import "./Product.css";
import StarIcon from '@mui/icons-material/Star';

function Product({ id, title, image, price, rating }) {
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
        {Array(rating).fill().map((_,i)=>
              (<StarIcon className='product__rating--Star'/>)
            )}
        </div>
      </div>
      <img src={image} alt={image} />
      <button>Add to cart</button>
    </div>
  );
}

export default Product;
