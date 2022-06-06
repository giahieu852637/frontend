import React, { Component } from "react";
import "./index.css";

export default class BackToTop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      is_visible: false,
    };
  }

  componentDidMount() {
    var scrollComponent = this;
    document.addEventListener("scroll", function (e) {
      scrollComponent.toggleVisibility();
    });
  }

  toggleVisibility() {
    if (window.pageYOffset > 300) {
      this.setState({
        is_visible: true,
      });
    } else {
      this.setState({
        is_visible: false,
      });
    }
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  render() {
    const { is_visible } = this.state;
    return (
      <div className="scroll-to-top">
        {is_visible && (
          <div
            onClick={() => this.scrollToTop()}
            className="font-weight-bold bg-primary text-dark bg-white rounded shadow-lg rounded-circle center text-center"
            style={{
              fontSize: 30,
              width: 50,
              height: 50,
            }}
          >
            <i className="text-dark fa fa-sort-up pt-3"></i>
          </div>
        )}
      </div>
    );
  }
}
