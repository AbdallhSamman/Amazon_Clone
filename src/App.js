import React from "react";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import "./App.css";
// import { Login } from "@mui/icons-material";
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
