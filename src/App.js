import React from "react";
import Header from "./components/Header/Header";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Checkout from './components/Checkout/Checkout';
import Login from "./components/Login/Login";
// import { Login } from "@mui/icons-material";

function App() {
  return (
    <BrowserRouter>
    <div className="app">
      <Header />
      <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/checkout' element = {<Checkout/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
