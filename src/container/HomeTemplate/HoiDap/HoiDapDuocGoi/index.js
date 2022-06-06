import React, { Component } from "react";
import { connect } from "react-redux";
import Loader from "../../../../components/Loader";
import { actListQuestionApi } from "./modules/action";

class HoiDapDuocGoi extends Component {
  componentDidMount() {
    this.props.fetchList();
  }
  render() {
    const { data, loading } = this.props;
    if (loading) return <Loader />;
    return (
      data &&
      data.map((item, i) => {
        return (
          <div className="bg-white my-3 border border-1 py-3 rounded shadow-sm px-3">
            <p>
              <strong>Tên:</strong> {item.name}
            </p>
            <p>
              <strong>Loại:</strong> {item.type}
            </p>
            <p>
              <strong>Email:</strong> {item.email}
            </p>
            <p>
              <strong>Câu hỏi:</strong> {item.content}
            </p>
            <p>
              <strong>Câu trả lời:</strong>{" "}
              {item.contentTL !== "" ? "" : "Chưa có kết quả"}
            </p>
          </div>
        );
      })
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.listQuestionUserReducer.data,
    loading: state.listQuestionUserReducer.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchList: () => {
      dispatch(actListQuestionApi());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HoiDapDuocGoi);
