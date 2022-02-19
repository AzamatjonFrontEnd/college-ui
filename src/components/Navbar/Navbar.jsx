import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-brand">
        <Link to="/" style={{ textDecoration: "none" }}>
          <h3>
            YOUR <span>LOGO</span>
          </h3>
        </Link>
      </div>
      <div className="nav-links">
        <ul>
          <Link to="/about" style={{ textDecoration: "none" }}>
            <li>
              <a>About</a>
            </li>
          </Link>
          <Link to="/course" style={{ textDecoration: "none" }}>
            <li>
              <a>Course</a>
            </li>
          </Link>
          <Link to="/blog" style={{ textDecoration: "none" }}>
            <li>
              <a>Blog</a>
            </li>
          </Link>
          <Link to="/contact" style={{ textDecoration: "none" }}>
            <li>
              <a>Contact</a>
            </li>
          </Link>
          <Link to="/register" style={{ textDecoration: "none" }}>
            <li>
              <a className="btn-1">Register</a>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
