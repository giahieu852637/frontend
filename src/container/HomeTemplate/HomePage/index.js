import React, { Component } from "react";
import Footer from "../Footer";
import IntroDVC from "./IntroDVC";
import SliderCarosel from "./SliderCarosel";
import ThongKETinhHinhThuLy from "./ThongKETinhHinhThuLy";
import TraCuuNhanh from "./TraCuuNhanh";
import { WOW } from "wowjs";

export default class HomePage extends Component {
  componentDidMount() {
    document.title = "Trang chủ | Dịch vụ công";
    const wow = new WOW({
      offset: 100,
      mobile: true,
      live: true,
    });
    wow.init();
  }
  render() {
    return (
      <div className="pt-4 mt-5">
        <SliderCarosel />
        <TraCuuNhanh />
        <IntroDVC />
        <ThongKETinhHinhThuLy />
        <Footer />
      </div>
    );
  }
}
