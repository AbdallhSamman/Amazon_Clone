import React, { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Checkout from './components/Checkout/Checkout';
import Login from "./components/Login/Login";
// import { Login } from "@mui/icons-material";
import { auth } from "firebase";
import Footer from "./components/footer/footer";
import { useStateValue } from "./StateProvider";
import Videos from './components/Videoes/Videos';

function App() {
  const [{},dispatch]=useStateValue()
  useEffect(() => {
    auth().onAuthStateChanged(authUser=>{
      console.log('the user is>',authUser);
      if (authUser) {
        dispatch({
          type:'SET_USER',
          user:authUser
        })
      }
      else{
        dispatch({
          type:'SET_USER',
          user:null
        })
      }
    });
  }, []);
  
  return (
    <BrowserRouter>
    <div className="app">
      <Header />
      <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/checkout' element = {<Checkout/>}/>
      </Routes>
      <Videos />
      <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
