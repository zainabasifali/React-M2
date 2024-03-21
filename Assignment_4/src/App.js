import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Counter from "./Components/Counter.jsx";
import Fetch from "./Components/Fetch.jsx";
import Take_Input from "./Components/Localstorageinput.jsx";
import ParentComponent from "./Components/ParentComponent1.jsx";
import ParentComponent2 from "./Components/ParentComponent2.jsx";
import FunctionalComponent from "./Components/FunctionalComponent.jsx";
import Mainlayout from "./Components/MainLayout.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
       <Mainlayout/>
        <Routes>
          <Route path="/" element={<ParentComponent />} />
          <Route path="/functionalprop" element={<ParentComponent2 renderProp={FunctionalComponent} />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/fetch" element={<Fetch />} />
          <Route path="/input" element={<Take_Input />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
