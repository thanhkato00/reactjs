import React, { Component } from "react";
import { connect } from "react-redux";

class About extends Component {
  render() {
    return (
      <div className="section-share section-about">
        <div className="section-about-header">
          Truyền thông nói gì về Kirikayza
        </div>
        <div className="section-about-content">
          <div className="content-left">
            <iframe
              width="100%"
              height="400px"
              src="https://www.youtube.com/embed/Qg52au6_Low?list=RDQg52au6_Low"
              title="Đừng Lùi Bước - Karik 2011 (HQ + Lyric)"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
          <div className="content-right">
            <p>
              Xem toàn bộ các chương trình của Đài Truyền hình Việt Nam tại:
              ►Thưởng thức các bộ phim hấp dẫn tại VTV Go: https://goo.gl/XUJuqj
              ► Thưởng thức các nội dung về phong cách sống tại VTV Life:
              https://goo.gl/aAcyXm Bản quyền thuộc về VTV - Đài Truyền hình
              Việt Nam. Copyright © 2024 Vietnam Television.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(About);
