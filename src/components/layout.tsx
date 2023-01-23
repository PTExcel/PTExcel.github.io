import React from "react";
import NavBar from "./navBar";
import "../styles/global.scss";

export default function Layout({ children }) {
  return (
    <div>
      <NavBar />
      <div className="content">{children}</div>
    </div>
  );
}
