import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

function Header() {
  return (
    <>
      <div className="header">
        <img
          className="header__logo"
          src="https://pnggrid.com/wp-content/uploads/2021/05/Amazon-Logo-Transparent-1024x310.png"
          alt="logo"
        />
        <div className="header__search">
          <input className="header__searchInput" type="text" />
          <SearchIcon className="header__searchIcon" />
        </div>
        <div className="header__nav">
          <div className="header__option">
            <span className="header__optionLineOne">Hello Guest</span>
            <span className="header__optionLineTow">Sign in</span>
          </div>
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTow">Orders</span>
          </div>
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTow">Prime</span>
          </div>
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTow header__basketCount">0</span>
          </div>
        </div>
        <div className="header__navPhone">
          <div className="header__optionBasket">
            <span className="header__optionLineTow header__basketCount">0</span>
            <ShoppingBasketIcon />
          </div>
          <i class="fas fa-lg fa-bars"></i>
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
