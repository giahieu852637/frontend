import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Loader from "../../../components/Loader";
import ThanhLienKet from "../../../components/ThanhLienKet";
import { actSearchHoSoApi } from "./modules/action";

class SearchPage extends Component {
  componentDidMount() {
    document.title = "Dich vụ công | Tìm kiếm sản phẩm";
    const pagram = this.props.match.params.pagram;
    this.props.fetchListSearchHoSo(pagram);
  }
  render() {
    const renderHtml = () => {
      const { loading, data } = this.props;
      if (loading) return <Loader />;
      return (
        data &&
        data.map((item, i) => {
          return (
            <div className="col-3 mb-2">
              <Link
                className="text-decoration-none text-black"
                to={"/detail/" + item.id}
              >
                <div className="bg-white my-3 border border-1 py-3 text-center rounded shadow-sm ">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  {item.image ? (
                    <img src={item.image} className="w-75" alt="" />
                  ) : (
                    ""
                  )}
                </div>
              </Link>
            </div>
          );
        })
      );
    };
    return (
      <div className="mt-5 pt-5">
        <ThanhLienKet
          key="1"
          text1="Trang chủ"
          link1="/"
          text2="Tìm kiếm"
          link2="/search"
        />
        <section>
          <h2
            className="fw-bold text-center mt-3 mb-5"
            style={{
              fontSize: "5rem",
            }}
          >
            Kết quả tìm kiếm
          </h2>
          <div className="container">
            <div className="row">{renderHtml()}</div>
          </div>
        </section>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    loading: state.searchHoSoReducer.loading,
    data: state.searchHoSoReducer.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchListSearchHoSo: (pagram) => {
      dispatch(actSearchHoSoApi(pagram));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
