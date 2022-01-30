import React, { useState, useEffect } from "react";
import Product from "../Product/Product";
import { db } from "../Firebase/firebase";
import "./products.css";
import Slider from "@mui/material/Slider";

const Products = () => {

  const [products, setProducts] = useState([]);
  const [filter_products, setProductsFilter] = useState([]);
  const [priceFilter, setPriceFilter] = useState(999);
  const [rateFilter, setRateFilter] = useState(5);
  let product = [];

  const returnProduct = (element) => {
    const prod = element.map((elemento, index) => {
      if (elemento.product_price <= priceFilter) {
        let proRate = elemento.product_rating / elemento.product_users_rating;
        if (proRate <= rateFilter) {
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

  const unfilter = () => {
    setPriceFilter(999);
    setRateFilter(5);
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
			<div className="fillter">
				<div
					aria-label="Deals filters"
					className="gridFilterSection"
				>
					<span>
						<span aria-label="Price filter">
							<div className="gridFilterHeader">
								Price
							</div>
							<div className="a-row">
								<a className="" href="#">
									<span className="a-text-bold">All</span>
								</a>
							</div>
							<div className="a-row">
								<a className="" href="#">
									<span>Under $25</span>
								</a>
							</div>
							<div className="a-row">
								<a className="" href="#">
									<span>$25 to $50</span>
								</a>
							</div>
							<div className="a-row">
								<a className="" href="#">
									<span>$50 to $100</span>
								</a>
							</div>
							<div className="a-row">
								<a className="" href="#">
									<span>$100 to $200</span>
								</a>
							</div>
							<div className="a-row">
								<a className="" href="#">
									<span>$200 &amp; Above</span>
								</a>
							</div>
						</span>
					</span>
					<span data-testid="grid-filter-REVIEWS">
						<span aria-label="rating__filter">
							<div className="gridFilterHeader">
								Average Customer Review
							</div>
							<div className="a-row">
								<a className="" href="#">
									<span>
										<i className="a-icon a-icon-star a-star-4"></i>
										<span
											aria-label="Average review star rating of 4 and up"
											role="text"
										>
											&amp; up
										</span>
									</span>
								</a>
							</div>
						</span>
					</span>
				</div>
        <Slider
          min={0}
          max={999}
          defaultValue={50}
          onChange={(e) => {
            setPriceFilter(e.target.value);
          }}
          aria-label="Default"
          valueLabelDisplay="auto"
        />
			</div>

      <div className="grid grid-flow-row-dense md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 ">
            {filter_products
              .map((ele, index) => returnProduct(ele))}
          </div>


		</div>
	);
};

export default Products;
