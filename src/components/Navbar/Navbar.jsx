import React from "react";
import "./navbar.css";

export default function Navbar({ getUsers }) {
  return (
    <header className="header" id="header">
      <div className="content">
        <a className="logo" href="/">
          LetsGrowMore
        </a>
        <nav className="topnav">
          <button onClick={getUsers} className="nav-item btn btn-primary">
            Get Users
          </button>
        </nav>
      </div>
    </header>
  );
}
