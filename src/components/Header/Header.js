import React, { useState } from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import {auth} from '../Firebase/firebase'
import { Link } from "react-router-dom";
import { useStateValue } from "../../StateProvider";
import { NavLink } from "react-router-dom";


function Header() {
  const [{ basket , user},dispatch] = useStateValue();
  const handelAuth=()=>{
    if (user) {
      auth.signOut();
  }
    }
  return (
    <>
      <div className="header">
        <Link to="/">
        <img
          className="header__logo"
          src="https://pnggrid.com/wp-content/uploads/2021/05/Amazon-Logo-Transparent-1024x310.png"
          alt="logo"
        />
      </Link>
        <div className="header__search">
          <input className="header__searchInput" type="text" />
          <SearchIcon className="header__searchIcon" />
        </div>
        <div className="header__nav">
          <div className="header__nav">
              <NavLink to={!user && '/login'}
               style={({ isActive }) => ({
                color: isActive ? '#fff' : '#545e6f',
                textDecoration: isActive ? 'none' : 'none',
              })}>
            <div  className="header__option">
          <NavLink to={!user && '/profile'} 
          style={({ isActive }) => ({
            color: isActive ? '#fff' : '#545e6f',
            textDecoration: isActive ? 'none' : 'none',
          })}>
              <span className="header__optionLineOne">Hello, {user?.email}</span>
              </NavLink>
                <span onClick={handelAuth} className="header__optionLineTow">{user?'Sign Out':'Sign In'}</span>
            </div>
              </NavLink>
            <div className="header__option">
              <span className="header__optionLineOne">Returns</span>
              <span className="header__optionLineTow">Orders</span>
            </div>
            <div className="header__option">
              <span className="header__optionLineOne">Your</span>
              <span className="header__optionLineTow">Prime</span>
            </div>
            <Link to="/checkout">
              <div className="header__optionBasket">
                <ShoppingBasketIcon />
                <span className="header__optionLineTow header__basketCount">
                  {basket.length}
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
        <div className="categories">
          <p>Deals</p>
          <p>Best Sellers</p>
          <p>PC</p>
          <p>Books</p>
          <p>New Releases</p>
        </div>
    </>
  );
}

export default Header;
