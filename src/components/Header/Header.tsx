import "./header.css";
import React from "react";
import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-brand">
          <Link to="/">GamesForYou</Link>
        </div>
        <div className="navbar-links">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            
            <li>
              <Link to="/games">Games</Link>
            </li>
            <li className="dropdown">
              TopPlayedGames
              <div className="dropdown-content">
                <Link to="/TopPlayedGames/TopPplayedByTime">ByPlayTime</Link>
                <Link to="/TopPlayedGames/TopPplayedByPlayers">ByPlayers</Link>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
