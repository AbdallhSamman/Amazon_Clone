import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "../../StateProvider";
import { NavLink } from "react-router-dom";

function Header() {
  const [{ basket }] = useStateValue();

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
          {/* <div className="header__option">
          <span className="header__optionLineOne">Hello Guest</span>
          <span className="header__optionLineTow">Sign in</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTow">Orders</span> */}
          {/* <div className="header__search">
          <input className="header__searchInput" type="text" />
          <SearchIcon className="header__searchIcon" />
        </div> */}
          <div className="header__nav">
            <div className="header__option">
              <span className="header__optionLineOne">Hello Guest</span>
              <NavLink to="/login">
                <span className="header__optionLineTow">Sign in</span>
              </NavLink>
            </div>
            <div className="header__option">
              <span className="header__optionLineOne">Returns</span>
              <span className="header__optionLineTow">Orders</span>
            </div>
            <div className="header__option">
              <span className="header__optionLineOne">Your</span>
              <span className="header__optionLineTow">Prime</span>
            </div>
            {/* <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTow header__basketCount">0</span>
          </div> */}
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
