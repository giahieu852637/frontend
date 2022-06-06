import axios from "axios";
import React, { Component } from "react";
import { connect } from "react-redux";
import NameCategory from "../../../components/NameCategory";
import ThanhLienKet from "../../../components/ThanhLienKet";
import { actGetFieldApi } from "../TraCuuThuTucHangChinh/modules/action";
import { actNopHoSoApi } from "./modules/action";
import toast, { Toaster } from "react-hot-toast";

class NopHoSo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname: "",
      cmnd: "",
      ngaythangnamsinh: "",
      sonha: "",
      huyennha: "",
      tinhnha: "Đồng Nai",
      sdt: "",
      email: "",
      title: "",
      description: "",
      hoso: null,
      hosoduocky:'',
      category: this.props.match.params.id.split("-")[0],
      field: this.props.match.params.id.split("-")[1],
    };
  }
  componentDidMount() {
    document.title = "Dich vụ công | Nộp hồ sơ";
    const id = this.props.match.params.id;
    let arrayStrig = id.split("-");
    this.props.fetchListField(arrayStrig[0]);
  }

  renderFieldHtml = () => {
    const { data } = this.props;

    return (
      data &&
      data.map((item) => {
        return <option value={item.id}>{item.title}</option>;
      })
    );
  };
  handleOnChange = (e) => {
    const { name, value } = e.target;
    if (name === "hoso") {
      this.setState({
        hoso: e.target.files[0],
      });
    } else {
      this.setState({
        [name]: value,
      });
    }
  };
  filePreview(e) {
    this.handleOnChange(e);
  }
  renderNoti = () => {
    const { err } = this.props;
    if (err) return <div className="alert alert-danger p-2">{err}</div>;
    else return <Toaster />;
  };
  handleSubmit = (e) => {
    e.preventDefault();

    const form_data = new FormData();
    form_data.append("fullname", this.state.fullname);
    form_data.append("cmnd", this.state.cmnd);
    form_data.append("ngaythangnamsinh", this.state.ngaythangnamsinh);
    form_data.append("sonha", this.state.sonha);
    form_data.append("huyennha", this.state.huyennha);
    form_data.append("tinhnha", this.state.tinhnha);
    form_data.append("sdt", this.state.sdt);
    form_data.append("email", this.state.email);
    form_data.append("title", this.state.title);
    form_data.append("field", this.state.field);
    form_data.append("description", this.state.description);
    form_data.append("category", this.state.category);
    if (this.state.hoso)
      form_data.append("hoso", this.state.hoso, this.state.hoso.name);

    this.props.fetchSubmit(form_data, this.props.history);
  };

  render() {
    const notify = () => toast.success("Đã nộp đơn thành công");
    const id = this.props.match.params.id;
    let arrayStrig = id.split("-");
    return (
      <div className="mt-5 pt-5">
        <ThanhLienKet
          key="1"
          text1="Trang chủ"
          link1="/"
          text2="Nộp hồ sơ"
          link2="/nophoso/1-1"
        />
        <div className="container">
          <h2 className="text-center fw-bold">NỘP HỒ SƠ</h2>
          <h2>
            <NameCategory key={Math.random()} id={arrayStrig[0]} />
          </h2>
          <form
            onSubmit={this.handleSubmit}
            action="#"
            enctype="multipart/form-data"
          >
            <div className="container">
              {this.renderNoti()}
              <div className="row">
                <div className="col-12 col-md-4 mb-3">
                  <label htmlFor="fullnameInput mb-2" className="form-label">
                    Họ và tên
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="fullnameInput"
                    name="fullname"
                    onChange={this.handleOnChange}
                  />
                </div>
                <div className="col-12 col-md-4 mb-3">
                  <label htmlFor="cmndInput mb-2" className="form-label">
                    Chứng minh nhân dân
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="cmndInput"
                    name="cmnd"
                    onChange={this.handleOnChange}
                  />
                </div>

                <div className="col-12 col-md-4 mb-3">
                  <label htmlFor="namsinh mb-2" className="form-label">
                    Ngày thắng năm sinh
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="date"
                    name="ngaythangnamsinh"
                    onChange={this.handleOnChange}
                  />
                </div>
                <div className="col-12 col-md-4 mb-3">
                  <label htmlFor="emailInput mb-2" className="form-label">
                    Số diện thoại
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="sdtInput"
                    name="sdt"
                    onChange={this.handleOnChange}
                  />
                </div>
                <div className="col-12 col-md-4 mb-3">
                  <label htmlFor="emailInput mb-2" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="emailInput"
                    name="email"
                    onChange={this.handleOnChange}
                  />
                </div>
                <div className="col-12 col-md-4 mb-3">
                  <label htmlFor="sonha mb-2" className="form-label">
                    Số nhà
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="sonha"
                    name="sonha"
                    onChange={this.handleOnChange}
                  />
                </div>
                <div className="col-12 col-md-4 mb-3">
                  <label htmlFor="huyennha mb-2" className="form-label">
                    Huyện
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="huyennha"
                    name="huyennha"
                    onChange={this.handleOnChange}
                  />
                </div>
                <div className="col-12 col-md-4 mb-3">
                  <label htmlFor="tinhnha mb-2" className="form-label">
                    Tỉnh
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="tinhnha"
                    name="tinhnha"
                    onChange={this.handleOnChange}
                    value="Đồng Nai"
                  />
                </div>

                <div className="col-12 col-md-5 mb-3">
                  <label htmlFor="titleInput mb-2" className="form-label">
                    Tên văn bản
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="titleInput"
                    name="title"
                    onChange={this.handleOnChange}
                  />
                </div>
                <div className="col-12 col-md-7 mb-3">
                  <label htmlFor="formFile" className="form-label">
                    Default file input example
                  </label>
                  <input
                    className="form-control"
                    type="file"
                    name="hoso"
                    id="formFile"
                    onChange={this.filePreview.bind(this)}
                  />
                </div>

                <div className="col-6 col-md-4 mb-3">
                  <select className="form-select" aria-label="Chọn loại hình">
                    <option selected>Chọn loại hình</option>
                    {this.renderFieldHtml()}
                  </select>
                </div>
                <div className="col-12 mb-3">
                  <label htmlFor="descriptionInput mb-2" className="form-label">
                    Thông tin thêm
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="descriptionInput"
                    name="description"
                    onChange={this.handleOnChange}
                  />
                </div>
              </div>
              <button
                type="submit"
                className="btn btn-primary text-center mx-auto"
                onClick={() => {
                  notify();
                }}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    data: state.listFieldReducer.data,
    err: state.listNopHoSoReducer.err,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchListField: (category) => {
      dispatch(actGetFieldApi(category));
    },
    fetchSubmit: (data, histoty) => {
      dispatch(actNopHoSoApi(data, histoty));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NopHoSo);
