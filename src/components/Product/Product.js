import React from "react";
import "./Product.css";
import StarIcon from "@mui/icons-material/Star";
import { useStateValue } from "../../StateProvider";

function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  let id_star=0;

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
    <div key={id} className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map(() => (
              id_star=Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1),
              <StarIcon key={id_star} className="product__rating--Star" />
            ))}
        </div>
      </div>
      <img src={image} alt={image} />
      <button onClick={addToBasket}>Add to cart</button>
    </div>
  );
}

export default Product;
