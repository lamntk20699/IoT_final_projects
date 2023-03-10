import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Switch, Route, Link, Redirect } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Dashboard from "./components/Dashboard";
import DefaultLayout from "./components/layout/DefaultLayout";
import Sensor from "./components/Device/DeviceList";
// import { authenticate } from './actions/authActions';

function App() {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(authenticate());
  // }, [dispatch]);

  return (
    <div className="main-container" style={{ width: "100%", height: "100%" }}>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <PrivateRoute
          exact
          path="/"
          component={() => <Redirect to="/dashboard" />}
        />
        <PrivateRoute
          exact
          path="/dashboard"
          component={() => (
            <DefaultLayout>
              <Dashboard />
            </DefaultLayout>
          )}
        />
        <PrivateRoute
          exact
          path="/device"
          component={() => (
            <DefaultLayout>
              <Sensor />
            </DefaultLayout>
          )}
        />

        {/* <PrivateRoute exact path="/" component={Dashboard} /> */}
        {/* <PrivateRoute exact path="/sensors" component={Sensors} /> */}
      </Switch>
    </div>
  );
}

export default App;
