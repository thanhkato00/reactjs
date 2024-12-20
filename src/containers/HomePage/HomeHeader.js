import React, { Component } from "react";
import { connect } from "react-redux";
import "./HomeHeader.scss";
import logo from "../../assets/logo1.svg";
import { FormattedMessage } from "react-intl";
import { LANGUAGES } from "../../utils/constant";
import { changeLanguage } from "../../store/actions/appActions";
class HomeHeader extends Component {
  changeLanguage = (language) => {
    this.props.changeLanguageAppRedux(language);
  };
  render() {
    let language = this.props.language;
    return (
      <React.Fragment>
        <div className="home-header-container">
          <div className="home-header-content">
            <div className="left-content">
              <i className="fas fa-bars"></i>
              <img className="header-logo" src={logo} />
            </div>
            <div className="center-content">
              <div className="child-content">
                <div>
                  <b>
                    <FormattedMessage id="home-header.specialty" />{" "}
                  </b>
                </div>
                <div className="subs-title">
                  <FormattedMessage id="home-header.searchDoctor" />
                </div>
              </div>
              <div className="child-content">
                <div>
                  <b>
                    <FormattedMessage id="home-header.healthcare-facility" />
                  </b>
                </div>
                <div className="subs-title">
                  {" "}
                  <FormattedMessage id="home-header.choose-clinic" />
                </div>
              </div>
              <div className="child-content">
                <div>
                  <b>
                    <FormattedMessage id="home-header.doctor" />
                  </b>
                </div>
                <div className="subs-title">
                  <FormattedMessage id="home-header.choose-doctor" />
                </div>
              </div>
              <div className="child-content">
                <div>
                  <b>
                    <FormattedMessage id="home-header.medical-package" />
                  </b>
                </div>
                <div className="subs-title">
                  <FormattedMessage id="home-header.comprehensive-check-up" />
                </div>
              </div>
            </div>
            <div className="right-content">
              <div className="support">
                <i className="fas fa-question-circle">
                  <FormattedMessage id="home-header.support" />
                </i>
              </div>
              <div
                className={
                  language === LANGUAGES.VI
                    ? "language-vi active"
                    : "language-vi"
                }
              >
                <span
                  onClick={() => {
                    this.changeLanguage(LANGUAGES.VI);
                  }}
                >
                  VN
                </span>
              </div>
              <div
                className={
                  language === LANGUAGES.EN
                    ? "language-en active"
                    : "language-en"
                }
              >
                <span
                  onClick={() => {
                    this.changeLanguage(LANGUAGES.EN);
                  }}
                >
                  EN
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="home-header-banner">
          <div className="content-up">
            <div className="title-1">
              <FormattedMessage id="banner.title1" />
            </div>
            <div className="title-2">
              <FormattedMessage id="banner.title2" />
            </div>
            <div className="search">
              <i className="fas fa-search"></i>
              <input
                type="text"
                placeholder={
                  <FormattedMessage
                    id="banner.placeholder"
                    defaultMessage="Search"
                  />
                }
              />
            </div>
          </div>
          <div className="content-down">
            <div className="options">
              <div className="child-option">
                <div className="icon-child">
                  <i className="fas fa-hospital"></i>
                </div>
                <div className="text-child">
                  <FormattedMessage id="banner.spec_consult" />
                </div>
              </div>

              <div className="child-option">
                <div className="icon-child">
                  <i className="fas fa-mobile-alt"></i>
                </div>
                <div className="text-child">
                  {" "}
                  <div className="text-child">
                    <FormattedMessage id="banner.remote_consult" />
                  </div>
                </div>
              </div>
              <div className="child-option">
                <div className="icon-child">
                  <i className="fas fa-procedures"></i>
                </div>
                <div className="text-child">
                  {" "}
                  <div className="text-child">
                    <FormattedMessage id="banner.general_checkup" />
                  </div>
                </div>
              </div>
              <div className="child-option">
                <div className="icon-child">
                  <i className="fas fa-vials"></i>
                </div>
                <div className="text-child">
                  {" "}
                  <FormattedMessage id="banner.medical_testing" />
                </div>
              </div>
              <div className="child-option">
                <div className="icon-child">
                  <i className="fas fa-user-md"></i>
                </div>
                <div className="text-child">
                  {" "}
                  <FormattedMessage id="banner.mental_health" />
                </div>
              </div>
              <div className="child-option">
                <div className="icon-child">
                  <i className="fas fa-briefcase-medical"></i>
                </div>
                <div className="text-child">
                  {" "}
                  <FormattedMessage id="banner.dental_checkup" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
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
  return {
    changeLanguageAppRedux: (language) => dispatch(changeLanguage(language)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
