import React, { Component } from "react";

import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Loader from "../../../components/Loader";
import { actGetHoSoApi } from "./modules/action";

class FileHoSo extends Component {
  componentDidMount() {
    const { field_id } = this.props;
    if (field_id) this.props.fetchListHoSo(field_id);
  }
  render() {
    const renderHtml = () => {
      const { loading, data } = this.props;
      if (loading) return <Loader />;
      return (
        data &&
        data.map((item, i) => {
          return (
            <div className="mb-2 bg-white px-3">
              <span className="px-2 bg-primary text-light d-inline me-3">
                {item.id}
              </span>
              <h3 className="d-inline me-3">{item.title}</h3>
              <Link className="text-decoration-none" to={"/detail/" + item.id}>
                {">>"}Xem chi tiết
              </Link>
              <a className="btn btn-download float-end" href={item.hoso}>
                Download file
              </a>
              <p className="container px-2 my-2">{item.description}</p>
              {item.namehoso === "pdf" ? (
                <div className="container">
                  <iframe
                    src={item.hoso}
                    frameborder="0"
                    height="500"
                    width="100%"
                  ></iframe>
                </div>
              ) : (
                ""
              )}
            </div>
          );
        })
      );
    };
    return <>{renderHtml()}</>;
  }
}
const mapStateToProps = (state) => {
  return {
    loading: state.listListHoSoReducer.loading,
    data: state.listListHoSoReducer.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchListHoSo: (field_id) => {
      dispatch(actGetHoSoApi(field_id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FileHoSo);
