import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { actQuestionApi } from "./modules/action";

class HoiDapForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      content: "",
      contentTL: "",
      type: this.props.match.params.type,
    };
  }
  componentDidMount() {
    const type = this.props.match.params.type;
    document.title = "Dich vụ công | Hỏi đáp " + type;
  }
  handleOnChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.fetchSubmit(this.state, this.props.history);
  };
  render() {
    const type = this.props.match.params.type;
    let types =
      type === "hoikhiennghi"
        ? "kiến nghị"
        : type === "nguoidan"
        ? "người dân"
        : "doanh nghiệp";
    let access_token = JSON.parse(localStorage.getItem("access_token"));
    if (access_token === null)
      return (
        <Redirect
          to={{
            pathname: "/login",
          }}
        />
      );
    return (
      <div className="mt-5 pt-5">
        <div className="container bg-white">
          <form onSubmit={this.handleSubmit} action="#">
            <h1 className="text-center">Hỏi đáp {types}</h1>
            {/* Name input */}
            <div className="form-outline mb-4">
              <input
                type="text"
                id="form4Example1"
                name="name"
                onChange={this.handleOnChange}
                className=" border form-control"
              />
              <label className="form-label" htmlFor="form4Example1">
                Name
              </label>
            </div>
            {/* Email input */}
            <div className="form-outline mb-4">
              <input
                type="email"
                name="email"
                onChange={this.handleOnChange}
                id="form4Example2"
                className="border form-control"
              />
              <label className="form-label" htmlFor="form4Example2">
                Email address
              </label>
            </div>
            {/* Message input */}
            <div className="form-outline mb-4">
              <textarea
                className="border form-control"
                id="form4Example3"
                rows={4}
                defaultValue={""}
                name="content"
                onChange={this.handleOnChange}
              />
              <label className="form-label" htmlFor="form4Example3">
                Message
              </label>
            </div>
            <button type="submit" className="btn btn-primary btn-block mb-4">
              Send
            </button>
          </form>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    data: state.listQuestionReducer.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSubmit: (data, histoty) => {
      dispatch(actQuestionApi(data, histoty));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HoiDapForm);
