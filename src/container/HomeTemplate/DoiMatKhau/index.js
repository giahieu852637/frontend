import React, { Component } from "react";
import toast, { Toaster } from "react-hot-toast";
import { connect } from "react-redux";
import { fetchResetPasswordApi } from "../ManagerUser/Login/modules/actionReset";

class DoiMatKhau extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
    };
  }
  handleReset = (e) => {
    e.preventDefault();
    this.props.fetchResetLogin(this.state.email, this.props.history);
  };
  handleOnChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };
  render() {
    const notify = () => toast.success("Vui lòng check mail");
    return (
      <div className="container mt-5 pt-5">
        <h1 className="py-3 text-center">Quản lí tài khoản</h1>
        <div className="modal-content">
          <Toaster />
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Đổi mật khẩu - Vui lòng nhập email
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
                  className="btn buttonPurple px-5 "
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
    );
  }
}
const mapStateToProps = (state) => {};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchResetLogin: (data, history) => {
      dispatch(fetchResetPasswordApi(data, history));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(DoiMatKhau);