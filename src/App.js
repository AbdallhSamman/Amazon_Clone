import React from "react";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Checkout from './components/Checkout/Checkout'
function App() {
  return (
    <BrowserRouter>
    <div className="app">
     <Routes>
       <Route path='/' element={<> <Header /><Home /></>} />
       <Route path='/checkout' element = {<Checkout/>}/>
     </Routes>
     
    </div>
    </BrowserRouter>
  );
}

export default App;
