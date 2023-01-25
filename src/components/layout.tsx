import React from "react";
import NavBar from "./navBar";
import "../styles/global.scss";
import "../styles/stars.scss";

export default function Layout({ children }) {
  return (
    <div className="container">
      <NavBar />
      <div className="content background">
        <div id="stars" />
        <div id="stars2" />
        <div id="stars3" />
        {children}
      </div>
    </div>
  );
}
