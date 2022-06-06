import React, { Component } from "react";
import { Link } from "react-router-dom";

class TraCuuNhanh extends Component {
  render() {
    return (
      <div className="container TraCuuNhanh">
        <div className="row">
          <div className="d-none d-md-block col"></div>
          <div className="d-none d-md-block col-4">
            <div className="bg-blue w-100 py-3 px-4 rounded shadow text-center">
              <i
                className="fa fa-search mb-2 w-100"
                style={{ fontSize: "2rem" }}
              ></i>
              <Link
                className="fw-bold text-decoration-none text-white"
                to="/tracuu"
              >
                Tra cứu thủ tục hành chính
              </Link>
            </div>
          </div>
          <div className="d-none d-md-block col-4">
            <div className="bg-blue w-100 py-3 px-4 rounded shadow text-center">
              <i
                className="fa fa-check-square mb-2 w-100"
                style={{ fontSize: "2rem" }}
              ></i>
              <Link
                className=" text-decoration-none text-white fw-bold"
                to="/tinhtranghoso"
              >
                Tra cứu trạng thái hộ sơ
              </Link>
            </div>
          </div>
          <div className="d-none d-md-block col"></div>
        </div>
      </div>
    );
  }
}

export default TraCuuNhanh;
