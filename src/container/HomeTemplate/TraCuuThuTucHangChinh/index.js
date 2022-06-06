import React, { Component } from "react";
import { connect } from "react-redux";
import Loader from "../../../components/Loader";
import ThanhLienKet from "../../../components/ThanhLienKet";
import FieldOfCAtegory from "./FieldOfCAtegory";
import { actGetCategoryApi } from "./modules/action";
import Searchbutton from "./searchbutton";

class TraCuuThuTucHangChinh extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category_id: 1,
    };
  }
  componentDidMount() {
    document.title = "Dich vụ công | Tra cứu thủ tục hành chính";
    this.props.fetchListCategory();
  }
  renderHtml = () => {
    const { loading, data } = this.props;
    if (loading) return <Loader />;

    return (
      data &&
      data.map((item, i) => {
        return (
          <div className="mb-2">
            <div
              className={
                this.state.category_id === item.id
                  ? "px-2 bg-links-active py-2 mr-2"
                  : "px-2 bg-links py-2 mr-2"
              }
              onClick={() => {
                this.setState({ category_id: item.id });
              }}
            >
              {item.name}
            </div>
          </div>
        );
      })
    );
  };
  render() {
    return (
      <div className="mt-5 pt-5">
        <ThanhLienKet
          key="1"
          text1="Trang chủ"
          link1="/"
          text2="Tra cứu"
          link2="/tracuu"
        />
        <div className="bg-white py-2">
          <h2 className="text-center text-bludenhat">Tra cứu</h2>
        </div>
        <div className="container my-3 ">
          <Searchbutton />
        </div>

        <div className="container-fluid mt-3 ">
          <div className="bg-white px-0 px-md-3 rounded shadow py-5 mx-0 mx-md-3">
            <div className="row">
              <div className="col-2">
                <div className=" my-2">{this.renderHtml()}</div>
              </div>
              <>
                <FieldOfCAtegory
                  key={Math.random()}
                  category_id={this.state.category_id}
                />
              </>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.listCategoryReducer.loading,
    data: state.listCategoryReducer.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchListCategory: () => {
      dispatch(actGetCategoryApi());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TraCuuThuTucHangChinh);
