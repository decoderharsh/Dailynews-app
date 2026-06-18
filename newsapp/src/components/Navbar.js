import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className={`navbar navbar-expand-lg navbar-${this.props?.mode || "light"} bg-${this.props?.mode || "light"}`}
        >
          <div className="container-fluid">
            <Link className={`navbar-brand text-${(this.props?.mode || "light") === "light" ? "dark" : "light"}`} to="/">Dailynews</Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span  className={`navbar-toggler-icon ${(this.props?.mode || "light") === "dark" ? "navbar-dark": "" }`}></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/home">
                    Home
                  </Link>
                </li>
                {/* <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li> */}
                <li className="nav-item">
                  <Link className="nav-link" to="/business">
                    Business
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/entertainment">
                    Entertainment
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/general">
                    General
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/health">
                    Health
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/science">
                    {" "}
                    Science
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/sports">
                    Sports
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/technology">
                    Technology
                  </Link>
                </li>
              </ul>
              <div
                className={`form-check form-switch text-${(this.props?.mode || "light") === "light" ? "dark" : "light"}`}
>
                <input className="form-check-input" type="checkbox" onChange={this.props?.toggleMode} />
                <label className="form-check-label">Dark Mode</label>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
