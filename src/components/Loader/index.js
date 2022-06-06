import React, { Component } from "react";

class Loader extends Component {
  render() {
    return (
      <div className="spinner-border text-info" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  }
}

export default Loader;
