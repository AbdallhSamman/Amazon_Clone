import React, { useState } from "react";
import "./Header.css";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { auth } from "../Firebase/firebase";
import { Link } from "react-router-dom";
import { useStateValue } from "../../StateProvider";
import { NavLink } from "react-router-dom";
import {
	MenuIcon,
	SearchIcon,
	ShoppingCartIcon,
} from "@heroicons/react/outline";

function Header() {
	const [{ basket, user }, dispatch] = useStateValue();
	const handelAuth = () => {
		if (user) {
			auth.signOut();
		}
	};
	return (
		<>
			<header className="header">
				{/* top nav */}
				<Link to="/">
					<div className="flex items-center flex-grow sm:flex-grow-0">
						<img
							className="header__logo"
							src="https://pnggrid.com/wp-content/uploads/2021/05/Amazon-Logo-Transparent-1024x310.png"
							alt="logo"
						/>
					</div>
				</Link>

				{/* search bar */}
				<div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500">
					<input
						className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4"
						type="text"
						id="search"
					/>
					<SearchIcon className="h-12 p-4" />
				</div>

				<div className="header__nav text-white flex items-center text-xs space-x-6 px-4">
					<div>
						<NavLink
							to={user ? "/profile" : "/login"}
							style={{
								color: "#fff",
								textDecoration: "none",
							}}
						>
							<p className="font-extrabold md:text-sm">Orders</p>
						</NavLink>

						<NavLink
							to={!user && "/login"}
							style={{
								color: "#fff",
								textDecoration: "none",
							}}
						>
							<div className="link">
								<p onClick={handelAuth}> {user ? "Sign Out" : "Sign In"}</p>
							</div>
						</NavLink>
					</div>

					<Link to="/checkout">
						<div className="relative link flex items-center">
							<span className="absolute right-0 top-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">
								{basket.length}
							</span>
							<ShoppingCartIcon className="h-10" />
							<p className="hidden md:inline font-extrabold md:text-sm mt-2">
								Basket
							</p>
						</div>
					</Link>
				</div>
			</header>
			<div className="flex d__hidden items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white text-sm">
				<p className="link flex items-center">
					<MenuIcon className="h-6 mr-1" />
				</p>
        <Link to="/products">
        <p className="link">All</p>
        </Link>
<<<<<<< HEAD
				<p className="link">Prime Video</p>
				<p className="link">Amazon Business</p>
				<p className="link">Today's Deals</p>
				<p className="link hidden lg:inline-flex">Electronics</p>
				<p className="link hidden lg:inline-flex">Food & Grocery</p>
				<p className="link hidden lg:inline-flex">Prime</p>
				<p className="link hidden lg:inline-flex">Buy Again</p>
				<p className="link hidden lg:inline-flex">Shopper Toolkit</p>
				<p className="link hidden lg:inline-flex">Health & Personal Care</p>
			</div>
		</>
	);
=======

        {/* search bar */}
        <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500">
          <input
            className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4"
            type="text"
            id="search"
          />
          <SearchIcon className="h-12 p-4" />
        </div>

        <div className="header__nav text-white flex items-center text-xs space-x-6 px-4">
          <div>
            <NavLink
              to={user ? '/profile' : '/login'}
              style={{
                color: '#fff',
                textDecoration: 'none',
              }}
            >
              <span className="header__optionLineOne">
                Hello, {user?.email}
              </span>
            </NavLink>
            <NavLink
              to={!user && '/login'}
              style={{
                color: '#fff',
                textDecoration: 'none',
              }}
            >
              <div className="header__option">
                <span onClick={handelAuth} className="header__optionLineTow">
                  {user ? 'Sign Out' : 'Sign In'}
                </span>
              </div>
            </NavLink>
          </div>
          <div className="link">
              <NavLink to={'/profile'}>
              <p>Returns</p>
            <p className="font-extrabold md:text-sm">& Orders</p>
              </NavLink>

          </div>
          <Link to="/checkout">
            <div className="relative link flex items-center">
              <span className="absolute right-0 top-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">
                {basket.length}
              </span>
              <ShoppingCartIcon className="h-10" />
              <p className="hidden md:inline font-extrabold md:text-sm mt-2">
                Basket
              </p>
            </div>
          </Link>
        </div>

        {/* <div className="header__nav">
          <div className="header__nav">
            <NavLink
              to={!user && "/login"}
              style={({ isActive }) => ({
                color: isActive ? "#fff" : "#545e6f",
                textDecoration: isActive ? "none" : "none",
              })}
            >
              <div className="header__option">
                <NavLink
                  to={!user && "/profile"}
                  style={({ isActive }) => ({
                    color: isActive ? "#fff" : "#545e6f",
                    textDecoration: isActive ? "none" : "none",
                  })}
                >
                  <span className="header__optionLineOne">
                    Hello, {user?.email}
                  </span>
                </NavLink>
                <span onClick={handelAuth} className="header__optionLineTow">
                  {user ? "Sign Out" : "Sign In"}
                </span>
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
        </div> */}
      </header>
      <div className="flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white text-sm">
        <p className="link flex items-center">
          <MenuIcon className="h-6 mr-1" />
          All
        </p>
        <p className="link">Prime Video</p>
        <p className="link">Amazon Business</p>
        <p className="link">Today's Deals</p>
        <p className="link hidden lg:inline-flex">Electronics</p>
        <p className="link hidden lg:inline-flex">Food & Grocery</p>
        <p className="link hidden lg:inline-flex">Prime</p>
        <p className="link hidden lg:inline-flex">Buy Again</p>
        <p className="link hidden lg:inline-flex">Shopper Toolkit</p>
        <p className="link hidden lg:inline-flex">Health & Personal Care</p>
      </div>
    </>
  )
>>>>>>> ebd0ef8eb2525f679d9c3343aa49c6bca657bc83
}

export default Header;
