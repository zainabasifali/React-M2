import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form  from "./Components/Form";
import Home from './Components/Home'
function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/welcome" element={<Home />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
