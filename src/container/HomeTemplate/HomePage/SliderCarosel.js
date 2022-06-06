import React, { Component } from "react";

class SliderCarosel extends Component {
  render() {
    return (
      <div className="Slider mt-1 wow animate__fadeInDown" data-wow-delay="0s">
        <div
          id="carouselControls"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div
                className="img-cover"
                style={{
                  backgroundImage:
                    "url(" +
                    process.env.PUBLIC_URL +
                    "/img/wallpaperflare.jpg)",
                }}
              ></div>
            </div>
            <div className="carousel-item">
              <div
                className="img-cover"
                style={{
                  backgroundImage:
                    "url(" +
                    process.env.PUBLIC_URL +
                    "/img/wallpaperflare.com_wallpaper.jpg)",
                }}
              ></div>
            </div>
            <div className="carousel-item">
              <div
                className="img-cover"
                style={{
                  backgroundImage:
                    "url(" + process.env.PUBLIC_URL + "/img/phodibo.jpg)",
                }}
              ></div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselControls"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next buttonContolHover"
            type="button"
            data-bs-target="#carouselControls"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    );
  }
}

export default SliderCarosel;
