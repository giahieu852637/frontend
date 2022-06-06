import React, { Component } from "react";
import { fetchLoginApi } from "./modules/action";
import { connect } from "react-redux";
import Axios from "axios";
import { urlApi } from "../../../../config/api";
import { Link } from "react-router-dom";
import { fetchResetPasswordApi } from "./modules/actionReset";
import toast, { Toaster } from "react-hot-toast";
import GoogleLogin from "react-google-login";
import { fetchGoogleLoginApi } from "./modules/actionGoogleLogin";
import FacebookLogin from "react-facebook-login";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  componentDidMount() {
    document.title = "Đăng nhập | Dịch vụ công";
  }
  renderGoogle = () => {
    return <div></div>;
  };
  handleOnChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };
  handleLogin = (e) => {
    e.preventDefault();
    this.props.fetchLogin(this.state, this.props.history);
  };
  handleReset = (e) => {
    e.preventDefault();
    this.props.fetchResetLogin(this.state.email, this.props.history);
  };
  renderNoti = () => {
    const { err } = this.props;
    if (err) {
      const erros = err;
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
            <p className="mb-0">{erros.detail}</p>
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
            <>
              <p className="mb-0">{erros.detail}</p>
            </>
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
    const responseGoogle = (response) => {
      this.props.fetchLoginGoogle(response.tokenId, this.props.history);
      console.log(response.tokenId);
    };
    const responseFacebook = (response) => {};

    const notify = () => toast.success("Vui lòng check mail");
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
                <h2 className="text-center">Đăng nhập</h2>
                {this.renderNoti()}
                <form onSubmit={this.handleLogin} action="#">
                  <div className="mb-3">
                    <label htmlFor="exampleInputName" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputName"
                      name="email"
                      onChange={this.handleOnChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleInputPassword"
                      className="form-label"
                    >
                      Mật khẩu
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputPassword"
                      name="password"
                      onChange={this.handleOnChange}
                    />
                  </div>
                  <div className="mb-3">
                    <a
                      type="button"
                      className=""
                      data-mdb-toggle="modal"
                      data-mdb-target="#exampleModal"
                    >
                      Quên mật khẩu
                    </a>
                  </div>
                  <Link to="/resendMaXacThuc">Xác minh tại đây</Link>
                  <div className="col-12 text-center">
                    <button type="submit" className="btn buttonPurple px-2 ">
                      Đăng nhập
                    </button>
                  </div>
                </form>
                <div className="text-center mt-5">
                  <Toaster />
                  <div>
                    <div
                      className="modal fade"
                      id="exampleModal"
                      tabIndex={-1}
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                              Vui lòng nhập email
                            </h5>
                            <button
                              type="button"
                              className="btn-close"
                              data-mdb-dismiss="modal"
                              aria-label="Close"
                            />
                          </div>
                          <div className="modal-body">
                            <form onSubmit={this.handleReset} action="#">
                              <div className="mb-3">
                                <input
                                  type="email"
                                  className="form-control"
                                  id="exampleInputName"
                                  name="email"
                                  onChange={this.handleOnChange}
                                />
                              </div>
                              <div className="col-12 text-center">
                                <button
                                  type="submit"
                                  className="btn buttonPurple px-2 "
                                  onClick={() => {
                                    notify();
                                  }}
                                >
                                  Gửi
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-5">
                  <GoogleLogin
                    clientId="176086686228-v8o6usaae3vfhjnt1n8gslkjb32tvpfo.apps.googleusercontent.com"
                    buttonText="Login"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={"single_host_origin"}
                  />

                  {/* <FacebookLogin
                    appId="1931992926962753"
                    autoLoad={true}
                    fields="name,email,picture"
                    callback={responseFacebook}
                  /> */}
                </div>

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
    loading: state.userLoginReducer.loading,
    err: state.userLoginReducer.err,
    data: state.userResendReducer.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchLogin: (user, histoty) => {
      dispatch(fetchLoginApi(user, histoty));
    },
    fetchResetLogin: (data, history) => {
      dispatch(fetchResetPasswordApi(data, history));
    },
    fetchLoginGoogle: (data, history) => {
      dispatch(fetchGoogleLoginApi(data, history));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
