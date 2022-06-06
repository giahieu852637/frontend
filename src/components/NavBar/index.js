import React, { Component } from "react";
import { Link } from "react-router-dom";
import User from "./CheckUser";

export default class NavbarHomeTemplete extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light wow animate__fadeInDown">
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
                  to="/introduce"
                >
                  Giới thiệu
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-black mx-2 "
                  aria-current="page"
                  to="/tinhtranghoso"
                >
                  Tình trạng xử lí
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-black mx-2 "
                  aria-current="page"
                  to="/hoidap"
                >
                  Hỏi đáp
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-black mx-2"
                  aria-current="page"
                  to="/thanhvien"
                >
                  Thành viên nhóm
                </Link>
              </li>
              <li className="nav-item dropdown">
                <User />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
