import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form  from "./Components/Firebase_auth/Register/Register";
import Home from './Components/Firebase_auth/Home/Home'
import Login from './Components/Firebase_auth/Login/Login'
import Add from "./Components/Firestore/Add";
import Read from "./Components/Firestore/Read";
import Delete from "./Components/Firestore/Delete";
import Update from "./Components/Firestore/Update";
import UploadFile from "./Components/Firebase_Storage/Upload";
import DisplayImage from "./Components/Firebase_Storage/Display";
import LogEvents from "./Components/Firebase_Analytics/Log";
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
        <Route path="/upload" element={<UploadFile />}/>
        <Route path="/display" element={<DisplayImage />}/>
        <Route path="/log" element={<LogEvents />}/>

      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
