// import React, { useState } from "react";
// // import "./assets/style.scss";
// import { useEffect } from "react";
// import API from "../../Utils/API";
// import Axios from "axios";

import React from "react";

function OrderCard(props) {
  return (
    <div className="p-4 card ml-auto" style={{ width: "20rem" }}>
      <div class="">
        <div className="col s12 m12">
          <div className="card medium blue-grey lighten-4">
            <div className=" container">
              <div className="course-card">
                <h1 className="card-title section">Price Details</h1>
                <p className="card-text section">
                  Course Total: ${props.total}{" "}
                </p>
                <p className="card-text section">
                  Material Cost: ${props.material}
                </p>
                <p class="card-text section">
                  Order Total: ${props.totalPlusMaterial}
                </p>

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
    </div>
  );
}

export default OrderCard;
