import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Sobre from "./pages/sobre";
import Usuario from "./pages/usuario";

function App() {
  return (
    <BrowserRouter>
      {Home()}
      <Home />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/usuario" element={<Usuario />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
