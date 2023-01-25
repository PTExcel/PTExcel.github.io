import React from "react";
import ReactGA from "react-ga";
import NavBar from "./navBar";
import "../styles/global.scss";
import "../styles/stars.scss";

export default function Layout({ children }) {
  const TRACKING_ID = "UA-255201180-1"; // OUR_TRACKING_ID
  ReactGA.initialize(TRACKING_ID);
  if (typeof window !== "undefined") {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }

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
