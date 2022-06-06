import React, { Component } from "react";
import { Link } from "react-router-dom";
import ThanhLienKet from "../../../components/ThanhLienKet";
import Footer from "../Footer";
import HoiDapDuocGoi from "./HoiDapDuocGoi";
import HoiDapThuongGap from "./HoiDapThuongGap";

class HoiDap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
    };
  }
  componentDidMount() {
    document.title = "Dich vụ công | Hỏi đáp";
  }
  handleOnChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };
  renderHtml = () => {
    console.log(this.state.title);
    return <HoiDapThuongGap key={2} title={this.state.title} />;
  };
  render() {
    return (
      <div className="mt-5 pt-5">
        <ThanhLienKet
          key="1"
          text1="Trang chủ"
          link1="/"
          text2="Hỏi đáp"
          link2="/hoidap"
        />
        <div className="categoryHoiDap container bg-white px-3">
          <div className="row py-5">
            <div className="col-12 col-md-6">
              <div className="container border-primary border border-2 rounded p-2">
                <div className="content-header">
                  <h4 className="text-danger text-center">
                    VĂN PHÒNG CHÍNH PHỦ
                  </h4>
                  <div className="text-center my-3">
                    <img
                      src={process.env.PUBLIC_URL + "/img/logo-cp.jpg"}
                      className="text-center w-25"
                      alt="logocp"
                    />
                  </div>
                  <p className="my-3 text-center">
                    HỆ THỐNG TIẾP NHẬN, TRẢ LỜI PHẢN ÁNH, KIẾN NGHỊ
                  </p>
                  <div className="text-center">
                    <Link
                      className="btn btn-primary me-2"
                      to="/form/hoidap/nguoidan"
                    >
                      <i className="fa fa-user me-2"></i>Người dân
                    </Link>
                    <Link
                      className="btn btn-primary"
                      to="/form/hoidap/doanhnghiep"
                    >
                      <i className="fa fa-users me-2"></i>Doanh nghiệp
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="container border-primary border border-2 rounded p-2">
                <div className="content-header">
                  <h4 className="text-danger text-center">
                    ỦY BAN NHÂN DÂN TỈNH ĐỒNG NAI
                  </h4>
                  <div className="text-center my-3">
                    <img
                      src={process.env.PUBLIC_URL + "/img/LogoUBND.png"}
                      className="text-center w-25"
                      alt="logocp"
                    />
                  </div>
                  <p className="my-3 text-center">
                    HỆ THỐNG TIẾP NHẬN, TRẢ LỜI PHẢN ÁNH, KIẾN NGHỊ
                  </p>
                  <div className="text-center">
                    <Link
                      className="btn btn-primary me-2"
                      to="/form/hoidap/hoikhiennghi"
                    >
                      <i className="fa fa-question me-2"></i>Gửi câu hỏi và kiến
                      nghị
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6"></div>
          </div>
        </div>
        <div className="container bg-white px-3 mt-3">
          <div className="border-2 border rounded">
            <div className="m-3">
              <div>
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      id="home-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#home"
                      type="button"
                      role="tab"
                      aria-controls="home"
                      aria-selected="true"
                    >
                      Hỏi đáp kiến nghị đã được gởi
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="profile-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#profile"
                      type="button"
                      role="tab"
                      aria-controls="profile"
                      aria-selected="false"
                    >
                      Hỏi đáp kiến nghị thưởng gặp
                    </button>
                  </li>
                </ul>
                <div
                  className="tab-content"
                  id="myTabContent"
                  style={{ minHeight: "50vh" }}
                >
                  <div
                    className="tab-pane fade show active"
                    id="home"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  >
                    <div className="my-3"></div>
                    <HoiDapDuocGoi key={1} />
                  </div>
                  <div
                    className="tab-pane fade"
                    id="profile"
                    role="tabpanel"
                    aria-labelledby="profile-tab"
                  >
                    <div className="my-3">
                      <form className="d-flex">
                        <input
                          className="form-control me-2"
                          type="search"
                          placeholder="Search"
                          aria-label="Search"
                          name="title"
                          id="titelSearch"
                          onChange={this.handleOnChange}
                        />
                      </form>
                    </div>
                    {this.renderHtml()}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default HoiDap;
