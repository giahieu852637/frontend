import React, { Component } from "react";
import { fetchResetLoginApi } from "./modules/action";
import { connect } from "react-redux";
import Axios from "axios";
import { urlApi } from "../../../../config/api";
import { Link } from "react-router-dom";


class LoginRestPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
      token: "",
      uidb64: "",
    };
  }
  componentDidMount() {
    const data = window.location.pathname.split("/");
    this.setState({
      token: data[4],
      uidb64: data[3],
    });
    document.title = "Đăng nhập | Dịch vụ công";
  }

  handleOnChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };
  renderNoti = () => {
    const { data } = this.props;
    if (data) return <div className="alert alert-success p-2">{data}</div>;
  };
  handleLogin = (e) => {
    e.preventDefault();
    this.props.fetchLogin(this.state, this.props.history);
  };
  renderNoti = () => {
    const { err } = this.props;
    if (err && err.errors) {
      console.log(err.errors);
      const erros = err.errors;
      return (
        <div className="alert alert-danger p-2">
          {erros.email ? (
            <p className="mb-0">Email: {erros.email ? erros.email : ""}</p>
          ) : (
            ""
          )}
          {erros.password ? (
            <p className="mb-0">
              Password: {erros.password ? erros.password : ""}
            </p>
          ) : (
            ""
          )}
        </div>
      );
    }
    if (err && err.detail) {
      const erros = err.detail;
      return (
        <div className="alert alert-danger p-2">
          {erros ? (
            <p className="mb-0">
              Vui lòng xác thực email. Nếu mã xác thực hết hạn, ấn{" "}
              <Link to="/resendMaXacThuc">tại đây</Link>
            </p>
          ) : (
            ""
          )}
        </div>
      );
    }
  };
  renderLoding = () => {
    const { loading } = this.props;
    if (loading)
      return (
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      );
    return (
      <input type="submit" defaultValue="Đăng nhập" className="btn solid" />
    );
  };
  render() {
    return (
      <section
        className="loginPage container-fluid p-0"
        style={{
          backgroundImage:
            "url(" + process.env.PUBLIC_URL + "/img/backgroud.png)",
          height: "95vh",
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col d-none d-md-block"></div>
            <div
              className="col-12 col-md-8"
              style={{
                marginTop: 200,
              }}
            >
              <div className="container py-5 rounded shadow overflow-hidden bg-light">
                <h2 className="text-center">Đặt mật khẩu mới</h2>
                {this.renderNoti()}
                <form onSubmit={this.handleLogin} action="#">
                  <div className="mb-3">
                    <label
                      htmlFor="exampleInputpassword"
                      className="form-label"
                    >
                      password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputpassword"
                      name="password"
                      onChange={this.handleOnChange}
                    />
                  </div>
                  {this.renderNoti()}
                  <div className="col-12 text-center">
                    <button type="submit" className="btn buttonPurple px-2 ">
                      Xác nhận
                    </button>
                  </div>
                </form>
                <div className="text-center mt-5">
                  <p className="d-inline fw-bold">Hoặc đăng kí tài khoản </p>
                  <Link to="/signin">Tại đây</Link>
                </div>
              </div>
            </div>
            <div className="col d-none d-md-block"></div>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.userResetLoginReducer.loading,
    err: state.userResetLoginReducer.err,
    data: state.userResetLoginReducer.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchLogin: (user, histoty) => {
      dispatch(fetchResetLoginApi(user, histoty));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(LoginRestPassword);
