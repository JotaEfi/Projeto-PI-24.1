import "../styles/scss/home.scss";
import "../styles/css/index.css";
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./components/navbar";
function Home() {
  return (
    <div>
      {Navbar()}
      <h1>Página Inicial</h1>
      <nav>
        <ul>
          <li>
            <Link to="/sobre">Sobre</Link>
          </li>
          <li>
            <Link to="/usuario">Usuario</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;
