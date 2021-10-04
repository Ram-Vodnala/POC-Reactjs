import React from 'react';
import { Redirect, Route } from "react-router-dom";

function AuthRoute({ children }) {
    return (
      <Route
        render={({ location }) =>
          localStorage.getItem('email') ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )

        }
      />
    );
  }

export default AuthRoute;