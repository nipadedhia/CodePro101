import React from "react";
import LoginComponent from "../../components/Login";
import "./assets/style.scss";
// import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col s12 m8 l8 col-logo-signup">
            {/* <h3>
              <Link className="back-home-link" to={"/"}>
                <i class="fas fa-long-arrow-alt-left pr-2"></i>Home
              </Link>
            </h3> */}
          </div>
          <div className="col s12 m8 l8 col-logo-signup">
            <LoginComponent />
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
