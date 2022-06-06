import React, { Component } from "react";
import { connect } from "react-redux";
import Loader from "../../../components/Loader";
import { actListHoSoApi } from "./modules/action";
import { actKyListHoSoApi } from "./modulesKyFile/action";
import toast, { Toaster } from "react-hot-toast";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
    };
  }
  componentDidMount() {
    document.title = "Dich vụ công | Trạng thái hồ sơ";
    this.props.fetchListHoSo(this.state.page);
  }

  render() {
    const notify = () => toast.success("Đã ký thành công");
    const renderPgtination = () => {
      const { loading, data } = this.props;
      if (loading) return <Loader />;
      if (data !== null && data.previous === null && data.next === null) {
        return (
          <nav aria-label="Page navigation example">
            <ul className="pagination">
              <li className="page-item disabled">
                <a
                  className="page-link"
                  href="#"
                  onClick={() => {
                    this.props.fetchListHoSo(this.state.page - 1);
                    this.setState({ page: this.state.page - 1 });
                  }}
                >
                  Previous
                </a>
              </li>
              <li className="page-item disabled">
                <a
                  className="page-link"
                  href="#"
                  onClick={() => {
                    this.props.fetchListHoSo(this.state.page - 1);
                    this.setState({ page: this.state.page - 1 });
                  }}
                >
                  {this.state.page - 1}
                </a>
              </li>
              <li className="page-item disabled">
                <a
                  className="page-link"
                  href="#"
                  onClick={() => {
                    this.props.fetchListHoSo(this.state.page);
                    this.setState({ page: this.state.page });
                  }}
                >
                  {this.state.page}
                </a>
              </li>
              <li className="page-item disabled">
                <a
                  className="page-link"
                  href="#"
                  onClick={() => {
                    this.props.fetchListHoSo(this.state.page + 1);
                    this.setState({ page: this.state.page + 1 });
                  }}
                >
                  {this.state.page + 1}
                </a>
              </li>
              <li className="page-item disabled">
                <a
                  className="page-link"
                  href="#"
                  onClick={() => {
                    this.props.fetchListHoSo(this.state.page + 1);
                    this.setState({ page: this.state.page + 1 });
                  }}
                >
                  Next
                </a>
              </li>
            </ul>
          </nav>
        );
      }
      if (data !== null && data.previous === null && data.next !== null) {
        return (
          <nav aria-label="Page navigation example">
            <ul className="pagination">
              <li className="page-item disabled">
                <a
                  className="page-link"
                  href="#"
                  onClick={() => {
                    this.props.fetchListHoSo(this.state.page - 1);
                    this.setState({ page: this.state.page - 1 });
                  }}
                >
                  Previous
                </a>
              </li>
              <li className="page-item disabled">
                <a
                  className="page-link"
                  href="#"
                  onClick={() => {
                    this.props.fetchListHoSo(this.state.page - 1);
                    this.setState({ page: this.state.page - 1 });
                  }}
                >
                  {this.state.page - 1}
                </a>
              </li>
              <li className="page-item ">
                <a
                  className="page-link"
                  href="#"
                  onClick={() => {
                    this.props.fetchListHoSo(this.state.page);
                    this.setState({ page: this.state.page });
                  }}
                >
                  {this.state.page}
                </a>
              </li>
              <li className="page-item ">
                <a
                  className="page-link"
                  href="#"
                  onClick={() => {
                    this.props.fetchListHoSo(this.state.page + 1);
                    this.setState({ page: this.state.page + 1 });
                  }}
                >
                  {this.state.page + 1}
                </a>
              </li>
              <li className="page-item">
                <a
                  className="page-link"
                  href="#"
                  onClick={() => {
                    this.props.fetchListHoSo(this.state.page + 1);
                    this.setState({ page: this.state.page + 1 });
                  }}
                >
                  Next
                </a>
              </li>
            </ul>
          </nav>
        );
      }
      if (data !== null && data.previous !== null && data.next === null) {
        return (
          <nav aria-label="Page navigation example">
            <ul className="pagination">
              <li className="page-item">
                <a
                  className="page-link"
                  href="#"
                  onClick={() => {
                    this.props.fetchListHoSo(this.state.page - 1);
                    this.setState({ page: this.state.page - 1 });
                  }}
                >
                  Previous
                </a>
              </li>
              <li className="page-item">
                <a
                  className="page-link"
                  href="#"
                  onClick={() => {
                    this.props.fetchListHoSo(this.state.page - 1);
                    this.setState({ page: this.state.page - 1 });
                  }}
                >
                  {this.state.page - 1}
                </a>
              </li>
              <li className="page-item">
                <a
                  className="page-link"
                  href="#"
                  onClick={() => {
                    this.props.fetchListHoSo(this.state.page);
                    this.setState({ page: this.state.page });
                  }}
                >
                  {this.state.page}
                </a>
              </li>
              <li className="page-item disabled">
                <a
                  className="page-link"
                  href="#"
                  onClick={() => {
                    this.props.fetchListHoSo(this.state.page + 1);
                    this.setState({ page: this.state.page + 1 });
                  }}
                >
                  {this.state.page + 1}
                </a>
              </li>
              <li className="page-item disabled">
                <a
                  className="page-link"
                  href="#"
                  onClick={() => {
                    this.props.fetchListHoSo(this.state.page + 1);
                    this.setState({ page: this.state.page + 1 });
                  }}
                >
                  Next
                </a>
              </li>
            </ul>
          </nav>
        );
      }
      if (data !== null && data.previous !== null && data.next !== null) {
        return (
          <nav aria-label="Page navigation example">
            <ul className="pagination">
              <li className="page-item">
                <a
                  className="page-link"
                  href="#"
                  onClick={() => {
                    this.props.fetchListHoSo(this.state.page - 1);
                    this.setState({ page: this.state.page - 1 });
                  }}
                >
                  Previous
                </a>
              </li>
              <li className="page-item">
                <a
                  className="page-link"
                  href="#"
                  onClick={() => {
                    this.props.fetchListHoSo(this.state.page - 1);
                    this.setState({ page: this.state.page - 1 });
                  }}
                >
                  {this.state.page - 1}
                </a>
              </li>
              <li className="page-item">
                <a
                  className="page-link"
                  href="#"
                  onClick={() => {
                    this.props.fetchListHoSo(this.state.page);
                    this.setState({ page: this.state.page });
                  }}
                >
                  {this.state.page}
                </a>
              </li>
              <li className="page-item">
                <a
                  className="page-link"
                  href="#"
                  onClick={() => {
                    this.props.fetchListHoSo(this.state.page + 1);
                    this.setState({ page: this.state.page + 1 });
                  }}
                >
                  {this.state.page + 1}
                </a>
              </li>
              <li className="page-item ">
                <a
                  className="page-link"
                  href="#"
                  onClick={() => {
                    this.props.fetchListHoSo(this.state.page + 1);
                    this.setState({ page: this.state.page + 1 });
                  }}
                >
                  Next
                </a>
              </li>
            </ul>
          </nav>
        );
      }
      return (
        <>
          <li className="page-item">
            <a
              className="page-link"
              onClick={() => {
                this.props.fetchListHoSo(this.state.page.page - 1);
                this.setState({ page: this.state.page - 1 });
              }}
            >
              Previous
            </a>
          </li>
          <li className="page-item">
            <a
              className="page-link "
              href="#"
              onClick={() => {
                this.props.fetchListHoSo(this.state.page.page - 1);
                this.setState({ page: this.state.page - 1 });
              }}
            >
              {this.state.page - 1}
            </a>
          </li>
          <li className="page-item active" aria-current="page">
            <a
              className="page-link"
              href="#"
              onClick={() => {
                this.props.fetchListHoSo(this.state.page.page);
                this.setState({ page: this.state.page });
              }}
            >
              {this.state.page}
            </a>
          </li>
          <li className="page-item disabled">
            <a
              className="page-link"
              href="#"
              onClick={() => {
                this.props.fetchListHoSo(this.state.page);
                this.setState({ page: this.state.page });
              }}
            >
              {this.state.page + 1}
            </a>
          </li>
          <li className="page-item disabled">
            <a
              className="page-link"
              href="#"
              onClick={() => {
                this.props.fetchListHoSo(this.state.page);
                this.setState({ page: this.state.page });
              }}
            >
              Next
            </a>
          </li>
        </>
      );
    };
    const renderHtml = () => {
      const { loading, data } = this.props;
      if (loading) return <Loader key={9999999} />;
      return (
        data &&
        data.results.map((item) => {
          return (
            <>
              <div className="col-12">
                <div className="border rounded border-1 my-3 px-3 py-3">
                  <h4>{item.title}</h4>
                  <p className="my-2 text-black-50">
                    Họ và tên: <strong>{item.fullname}</strong>
                  </p>
                  <p className="my-2 text-black-50">
                    CMND: <strong>{item.cmnd}</strong>
                  </p>
                  <p className="my-2 text-black-50">
                    Ngày tháng năm sinh:{" "}
                    <strong>{item.ngaythangnamsinh}</strong>
                  </p>
                  <p className="my-2 text-black-50">
                    Số nhà: <strong>{item.sonha}</strong>
                  </p>
                  <p className="my-2 text-black-50">
                    Huyện nhà: <strong>{item.huyennha}</strong>
                  </p>
                  <p className="my-2 text-black-50">
                    Tỉnh nhà: <strong>{item.tinhnha}</strong>
                  </p>
                  <p className="my-2 text-black-50">
                    Số điện thoại: <strong>{item.sdt}</strong>
                  </p>
                  <p className="my-2 text-black-50">
                    Email: <strong>{item.email}</strong>
                  </p>
                  <p className="my-2 text-black-50">
                    Tiêu đề: <strong>{item.title}</strong>
                  </p>
                  <p className="my-2 text-black-50">
                    Hồ Sơ: <strong>{item.hoso}</strong>
                  </p>
                  <p className="my-2 text-black-50">
                    Description: <strong>{item.description}</strong>
                  </p>
                  <p className="my-2 text-black-50">
                    Thư mục: <strong>{item.category}</strong>
                  </p>
                  <p className="my-2 text-black-50">
                    Loại: <strong>{item.field}</strong>
                  </p>
                  <button
                    className="btn btn-primary float-end px-5"
                    onClick={() => {
                      this.props.fetchKyListHoSo(item.id);
                      notify();
                    }}
                  >
                    Ký
                  </button>
                </div>
              </div>
            </>
          );
        })
      );
    };
    return (
      <div className="mt-5 pt-5">
        <div className="container bg-white rounded shadow py-5">
          <h2 className="text-center pt-3">Hồ sơ</h2>
          <div className="container mt-5 mb-2">
            <div className="row py-3">{renderHtml()}</div>
            <div className="mt-1 pb-4 float-end">{renderPgtination()}</div>
            <Toaster />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.listHoSoReducer.loading,
    data: state.listHoSoReducer.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchListHoSo: (page) => {
      dispatch(actListHoSoApi(page));
    },
    fetchKyListHoSo: (id) => {
      dispatch(actKyListHoSoApi(id));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
