import React from "react";
import SignupComponent from "../../components/Signup";
import Nav from "../../components/Nav";
import "./assets/style.scss";
// import { Link } from "react-router-dom";

function Signup() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col s12 m12 l8 col-logo-signup">
            <SignupComponent />
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
