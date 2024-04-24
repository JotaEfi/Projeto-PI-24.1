import "../../styles/css/index.css";
import React from "react";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("");

  useEffect(() => {
    setActiveTab(location.pathname);
  }, [location.pathname]);

  const handleTabClick = (path) => {
    setActiveTab(path);
  };
  return (
    <nav className="navbar">
      <ul>
        <a
          href="home"
          to="/"
          id="home"
          className={activeTab === "/" ? "active" : ""}
          onClick={() => handleTabClick("/")}
        >
          Página Inicial
        </a>
        <a
          href="sobre"
          to="/sobre"
          id="sobre"
          className={activeTab === "/sobre" ? "active" : ""}
          onClick={() => handleTabClick("/sobre")}
        >
          Sobre
        </a>
        <a
          href="usuario"
          to="/usuario"
          id="usuario"
          className={activeTab === "/usuario" ? "active" : ""}
          onClick={() => handleTabClick("/usuario")}
        >
          Usuario
        </a>{" "}
      </ul>
    </nav>
  );
};
export default Navbar;
