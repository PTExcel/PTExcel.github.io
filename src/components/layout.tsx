import React from "react";
import NavBar from "./navBar";
import "../styles/global.scss";
import "../styles/stars.scss";

export default function Layout({ children }) {
  return (
    <div className="container background">
      <div id="stars" />
      <div id="stars2" />
      <div id="stars3" />
      <NavBar />
      <div className="content">{children}</div>
    </div>
  );
}
