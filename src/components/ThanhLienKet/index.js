import React, { Component } from "react";
import { Link } from "react-router-dom";

class ThanhLienKet extends Component {
  render() {
    const { text1, link1, text2, link2, text3, link3 } = this.props;
    return (
      <>
        <div className="container">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              {text1 ? (
                <>
                  <li className="breadcrumb-item">
                    <Link
                      className="text-black text-decoration-none h5"
                      to={link1}
                    >
                      {text1}
                    </Link>
                  </li>
                </>
              ) : (
                ""
              )}
              {text2 ? (
                <>
                  <li className="breadcrumb-item">
                    <Link
                      className="text-black text-decoration-none h5"
                      to={link2}
                    >
                      {text2}
                    </Link>
                  </li>
                </>
              ) : (
                ""
              )}
              {text3 ? (
                <>
                  <li className="breadcrumb-item">
                    <Link
                      className="text-black text-decoration-none h5"
                      to={link3}
                    >
                      {text3}
                    </Link>
                  </li>
                </>
              ) : (
                ""
              )}
            </ol>
          </nav>
        </div>
        <hr />
      </>
    );
  }
}

export default ThanhLienKet;
