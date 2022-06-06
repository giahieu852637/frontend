import { Link } from "@material-ui/core";
import React, { Component } from "react";
import { connect } from "react-redux";
import Loader from "../../../../components/Loader";
import { urlApi, urlApiFile } from "../../../../config/api";
import { actChitieTinhtrangDetailHoSoApi } from "./modules/action";

class TinhTrangChiTiet extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    document.title = "Dich vụ công | Hồ sơ tình trạng chi tiết" + id;
    this.props.fetchListStatusHoSo(id);
  }
  render() {
    const { data, loading } = this.props;
    if (loading) return <Loader />;
    return (
      data && (
        <div className="mt-5 pt-5">
          <div className="container bg-white rounded shadow">
            <h2 className="text-primary text-center my-2 pt-3">
              Tình trạng hồ sơ
            </h2>
            <div className="container px-3 py-2">
              <p className=" mb-2">
                fullname : <span>{data.fullname}</span>
              </p>
              <p className=" mb-2">
                cmnd : <span>{data.cmnd}</span>
              </p>
              <p className=" mb-2">
                ngaythangnamsinh : <span>{data.ngaythangnamsinh}</span>
              </p>
              <p className=" mb-2">
                sonha : <span>{data.sonha}</span>
              </p>
              <p className=" mb-2">
                tonha : <span>{data.tonha}</span>
              </p>
              <p className=" mb-2">
                huyennha : <span>{data.huyennha}</span>
              </p>
              <p className=" mb-2">
                tinhnha : <span>{data.tinhnha}</span>
              </p>
              <p className=" mb-2">
                sdt : <span>{data.sdt}</span>
              </p>
              <p className=" mb-2">
                email : <span>{data.email}</span>
              </p>
              <p className=" mb-2">
                hoso :{" "}
                <a role="button" tabindex="0" href={urlApiFile + data.hoso}>
                  {urlApiFile + data.hoso}
                </a>
              </p>
              <p className=" mb-2">
                hosoduocky :{" "}
                <a
                  role="button"
                  tabindex="0"
                  href={urlApiFile + data.hosoduocky}
                >
                  {urlApiFile + data.hosoduocky}
                </a>
              </p>
              <p className=" mb-2">
                description : <span>{data.description}</span>
              </p>
              <p className=" mb-2">
                category : <span>{data.category}</span>
              </p>
              <p className=" mb-2">
                field : <span>{data.field}</span>
              </p>
              <p className=" mb-2">
                user : <span>{data.user}</span>
              </p>
              <p className=" mb-2">
                status : <span>{data.status}</span>
              </p>
            </div>
          </div>
        </div>
      )
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.listChiTietHoSoKyReducer.loading,
    data: state.listChiTietHoSoKyReducer.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchListStatusHoSo: (id) => {
      dispatch(actChitieTinhtrangDetailHoSoApi(id));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TinhTrangChiTiet);
