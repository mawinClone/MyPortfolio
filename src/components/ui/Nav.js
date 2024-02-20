import React from "react";
import "./Nav.css";

const Nav = () => {
  return (
    <div>
      <nav>
        <a href="#">Nattawat .Dev</a>
        <ul class="list">
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Portfolio</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
