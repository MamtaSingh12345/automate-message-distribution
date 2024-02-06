import React from "react";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Footer from "./Modules/Global_module/Footer";
//import Header from "./Modules/Global_module/Header";
import Login from "./Modules/Login_module/Login";
import Home from "./Modules/Home";
import { AdminRegister } from "./Modules/Register/AdminRegister";
import Header from "./Modules/Global_module/Header";
 import Message from "./Modules/Admin_module/Mesaage/Message";
//import Message from "./Modules/Admin_module/Mesaage/Message";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path = "/" element={<Home/>}/>
          <Route path = "/login" element={<Login/>}/>
          <Route path = "/register" element={<AdminRegister/>}/>
          <Route path = "/message" element={<Message/>}/>
          <Route path = "/footer" element={<Footer/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
      {/* <Header/> */}
      {/* <Home/> */}
      {/* <Footer/> */}
      {/* <Message/> */}
    </div>
  );
}

export default App;
