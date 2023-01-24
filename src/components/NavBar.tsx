import { Link, graphql, useStaticQuery } from "gatsby";
import React, { useState } from "react";

export default function NavBar() {
  const data = useStaticQuery(graphql`
    query SiteInfo {
      site {
        siteMetadata {
          title
        }
      }
      userProfile {
        pictures {
          url
        }
      }
    }
  `);

  const [state, setState] = useState({
    logo: data.userProfile.pictures[0],
  });

  return (
    <nav className="navbar">
      <div className="logo">
        <a className="navbar-brand">
          <img src={state.logo.url} alt="logo" style={{ maxWidth: "100px" }} />
        </a>
        <span>Pt Excel</span>
      </div>
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
