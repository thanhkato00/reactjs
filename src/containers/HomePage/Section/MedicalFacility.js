import React, { Component } from "react";
import { connect } from "react-redux";
import Slider from "react-slick";
class MedicalFacility extends Component {
  render() {
    return (
      <div className="section-share section-medical ">
        <div className="section-container">
          <div className="section-header">
            <h2 className="title-section">Cơ sở y tế</h2>
            <button className="btn-section">Xem thêm</button>
          </div>
          <div className="section-body">
            <Slider {...this.props.settings}>
              <div className="section-customize">
                <div className="bg-image section-medical "></div>
                <span>Hệ thống y tế Hoàng Phúc 1</span>
              </div>{" "}
              <div className="section-customize">
                <div className="bg-image section-medical "></div>
                <span>Hệ thống y tế Hoàng Phúc 2</span>
              </div>{" "}
              <div className="section-customize">
                <div className="bg-image section-medical "></div>
                <span>Hệ thống y tế Hoàng Phúc 3</span>
              </div>{" "}
              <div className="section-customize">
                <div className="bg-image section-medical "></div>
                <span>Hệ thống y tế Hoàng Phúc 4</span>
              </div>{" "}
              <div className="section-customize">
                <div className="bg-image section-medical "></div>
                <span>Hệ thống y tế Hoàng Phúc 5</span>
              </div>{" "}
              <div className="section-customize">
                <div className="bg-image section-medical "></div>
                <span>Hệ thống y tế Hoàng Phúc 6</span>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(MedicalFacility);
