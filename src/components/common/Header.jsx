import React, { useState } from "react";
import logo from "../../image/logo.png";
function Header(props) {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const handleToggle = (e) => {
    setIsCollapsed(!isCollapsed);
  };
  return (
    <header className="header">
      <div className="header-wrapper">
        <a href="#" className="logo">
          <img src={logo} alt="" />
        </a>
        <nav className="navbar">
          <button
            className="navbar-toggle"
            onClick={handleToggle}
            aria-expanded={isCollapsed ? "true" : "false"}
            type="button"
          >
            Menu
          </button>
          <ul className={isCollapsed ? "navbar-nav active" : "navbar-nav"}>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
