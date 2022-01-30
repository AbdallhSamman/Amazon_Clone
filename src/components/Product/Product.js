// import React {useMemo} from "react";
import "./Product.css";
import { useStateValue } from "../../StateProvider";
import { StarIcon } from "@heroicons/react/solid";
import Currency from "react-currency-format";
import { useEffect } from "react";

function Product({ id, title, image, price, rating, description, category }) {
  const [{ basket }, dispatch] = useStateValue();
  let onrefresh=[];
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
  // useEffect(() => {
  //   if( localStorage.getItem('cart')){
  //     let cartArr= JSON.parse(localStorage.getItem('cart'))
  //     onrefresh=[...cartArr,...basket]
  //     localStorage.setItem('cart',JSON.stringify(onrefresh))
  //   }else{
  //     localStorage.setItem('cart',JSON.stringify(basket))
  //     console.log(...basket)
  //   }
  // }, []);
  
  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10 rounded-sm shadow-md">
      <p className="absolute top-2 right-2 text-xs text-gray-800">{category}</p>

			<div className="flex">
				{Array(rating)
					.fill()
					.map((_, i) => (
						<StarIcon className="h-3 text-yellow-500" />
					))}
			</div>
			<div className="mb-5">
				<h1>{price} JOD </h1>
			</div>
			<button onClick={addToBasket} className="mt-auto button">
				Add to card
			</button>
		</div>
	);
}

export default Product;
