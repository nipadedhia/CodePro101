import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "./Auth";

// creating a private route to be accessed only when the firebase listener verifies that the user is logged in.
// ref: https://stackoverflow.com/questions/61778154/i-cant-access-a-private-route-using-firebase

const PrivateRoute = ({ component: RouteComponenent, ...rest }) => {
  const { currentUser } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={(routeProps) =>
        !!currentUser ? (
          <RouteComponenent {...routeProps} />
        ) : (
          <Redirect to={"/login"} />
        )
      }
    />
  );
};

export default PrivateRoute;
