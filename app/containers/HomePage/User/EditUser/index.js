import React from "react";
import FromUser from "../Form";
import logo from "assets/images/logo.png";
import homepage from "assets/images/homepage.png";
import { useHistory } from "react-router";

function EditUser() {
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
            <h4>Edit User</h4>
          </div>
          <div className="form-user">
            <FromUser />
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditUser;
