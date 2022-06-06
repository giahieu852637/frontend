import { ListItem } from "@material-ui/core";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Loader from "../../../components/Loader";
import ThanhLienKet from "../../../components/ThanhLienKet";
import { actGetDetailHoSoApi } from "./modules/action";

class DetailHoSoPage extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    document.title = "Dich vụ công | Hồ so" + id;
    this.props.fetchDetailHoSo(id);
  }
  render() {
    const { data, loading } = this.props;
    if (loading) return <Loader />;
    return (
      data && (
        <div className="mt-5 pt-5">
          <ThanhLienKet
            key="1"
            text1="Trang chủ"
            link1="/"
            text2="Thành phần"
            link2="/tracuu"
          />
          <div className="container bg-white py-3">
            <h2 className="text-center me-3 pt-2">{data.title}</h2>
            <p className="container px-2 my-5">{data.description}</p>
            {data.hoso.slice(-3) === "pdf" ? (
              <div className="container">
                <iframe
                  src={"https://"+data.hoso.substring(7)}
                  frameborder="0"
                  height="500"
                  width="100%"
                ></iframe>
              </div>
            ) : (
              ""
            )}
            <a className="btn btn-download " href={data.hoso}>
              Download file
            </a>
            <Link
              className="btn btn-download "
              to={"/nophoso/" + data.id + "-1"}
            >
              Nộp đơn
            </Link>
          </div>
        </div>
      )
    );
  }
}
const mapStateToProps = (state) => {
  return {
    loading: state.listDetailHoSoReducer.loading,
    data: state.listDetailHoSoReducer.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchDetailHoSo: (id) => {
      dispatch(actGetDetailHoSoApi(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailHoSoPage);
