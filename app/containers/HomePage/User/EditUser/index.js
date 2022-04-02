import React, { memo, useEffect } from "react";
import FromUser from "../Form";
import logo from "assets/images/logo.png";
import homepage from "assets/images/homepage.png";
import { useParams } from "react-router";
import { compose } from "redux";
import { connect } from "react-redux";
import saga from "containers/HomePage/saga";
import reducer from "containers/HomePage/reducer";
import { useInjectSaga } from "utils/injectSaga";
import { useInjectReducer } from "utils/injectReducer";
import { getDetailUser, updateUser } from "../../actions";
import {
  makeSelectDataDetailUser,
  makeSelectDataEditUser,
} from "../../selectors";
import { createStructuredSelector } from "reselect";
import LoadingPage from "../../../../components/LoadingPage";

function EditUser({
  dataDetailUser,
  dataEditUser,
  onUpdateUser,
  onGetDetailUser,
}) {
  const { id } = useParams();

  useInjectReducer({ key: "home", reducer });
  useInjectSaga({ key: "home", saga });

  useEffect(() => {
    onGetDetailUser(id);
  }, []);

  return (
    <div className="home-page container-fluid">
      <div className="home-page__banner">
        <div className="banner-content">
          <div>
            <img src={logo} alt="" />
            <h1 className="title"> Welcome to Rising Stars</h1>
            <p className="content">
              Rising Stars - a home where young and enthusiastic engineers
              gather and work in Da Nang, Vietnam.
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
            <h4>Edit User</h4>
          </div>
          {!dataDetailUser?.isFetching ? (
            <div className="form-user">
              <FromUser
                isLoading={dataEditUser?.isFetching}
                dataUserDetail={dataDetailUser?.data}
                onUpdateUser={onUpdateUser}
              />
            </div>
          ) : (
            <LoadingPage />
          )}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  dataDetailUser: makeSelectDataDetailUser(),
  dataEditUser: makeSelectDataEditUser(),
});

function mapDispatchToProps(dispatch) {
  return {
    onUpdateUser: (id, data, callBack) =>
      dispatch(updateUser(id, data, callBack)),
    onGetDetailUser: (id) => dispatch(getDetailUser(id)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(
  withConnect,
  memo
)(EditUser);
