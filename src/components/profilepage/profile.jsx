import React, { useState, useEffect } from "react";
import "../profilepage/profile.css";
import { useStateValue } from "../../StateProvider";
import Weather from "../Weather/Weather";
import { db } from "../Firebase/firebase";
function Profile() {
  const [{ user }] = useStateValue();
  const [orders, setOrders] = useState([]);
  let products = [];

  const returnh1 = (x) => {
    
    const prod = x.products.map((element) => {
      return (
        <div className="order-detaile">
          <img src={element.image} className="order-img" />
          <div className="product-name">
            <span>
              <strong> product name: </strong>
              {element.title}
            </span>
            <span className="product-price">price: ${element.price}</span>
            <span className="product-decs">Status {x.status}</span>
          </div>

          
        </div>
      );
    });
    return (
      <section className="order-card">
        <div className="card-header">
          <span>Order Placed</span>
          <span>22/2/2022</span>

          <div className="card-body">
            <div className="order-details">
              <div className="order-method">
                <h1>Pre-order</h1>
                <h3>
                  order within : <strong>5days</strong>{" "}
                </h3>
              </div>
              {prod}
              <button className="cansel-order">cancel Order</button>
            </div>
          </div>
        </div>
      </section>
    );
  };

  useEffect(() => {
    db.collection("orders")
      .where("user_email", "==", user?.email)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          products.push(doc.data());
        });

        setOrders(products);
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
  }, []);
  return (
    <div>
      <section className="profile_section">
        <div className="right">
          <h2 className="profile_h2">Your Order's</h2>

          {orders.map((ele) => {
            return returnh1(ele);
          })}
        </div>
        <div className="left">
          <h2 className="profile_h2" style={{ textAlign: "center" }}>
            User Profile
          </h2>

          <div className="card">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
              alt="John"
              style={{ width: "50%" }}
            />
            <h1>{user?.email}</h1>
            <p className="title">{user?.phone}</p>
            <p>Harvard University</p>
            <div style={{ margin: "24px 0" }}></div>
            <p>
              <button className="change_info">Contact</button>
            </p>
          </div>
        </div>
        <div className="weather">
          <Weather />
        </div>
      </section>
    </div>
  );
}
export default Profile;
