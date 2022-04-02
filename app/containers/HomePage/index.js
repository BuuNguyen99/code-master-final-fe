import React from "react";
import logo from "assets/images/logo.png";
import homepage from "assets/images/homepage.png";
import { useHistory } from "react-router";

function HomePage() {
  const history = useHistory();
  const redirectPageAddUser = () => {
    history.push("/add-user");
  };
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
            <h4>Management Users</h4>
            <button
              className="btn btn-primary button-new-user"
              type="button"
              onClick={redirectPageAddUser}
            >
              New User
            </button>
          </div>
          <div className="user-list row">
            <div className="item-user col-3">
              <ul className="item-user__content">
                <li className="item-user-item">
                  <span className="title-user">Email:</span>
                  <span className="value-user">ngna@gmail,.com</span>
                  <span
                    className="icon-edit"
                    onClick={() => history.push("/edit-user/3")}
                  >
                    <svg
                      width="25"
                      height="23"
                      viewBox="0 0 25 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.64101 3.91797H3.07593C2.57846 3.91797 2.10135 4.12557 1.74959 4.49511C1.39782 4.86465 1.2002 5.36586 1.2002 5.88847V19.682C1.2002 20.2046 1.39782 20.7058 1.74959 21.0753C2.10135 21.4448 2.57846 21.6524 3.07593 21.6524H16.2061C16.7036 21.6524 17.1807 21.4448 17.5324 21.0753C17.8842 20.7058 18.0818 20.2046 18.0818 19.682V12.7852"
                        stroke="#676767"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M16.5477 2.11757C16.9269 1.72215 17.4414 1.5 17.9777 1.5C18.5141 1.5 19.0285 1.72215 19.4078 2.11757C19.7871 2.513 20.0002 3.04931 20.0002 3.60853C20.0002 4.16775 19.7871 4.70406 19.4078 5.09948L10.3507 14.5422L6.53711 15.5362L7.4905 11.5603L16.5477 2.11757Z"
                        stroke="#76A33E"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                </li>
                <li>
                  <span className="title-user">Fullname:</span>
                  <span className="value-user">ngna@gmail,.com</span>
                </li>
                <li>
                  <span className="title-user">Onboard Date:</span>
                  <span className="value-user">22/02/2022</span>
                </li>
                <li>
                  <span className="title-user">Official Date:</span>
                  <span className="value-user">22/02/2022</span>
                </li>
              </ul>
            </div>
            <div className="item-user col-3">
              <ul className="item-user__content">
                <li>
                  <span className="title-user">Email:</span>
                  <span className="value-user">ngna@gmail,.com</span>
                </li>
                <li>
                  <span className="title-user">Fullname:</span>
                  <span className="value-user">ngna@gmail,.com</span>
                </li>
                <li>
                  <span className="title-user">Onboard Date:</span>
                  <span className="value-user">22/02/2022</span>
                </li>
                <li>
                  <span className="title-user">Official Date:</span>
                  <span className="value-user">22/02/2022</span>
                </li>
              </ul>
            </div>
            <div className="item-user col-3">
              <ul className="item-user__content">
                <li>
                  <span className="title-user">Email:</span>
                  <span className="value-user">ngna@gmail,.com</span>
                </li>
                <li>
                  <span className="title-user">Fullname:</span>
                  <span className="value-user">ngna@gmail,.com</span>
                </li>
                <li>
                  <span className="title-user">Onboard Date:</span>
                  <span className="value-user">22/02/2022</span>
                </li>
                <li>
                  <span className="title-user">Official Date:</span>
                  <span className="value-user">22/02/2022</span>
                </li>
              </ul>
            </div>
            <div className="item-user col-3">
              <ul className="item-user__content">
                <li>
                  <span className="title-user">Email:</span>
                  <span className="value-user">ngna@gmail,.com</span>
                </li>
                <li>
                  <span className="title-user">Fullname:</span>
                  <span className="value-user">ngna@gmail,.com</span>
                </li>
                <li>
                  <span className="title-user">Onboard Date:</span>
                  <span className="value-user">22/02/2022</span>
                </li>
                <li>
                  <span className="title-user">Official Date:</span>
                  <span className="value-user">22/02/2022</span>
                </li>
              </ul>
            </div>
            <div className="item-user col-3">
              <ul className="item-user__content">
                <li>
                  <span className="title-user">Email:</span>
                  <span className="value-user">ngna@gmail,.com</span>
                </li>
                <li>
                  <span className="title-user">Fullname:</span>
                  <span className="value-user">ngna@gmail,.com</span>
                </li>
                <li>
                  <span className="title-user">Onboard Date:</span>
                  <span className="value-user">22/02/2022</span>
                </li>
                <li>
                  <span className="title-user">Official Date:</span>
                  <span className="value-user">22/02/2022</span>
                </li>
              </ul>
            </div>
            <div className="item-user col-3">
              <ul className="item-user__content">
                <li>
                  <span className="title-user">Email:</span>
                  <span className="value-user">ngna@gmail,.com</span>
                </li>
                <li>
                  <span className="title-user">Fullname:</span>
                  <span className="value-user">ngna@gmail,.com</span>
                </li>
                <li>
                  <span className="title-user">Onboard Date:</span>
                  <span className="value-user">22/02/2022</span>
                </li>
                <li>
                  <span className="title-user">Official Date:</span>
                  <span className="value-user">22/02/2022</span>
                </li>
              </ul>
            </div>
            <div className="item-user col-3">
              <ul className="item-user__content">
                <li>
                  <span className="title-user">Email:</span>
                  <span className="value-user">ngna@gmail,.com</span>
                </li>
                <li>
                  <span className="title-user">Fullname:</span>
                  <span className="value-user">ngna@gmail,.com</span>
                </li>
                <li>
                  <span className="title-user">Onboard Date:</span>
                  <span className="value-user">22/02/2022</span>
                </li>
                <li>
                  <span className="title-user">Official Date:</span>
                  <span className="value-user">22/02/2022</span>
                </li>
              </ul>
            </div>
            <div className="item-user col-3">
              <ul className="item-user__content">
                <li>
                  <span className="title-user">Email:</span>
                  <span className="value-user">ngna@gmail,.com</span>
                </li>
                <li>
                  <span className="title-user">Fullname:</span>
                  <span className="value-user">ngna@gmail,.com</span>
                </li>
                <li>
                  <span className="title-user">Onboard Date:</span>
                  <span className="value-user">22/02/2022</span>
                </li>
                <li>
                  <span className="title-user">Official Date:</span>
                  <span className="value-user">22/02/2022</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
