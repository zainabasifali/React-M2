import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form  from "./Components/Firebase_auth/Register/Register";
import Home from './Components/Firebase_auth/Home/Home'
import Login from './Components/Firebase_auth/Login/Login'
function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
