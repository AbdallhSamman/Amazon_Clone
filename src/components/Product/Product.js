// import React {useMemo} from "react";
import "./Product.css";
import { useStateValue } from "../../StateProvider";
import { StarIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";
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
    localStorage.setItem("cart", JSON.stringify(basket));
  };
  return (
    <div className="relative flex flex-col m-1 bg-white z-30 p-5 rounded-sm product__border">
      <Link to={`/item/${category}/${id}`}>
        <p className="absolute top-2 right-2 text-xs text-gray-800">
          {category}
        </p>
        <img
          src={image}
          height="200"
          width="200"
          alt={title}
          style={{ objectFit: "contain", margin: "auto" }}
        />
        <h4 className="my-3 ">
          <a className="bold" href="#">
            {title}
          </a>
        </h4>
      </Link>
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
