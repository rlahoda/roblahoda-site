import React from "react";
import { Link } from "gatsby";

function Nav() {
  return (
    <nav className="navFixed">
      <ul id="navList" className="navList">
        <li className="navList__navItem" id="navList__homeLink">
          <Link to="/">Home</Link>
        </li>
        <li className="navList__navItem" id="navList__aboutLink">
          <Link to="/about">About</Link>
        </li>
        <li className="navList__navItem" id="navList__projectsLink">
          <Link to="/projects">Projects</Link>
        </li>
        <li className="navList__navItem" id="navList__projectsLink">
          <Link to="/blog">Blog</Link>
        </li>
        <li className="navList__navItem" id="navList__contactLink">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
