import React, { useState, useEffect } from "react";
import Product from "../Product/Product";
import { db } from "../Firebase/firebase";
import "./products.css";
import Slider from "@mui/material/Slider";
import { StarIcon } from "@heroicons/react/solid";

const Products = () => {
	const [products, setProducts] = useState([]);

	const [filter_products, setProductsFilter] = useState([]);
	const [priceFilter, setPriceFilter] = useState(999);
	const [rateFilter, setRateFilter] = useState(1);
	let product = [];

	const [rating, setRating] = useState(0);
	const [hover, setHover] = useState(0);

	const returnProduct = (element) => {
		const prod = element.map((elemento, index) => {
			if (elemento.product_price <= priceFilter) {
				let proRate = elemento.product_rating / elemento.product_users_rating;
				if (proRate >= rateFilter) {
					return (
						<Product
							key={elemento.product_id}
							id={elemento.product_id}
							title={elemento.product_name}
							price={elemento.product_price}
							description={elemento.product_description}
							image={elemento.product_images[0]}
							rating={Math.floor(
								elemento.product_rating / elemento.product_users_rating
							)}
						/>
					);
				}
			}
		});
		return prod;
	};

	useEffect(() => {
		db.collection("categories")
			.get()
			.then((querySnapshot) => {
				querySnapshot.forEach((docs) => {
					product.push(docs.data().products);
				});

				setProducts(product);
				setProductsFilter(product);
			})
			.catch((error) => {
				console.log("Error getting documents: ", error);
			});
	}, []);

	return (
		<div className="grid-container">
      <div>
        <input  className="m__hidden" type="checkbox"/>
        <div className="m__hidden m__button">Filter</div>

			<div className="Filter">
				<div aria-label="Deals filters" className="gridFilterSection">
					<span>
						<span aria-label="Price filter">
							<div className="gridFilterHeader">Category</div>
							<div className="a-row">
								{/* {Category} */}
							</div>
						</span>
					</span>
					<span>
						<span aria-label="Price filter">
							<div className="gridFilterHeader">Price</div>
							<div className="a-row">
								<Slider
									min={0}
									max={80}
									defaultValue={80}
									onChange={(e) => {
										setPriceFilter(e.target.value);
									}}
									aria-label="Default"
									valueLabelDisplay="auto"
								/>
							</div>
						</span>
					</span>
					<span data-testid="grid-filter-REVIEWS">
						<span aria-label="rating__filter">
							<div className="gridFilterHeader">Average Customer Review</div>
							<div className="a-row">
								<div className="star-rating">
									{[...Array(5)].map((star, index) => {
										index += 1;
										return (
											<button
												type="button"
												key={index}
												className={` h-5   w-5  text-yellow-500   ${
													index <= (hover || rating) ? "on" : "off"
												}`}
												onClick={() => setRating(index)}
												onMouseEnter={() => setHover(index)}
												onMouseLeave={() => setHover(rating)}
											>
												<span className="star">
													<StarIcon
														className="h-5 w-5"
														onClick={() => {
															setRateFilter(index);
														}}
													/>
												</span>
											</button>
										);
									})}
								</div>
							</div>
						</span>
					</span>
				</div>
			</div>
      </div>
			<div className="grid products grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-2 ">
				{filter_products.map((ele, index) => returnProduct(ele))}
			</div>
		</div>
	);
};

export default Products;
