import React, { Component } from "react";
import { connect } from "react-redux";
import Loader from "../Loader";
import { actGetCategoryDetailApi } from "./modules/actions";

class NameCategory extends Component {
  componentDidMount() {
    const { id } = this.props;
    this.props.fetchCategoryDetail(id);
  }
  render() {
    const { data, loading } = this.props;
    if (loading) return <Loader />;
    return <div className="text-center mb-3">{data ? data.name : ""}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.listCategoryDetailReducer.loading,
    data: state.listCategoryDetailReducer.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCategoryDetail: (id) => {
      dispatch(actGetCategoryDetailApi(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NameCategory);
