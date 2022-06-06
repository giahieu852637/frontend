import React, { Component } from "react";
import { Link } from "react-router-dom";

class Searchbutton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pagram: "",
    };
  }
  handleOnChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };
  render() {
    return (
      <div className="container button-tranform">
        <div className="row">
          <div className="d-none d-md-block col"></div>
          <div className="col-12 col-md-8 ">
            <div className="creatnewcard p-3 shadow rounded overflow-hidden">
              <div className="input-group w-100">
                <input
                  type="text"
                  className="form-control px-2 border-0 bg-transparent"
                  placeholder="Tìm kiếm hồ sơ"
                  aria-label="Tìm kiếm hồ sơ"
                  aria-describedby="button-addon2"
                  name="pagram"
                  onChange={this.handleOnChange}
                />
                <Link
                  className="btn btn-outline-secondary border-0"
                  type="button"
                  id="button-addon2"
                  to={"/search/" + this.state.pagram}
                >
                  <i className="fa fa-search px-2 "></i>
                </Link>
              </div>
              <div>
                <hr className="w-100 d-block my-0 bg-light" />
              </div>
            </div>
          </div>
          <div className="d-none d-md-block col"></div>
        </div>
      </div>
    );
  }
}

export default Searchbutton;
