
import React from "react";
import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <div className="pagenotFound">
      <div className="container">
        <div className="boo-wrapper">
          <div className="boo">
            <div className="face" />
          </div>
          <div className="shadow" />
          <h1>404 Not Found!!!</h1>
          <p>
            Trở về trang chủ
            <br />
            <Link to="/" replace className="text-decoration-none">
              <button color="secondary" className="btn">
                Home
              </button>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
