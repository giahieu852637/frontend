import React, { Component } from "react";
import { connect } from "react-redux";
import Loader from "../../../../components/Loader";
import { actListQuestionThuongGapApi } from "./modules/action";

class HoiDapThuongGap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
    };
  }
  componentDidMount() {
    const { title } = this.props;
    this.props.fetchList(title);
  }
  componentDidUpdate() {
    const { title } = this.props;
    if (title != this.state.title) {
      this.setState({ title });
      this.props.fetchList(title);
    }
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
              <strong>Tiêu đề:</strong> {item.title}
            </p>
            <p>
              <strong>Nội dung câu hõi:</strong> {item.content}
            </p>
            <p>
              <strong>Trả lời:</strong> {item.contentTL}
            </p>
          </div>
        );
      })
    );
  }
}
const mapStateToProps = (state) => {
  return {
    data: state.listQuestionThuongGapReducer.data,
    loading: state.listQuestionThuongGapReducer.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchList: (title) => {
      dispatch(actListQuestionThuongGapApi(title));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HoiDapThuongGap);
