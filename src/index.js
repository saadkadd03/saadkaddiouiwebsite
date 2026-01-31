import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// --- ADSTERRA INJECTION START ---
const script = document.createElement("script");
script.src = "https://yawncollaremotion.com/21/ad/e8/21ade8aee2d885a52e7c4e5308f47df7.js";
script.async = true;
// This forces the script into the <head> dynamically
document.head.appendChild(script);
// --- ADSTERRA INJECTION END ---

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
