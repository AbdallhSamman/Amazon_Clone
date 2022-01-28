import React, { useEffect } from "react";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";

import "./App.css";
// import { Login } from "@mui/icons-material";
import { Route, Routes } from 'react-router-dom';
import { auth } from "firebase";
import Footer from "./components/footer/footer";

function App() {
  // useEffect(() => {
  //   auth.onAuthStateChange(authUser=>{
  //     console.log('the user is>',authUser)
  //     if (authUser) {
  //       dispatch({
  //         type:'SET_USER',
  //         user:authUser
  //       })
  //     }
  //     else{
  //       dispatch({
  //         type:'SET_USER',
  //         user:null
  //       })
  //     }
  //   });
  // }, []);
  
  return (
    <div className="app">
      <Header />
      <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
