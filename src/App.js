import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  redirect,
  Navigate,
} from "react-router-dom";
import Views from "./Views";
import { authPrefix, appPrefix } from "./constants";
import LoginComponent from "./Views/auth-views/login";
import RegisterComponent from "./Views/auth-views/register";
import { connect } from "react-redux";

function App(props) {
  return (
    <Router>
      <Routes>
        <Route
          path="*"
          element={
            !props.loginStatus.status ? (
              <Navigate to={`${authPrefix}/login`} />
            ) : (
              <Navigate to={`${appPrefix}/`} />
            )
          }
        ></Route>
        <Route
          path={`${authPrefix}/register`}
          element={<RegisterComponent />}
        ></Route>
        <Route
          path={`${authPrefix}/login`}
          element={<LoginComponent />}
        ></Route>
        <Route
          path={`${appPrefix}/*`}
          element={
            props.loginStatus.status ? (
              <Views />
            ) : (
              <Navigate to={`${authPrefix}/login`} replace />
            )
          }
        />
      </Routes>
    </Router>
  );
}
const mapStateToProps = ({ auth }) => {
  const { loginStatus } = auth;
  return { loginStatus };
};
export default connect(mapStateToProps, {})(App);
