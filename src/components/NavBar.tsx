import { Link } from "gatsby";
import React from "react";

export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="logo">Pt Excel</div>
      <ul className="nav-links">
        <input type="checkbox" id="checkbox_toggle" />

        <label htmlFor="checkbox_toggle" className="hamburger">
          &#9776;
        </label>
        <div className="menu">
          <li>
            <Link to="/" activeClassName="active">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" activeClassName="active">
              About
            </Link>
          </li>
          <li>
            <Link to="/work" activeClassName="active">
              Work
            </Link>
          </li>
          <li>
            <Link to="/contact" activeClassName="active">
              Contact
            </Link>
          </li>
        </div>
      </ul>
    </nav>
  );
}
