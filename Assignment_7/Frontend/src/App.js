import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form  from "./Components/Form";
import Home from './Components/Home'
import Timer from './Components/Timer'
function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/welcome" element={<Home />} />
        <Route path="/timer" element={<Timer />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
