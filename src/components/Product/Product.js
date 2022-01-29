import React from "react";
import "./Product.css";
import { useStateValue } from "../../StateProvider";
import { StarIcon } from "@heroicons/react/solid";
// import Currency from "react-currency-formatter";

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

      <img
        src={image}
        height="200"
        width="200"
        style={{ objectFit: "contain", margin: "auto" }}
      />

      <h4 className="my-3 ">{title}</h4>

      <div className="flex">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon className="h-3 text-yellow-500" />
          ))}
      </div>

      <p className="text-xs my-2 line-clamp-2">{description}</p>

      {/* <div className="mb-5">
        <Currency quantity={price} currency="USD" />
      </div> */}

      {/* {hasPrime && (
      <div className="flex items-center space-x-2 -mt-5">
        <img className="w-12" src="https://links.papareact.com/fdw" alt="" />
        <p className="text-xs text-gray-500">FREE Next-Day Delivery</p>
      </div>
    )} */}

      <button onClick={addToBasket} className="mt-auto button">
        Add to card
      </button>
    </div>
  );
}

//     <div key={id} className="product">
//       <div className="product__info">
//         <p>{title}</p>
//         <p className="product__price">
//           <small>$</small>
//           <strong>{price}</strong>
//         </p>
//         <div className="product__rating">
//           {Array(rating)
//             .fill()
//             .map(() => (
//               id_star=Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1),
//               <StarIcon key={id_star} className="product__rating--Star" />
//             ))}
//         </div>
//       </div>
//       <img src={image} alt={image} />
//       <button onClick={addToBasket}>Add to cart</button>
//     </div>
//   );
// }

export default Product;
