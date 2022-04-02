import React, { memo } from "react";
import FromUser from "../Form";
import logo from "assets/images/logo.png";
import homepage from "assets/images/homepage.png";
import { useHistory } from "react-router";
import { createStructuredSelector } from "reselect";
import saga from "containers/HomePage/saga";
import reducer from "containers/HomePage/reducer";
import { useInjectSaga } from "utils/injectSaga";
import { useInjectReducer } from "utils/injectReducer";
import { makeSelectDataAddUser } from "../../selectors";
import { createUser } from "../../actions";
import { compose } from "redux";
import { connect } from "react-redux";

function AddUser({ onAddUser, dataAddUser }) {
  useInjectReducer({ key: "home", reducer });
  useInjectSaga({ key: "home", saga });

  return (
    <div className="home-page container-fluid">
      <div className="home-page__banner">
        <div className="banner-content">
          <div>
            <img src={logo} alt="" />
            <h1 className="title"> Welcome to Rising Stars</h1>
            <p className="content">
              Discover Simply Amazing Admin Dashboard With The Stunning Design
              System
            </p>
          </div>
        </div>
        <div className="d-flex flex-row-auto flex-center image-footer">
          <img src={homepage} alt="" className="h-200px h-lg-350px mb-10" />
        </div>
      </div>
      <div className="home-page__content">
        <div className="content">
          <div className="header">
            <h4>Add User</h4>
          </div>
          <div className="form-user">
            <FromUser
              onAddUser={onAddUser}
              isLoading={dataAddUser?.isFetching}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  dataAddUser: makeSelectDataAddUser(),
});

function mapDispatchToProps(dispatch) {
  return {
    onAddUser: (data) => dispatch(createUser(data)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(
  withConnect,
  memo
)(AddUser);
