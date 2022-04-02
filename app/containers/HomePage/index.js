import React from "react";
import logo from "assets/images/logo.png";
import homepage from "assets/images/homepage.png";

function HomePage() {
  return (
    <div className="home-page">
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
        <div class="d-flex flex-row-auto flex-center image-footer">
          <img src={homepage} alt="" className="h-200px h-lg-350px mb-10" />
        </div>
      </div>
      <div className="home-page__content"> </div>
    </div>
  );
}

export default HomePage;
