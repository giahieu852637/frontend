import React, { Component } from "react";
import { Link } from "react-router-dom";
import CheckUser from "./CheckUser";

class NavBarAdminTemplate extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="nav-link navbar-brand logo-text" to="/">
            Chính quyền điện tử dùng hệ thống PKI
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item ">
                <Link
                  className="nav-link text-black mx-2  "
                  aria-current="page"
                  to="/"
                >
                  Trang chủ
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-black mx-2 "
                  aria-current="page"
                  to="/admin/dashboard"
                >
                  Dashboard
                </Link>
              </li>
              <li className="nav-item dropdown">
                <CheckUser />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBarAdminTemplate;
