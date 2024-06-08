import React from "react";
import { Link } from "react-router-dom";

function MyNavbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark mt-0 p-3">
      <h2 className="navbar-brand text-white">SenteTEMPO</h2>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              className="nav-link"
              to="/"
              style={{ transition: 'color 0.3s ease' }}
              onMouseEnter={(e) => (e.target.style.color = '#42f58a')}
              onMouseLeave={(e) => (e.target.style.color = 'white')}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              to="/page1"
              style={{ transition: 'color 0.3s ease' }}
              onMouseEnter={(e) => (e.target.style.color = '#42f58a')}
              onMouseLeave={(e) => (e.target.style.color = 'white')}
            >
              Ver Tempo
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default MyNavbar;
