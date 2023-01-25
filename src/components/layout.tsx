import React from "react";
import NavBar from "./navBar";
import "../styles/global.scss";
import "../styles/stars.scss";

declare global {
  interface Window {
    // ⚠️ notice that "Window" is capitalized here
    gtag: any;
  }
}

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
      {/* <footer>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="copyright-box"></div>
            </div>
          </div>
        </div>
      </footer> */}
    </div>
  );
}
