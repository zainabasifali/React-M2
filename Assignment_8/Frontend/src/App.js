import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form  from "./Components/Firebase_auth/Register/Register";
import Home from './Components/Firebase_auth/Home/Home'
import Login from './Components/Firebase_auth/Login/Login'
import Add from "./Components/Firestore/Add";
import Read from "./Components/Firestore/Read";
import Delete from "./Components/Firestore/Delete";
import Update from "./Components/Firestore/Update";

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/adduser" element={<Add />} />
        <Route path="/readuser" element={<Read />} />
        <Route path="/deluser" element={<Delete />} />
        <Route path="/updateuser" element={<Update />}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
