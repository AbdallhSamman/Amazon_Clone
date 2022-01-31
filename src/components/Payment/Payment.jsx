import React, { useState } from 'react'
import './Payment.css'
import { useStateValue } from '../../StateProvider'
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct'
import { Link, useNavigate } from 'react-router-dom'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import CurrencyFormat from 'react-currency-format'
import { getBasketTotal } from '../../reducer'
import { useEffect } from 'react/cjs/react.development'
import { auth , db} from '../Firebase/firebase'
import axios from 'axios'

const Payment = () => {
  const [{ basket, user }, dispatch] = useStateValue()
  const stripe = useStripe()

  const elements = useElements()
  const navigat = useNavigate()
  const [error, setError] = useState(null)
  const [disabled, setDisabled] = useState(true)

  const [succeeded, setSucceeded] = useState(false)
  const [processing, setProcessing] = useState('')

  const [clientSecret, setClientSecret] = useState(true)
  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios({
        method: 'post',
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
      })
      setClientSecret(response.data.clientSecret)
    }
    getClientSecret()
  }, [basket])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (auth.currentUser != null) {
      saveOrder()
    } else navigat('/login')
  }

  const handleChange = (e) => {
    setDisabled(e.empty)
    setError(e.error ? e.error.message : '')
  }
  const saveOrder = () => {
    db.collection('orders')
      .doc('order - ' + Math.floor(Math.random() * 500))
      .set({
        user_email: user.email,
        status: 'completed',
        products: [...basket],
      })

    navigat('/profile')
  }

  return (
    <div className="payment">
      {basket.length == 0 ? (
        <div className="bg-[#EAEDED]">
          <h1 className="text-[75px] flex justify-center m-64 ">
            your cart is empty
          </h1>
        </div>
      ) : (
        <div className="payment__container">
          <div className="payment__right">
            <div className="payment__title flex justify-center mb-8 font-bold text-[40px]">
              <h3>Review item and delivery</h3>
            </div>
            <section className="payment__section1">
              <div className="address__left">
                <form>
                  <h1 className="text-center text-[25px] mb-8 font-bold">
                    Adress Form
                  </h1>
                  <h5>Full name (First and Last name)</h5>
                  <input type="text" />
                  <h5>Phone number</h5>
                  <input type="number" />
                  <h5>Address</h5>
                  <input placeholder="Street Address" type="text" />
                  <input
                    placeholder="Apt, unit, bulding, floor, etc"
                    type="text"
                  />
                  <h5>City</h5>
                  <input type="text" />
                  <h5>ZIP Code</h5>
                  <input type="text" />

                  <button type="submit" className="login__signInButton">
                    Use this address
                  </button>
                </form>
              </div>

              <div className="payment__items">
                <h1 className="text-center mb-5 font-bold text-[25px]">
                  Checkout (<Link to="/checkout">{basket?.length} items</Link>)
                </h1>
                {basket.map((item) => (
                  <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                  />
                ))}

                <section className="payment__section">
                  <div className="payment__title">
                    <h3>Payment method</h3>
                  </div>
                  <div className="payment__details">
                    <form>
                      <CardElement onChange={handleChange} />
                      <div className="payment__priceContainer">
                        <CurrencyFormat
                          renderText={(value) => <h3>Order Total:{value}</h3>}
                          decimalScale={2}
                          value={getBasketTotal(basket)}
                          displayType={'text'}
                          thousandSeparator={true}
                          prefix={'$'}
                        />
                        <button className="buyNow" onClick={handleSubmit}>
                          <span>{'Buy Now'}</span>
                        </button>
                      </div>
                    </form>
                  </div>
                </section>
              </div>
            </section>
          </div>
        </div>
      )}
    </div>
  )
}

export default Payment
