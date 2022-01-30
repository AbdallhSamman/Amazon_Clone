import React from "react";
import "./Product.css";
import { useStateValue } from "../../StateProvider";
import { StarIcon } from "@heroicons/react/solid";
import Currency from "react-currency-format";
import ReadMoreReact from 'read-more-react';


function Product({ id, title, image, price, rating, description, category }) {
  const [{ basket }, dispatch] = useStateValue();
  let id_star = 0;


  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10 rounded-sm shadow-md">
      <p className="absolute top-2 right-2 text-xs text-gray-800">{category}</p>

      <img src={image} height="200" width="200" style={{ objectFit: "contain", margin: "auto" }}/>

      <h4 className="my-3 ">{title}</h4>

      <div className="flex">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon className="h-3 text-yellow-500" />
          ))}
      </div>

      <p className="text-xs my-2 line-clamp-2">
        <ReadMoreReact text={description}
                        max={200} />
 </p> 

      <div className="mb-5">
        <h1>{price} $ </h1>
      
      </div>
      <button onClick={addToBasket} className="mt-auto button">
        Add to card
      </button>
    </div>
  );
}


export default Product;
