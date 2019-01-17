import "./styles.css";
import React from "react";
import ReactDOM from "react-dom";
import Layout from "./Components/Layout";

var myArr = ["Taras Buchynskyi", "Your Mom", "Aziz Tashp"];
ReactDOM.render(
  <div>
    <Layout
      home="Polish Japanese Academy of Information Technology"
      myArray={myArr}
    />
  </div>,
  document.getElementById("app")
);
