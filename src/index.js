import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/css/index.css";

// import Home from './js/pages/home.js';
// import Mentoria from './js/pages/mentoria.js';
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
