import React, { Component } from "react";
import "../style/style.css";
// import "font-awesome/css/font-awesome.min.css";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export class Navbar extends Component {
  // const element = <FontAwesomeIcon icon={faCoffee} />
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="container">
            <div className="logoHeader">
              <h1 className="logo">ABDYRASUL</h1>
              <ul className="rightMenu">
                <li>
                  <a href="#">
                    <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                  </a>
                </li>
              </ul>
            </div>

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
                <a href="#home">Portfolio</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
