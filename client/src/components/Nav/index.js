import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Auth";
import { CartContext } from "../../CartContex";
import "./assets/style.scss";

import app from "../../firebase";

function Nav({ sticky }) {
  const { currentUser } = useContext(AuthContext);
  const [cart, setCart] = useContext(CartContext);

  return (
    <nav className="navbar nav-wrapper">
      <div className="container">
        <div className="navbar-header ">
          <Link className="brand logo" to={"/"}>
            CodePro
          </Link>

          <ul className="right hide-on-med-and-down">
            {!currentUser ? (
              <Link
                className="nav-link right hide-on-med-and-down padding-left: 5px"
                to="/signup">
                Sign in
              </Link>
            ) : (
              <Link
                className="nav-link right hide-on-med-and-down padding-left: 5px"
                to=""
                onClick={() => app.auth().signOut()}>
                Sign out
              </Link>
            )}

            <li>
              <Link
                className="nav-link right hide-on-med-and-down padding-right: 5px"
                to="/cart">
                {" "}
                <i className="fas fa-shopping-bag padding-left: 5px"></i>My cart{" "}
                <span className="cart-size">( {cart.length} )</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
