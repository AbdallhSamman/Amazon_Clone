import React from "react";
import Header from "./components/Header/Header";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Checkout from './components/Checkout/Checkout';

function App() {
  return (
    <BrowserRouter>
    <div className="app">
       <Header />
     <Routes>
       <Route path='/' element={<Home />} />
       <Route path='/checkout' element = {<Checkout/>}/>
     </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
