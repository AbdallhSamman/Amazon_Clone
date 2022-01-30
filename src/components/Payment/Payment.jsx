import React, { useState } from "react";
import "./Payment.css";
import { useStateValue } from "../../StateProvider";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import { Link } from "react-router-dom";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../../reducer";
import { useEffect } from "react/cjs/react.development";
import axios from "axios";

const Payment = () => {
	const [{ basket, user }, dispatch] = useStateValue();
	const stripe = useStripe();
	const elements = useElements();

	const [error, setError] = useState(null);
	const [disabled, setDisabled] = useState(true);

	const [succeeded, setSucceeded] = useState(false);
	const [processing, setProcessing] = useState("");

	const [clientSecret, setClientSecret] = useState(true);
	useEffect(() => {
		const getClientSecret = async () => {
			const response = await axios({
				method: "post",
				url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
			});
			setClientSecret(response.data.clientSecret);
		};
		getClientSecret();
	}, [basket]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setProcessing(true);
		const payload = await stripe
			.confirmCardPayment(clientSecret, {
				payment_method: {
					card: elements.getElement(CardElement),
				},
			})
			.then(({ PaymentIntent }) => {
        setSucceeded(true)
        setError(null)
        setProcessing(false)
        navigator.replace('/orders')
      });
	};

	const handleChange = (e) => {
		setDisabled(e.empty);
		setError(e.error ? e.error.message : "");
	};

	return (
		<div className="payment">
			{
				basket.length==0?(<div className="bg-[#EAEDED]">
					<h1 className="text-[50px] flex justify-center m-64 ">your cart is empty</h1>
				</div>):(
						<div className="payment__container">
						<div className="payment__right">
							<h1>
								Checkout (<Link to="/checkout">{basket?.length} items</Link>)
							</h1>
			
							<section className="payment__section">
								<div className="payment__title">
									<h3>Delivery Adress</h3>
								</div>
								<div className="payment__address">
									<p>{user?.email}</p>
									<p>jordan</p>
									<p>amman</p>
								</div>
							</section>
			
							<section className="payment__section1">
								<div className="payment__title">
									<h3>Review item and delivery</h3>
								</div>
								<div className="address__left">
							
								<form>
					  <h5>Fill name (First and Last name)</h5>
					  <input
					  
						type="text"
					   
					  />
					  <h5>Phone number</h5>
					  <input
					  
						type="number"
					   
					  />
					  <h5>Address</h5>
					  <input
				placeholder="Street Address"
						type="text"
					   
					  />
					  <input
					  placeholder="Apt, unit, bulding, floor, etc"
						type="text"
					   
					  />
					  <h5>City</h5>
					  <input
						type="text"
						
					  />
					  <h5>ZIP Code</h5>
					  <input
						type="text"
						
					  />
			
					  <button
						type="submit"
						className="login__signInButton"
						
					  >
						Use this address
					  </button>
					</form>
								</div>
								<div className="payment__items">
									{basket.map((item) => (
										<CheckoutProduct
											id={item.id}
											title={item.title}
											image={item.image}
											price={item.price}
											rating={item.rating}
										/>
									))}
								</div>
							</section>
							<section className="payment__section">
								<div className="payment__title">
									<h3>Payment method</h3>
								</div>
								<div className="payment__details">
									<form onSubmit={handleSubmit}>
										<CardElement onChange={handleChange} />
										<div className="payment__priceContainer">
											<CurrencyFormat
												renderText={(value) => <h3>Order Total:{value}</h3>}
												decimalScale={2}
												value={getBasketTotal(basket)}
												displayType={"text"}
												thousandSeparator={true}
												prefix={"$"}
											/>
											<button disabled={processing || disabled || succeeded}>
												<span>{processing ? <p>Processing</p> : "Buy Now"}</span>
											</button>
										</div>
										{/* {error & <div>{error}</div>} */}
									</form>
								</div>
							</section>
						</div>
						
						</div>

)
}
			
</div>
	);
};

export default Payment;
