import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Loader from "../../../components/Loader";
import { actStatusHoSoApi } from "./modules/action";

class TinhTrangHoSo extends Component {
  componentDidMount() {
    document.title = "Dich vụ công | Trạng thái hồ sơ";
    this.props.fetchListStatusHoSo();
  }
  render() {
    const renderHtml = () => {
      const { loading, data } = this.props;
      if (loading) return <Loader />;
      return (
        data &&
        data.map((item) => {
          return (
            <>
              <div className="col-12">
                <div
                  className="text-decoration-none text-black"
                  to={"/detailstatus/" + item.id}
                >
                  <div className="border rounded border-1 my-3 px-3 py-3">
                    <h4>{item.hosonop.title}</h4>
                    <p>
                      Tình trang:{" "}
                      <span className="text-success fw-bold">
                        {item.status === 0
                          ? "Đang chờ"
                          : item.status === 1
                          ? "Đã xem"
                          : item.status === 2
                          ? "Thành công"
                          : "Thất bại"}
                      </span>
                    </p>
                    <p className="my-2 text-black-50">
                      Thời gian: {item.created_date}
                    </p>
                    <Link
                      className="btn btn-primary float-end"
                      to={"/chititetinhtrang/" + item.id}
                    >
                      Xem chi tiết
                    </Link>
                  </div>
                </div>
              </div>
            </>
          );
        })
      );
    };
    return (
      <div className="mt-5 pt-5">
        <div className="container bg-white rounded shadow py-3">
          <h2 className="text-center pt-3">Tình trang hồ sơ</h2>
          <div className="container mt-5 mb-2">
            <div className="row">{renderHtml()}</div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    loading: state.statusHoSoReducer.loading,
    data: state.statusHoSoReducer.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchListStatusHoSo: (pagram) => {
      dispatch(actStatusHoSoApi(pagram));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TinhTrangHoSo);
