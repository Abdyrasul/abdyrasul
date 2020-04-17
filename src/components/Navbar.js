import React, { Component } from "react";
import "../style/style.css";
export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="container">
            <h1 className="logo">ABDYRASUL</h1>
            <ul className="nav">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#home">Blog</a>
              </li>
              <li>
                <a href="#home">Photography</a>
              </li>
              <li>
                <a href="#home">About</a>
              </li>
              <li>
                <a href="#home">Contact</a>
              </li>
              <li>
                <a href="#home">Draw</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
