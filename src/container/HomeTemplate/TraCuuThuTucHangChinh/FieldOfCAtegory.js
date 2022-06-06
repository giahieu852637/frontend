import React, { Component } from "react";
import { connect } from "react-redux";
import Loader from "../../../components/Loader";
import FileHoSo from "./FileHoSo";
import { actGetFieldApi } from "./modules/action";

class FieldOfCAtegory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filed_id: "",
    };
  }
  componentDidMount() {
    const { category_id } = this.props;
    this.props.fetchListField(category_id);
  }
  render() {
    const renderHtml = () => {
      const { loading, data } = this.props;
      if (loading) return <Loader />;
      return (
        data &&
        data.map((item, i) => {
          return (
            <div className="mb-2">
              <div
                className={
                  this.state.filed_id === item.id
                    ? "px-2 bg-links-active py-2 mr-2"
                    : "px-2 bg-links py-2 mr-2"
                }
                onClick={() => {
                  this.setState({ filed_id: item.id });
                }}
              >
                {item.title}
              </div>
            </div>
          );
        })
      );
    };
    return (
      <>
        <div className="col-2">{renderHtml()}</div>
        <div className="col-8 bg-light py-3">
          <FileHoSo key={Math.random()} field_id={this.state.filed_id} />
        </div>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    loading: state.listFieldReducer.loading,
    data: state.listFieldReducer.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchListField: (category_id) => {
      dispatch(actGetFieldApi(category_id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FieldOfCAtegory);
