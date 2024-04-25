// Exemplo no App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Mentoria from './js/pages/mentoria';
import Home from './js/pages/home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/mentoria" element={<Mentoria />} />
      </Routes>
    </BrowserRouter>
    // <Router>
    //   <div>
    //     <NavBar />
    //     <Switch>
    //       <Route path="/" exact component={PaginaInicial} />
    //       <Route path="/mentoria" component={Mentoria} />
    //       <Route path="/loja" component={Loja} />
    //     </Switch>
    //   </div>
    // </Router>
  );
}

export default App;
