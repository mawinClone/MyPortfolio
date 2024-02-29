import React from "react";
import "./Nav.css";
import {Link} from 'react-router-dom'

const Nav = () => {
  return (
    <div>
      <nav>
        <Link to="/">Nattawat .Dev</Link>
        <ul className="list">
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
