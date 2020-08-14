// import React, { useState } from "react";
// // import "./assets/style.scss";
// import { useEffect } from "react";
// import API from "../../Utils/API";
// import Axios from "axios";
import React from "react";

function OrderCard(props) {
  return (
    <div className="p-4 card ml-auto order-card" style={{ width: "20rem" }}>
      <div className="col s12 m12  m20 ">
        <div className="card small blue-grey lighten-4">
          <div className=" container">
            <div className="course-card">
              <h6 className="card-title section">Price Details</h6>
              <p className="card-text section">Course Total: ${props.total} </p>
              <div className="border"></div>

              <div>
                <button
                  className="waves-effect waves-light btn-large"
                  onClick={props.checkout}>
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderCard;
