import React, { Component } from "react";
import Slider from "react-slick";

class ThongKETinhHinhThuLy extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 6,
      autoplay: true,
    };
    const renderHtml = () => {
      let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
      return arr.map((item, i) => {
        return (
          <div className="px-2">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Tháng {item}, 2021</h5>
                <p className="card-text">
                  <div className="container py-3">
                    <div className="row">
                      <div className="col-6 text-oringe">100%</div>
                      <div className="col-6 text-oringe">Đúng hạn</div>
                    </div>
                  </div>
                  <p>
                    Tất cả hồ sơ đều đúng hạn. Xuất sắc
                  </p>
                </p>
              </div>
            </div>
          </div>
        );
      });
    };
    return (
      <section className="container-fluid my-3 ThongKETinhHinhThuLy">
        <h2 className="text-center w-100 bg-super-light py-3 border">
          Thống kê tình hình thụ lý
        </h2>
        <div className="container bg-s shadow rounded py-5 mt-3">
          <Slider {...settings} className="text-center">
            {renderHtml()}
          </Slider>
        </div>
      </section>
    );
  }
}

export default ThongKETinhHinhThuLy;
