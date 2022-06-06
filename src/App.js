import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { routeHome, routesAdmin } from "./router";

import BackToTop from "./components/BackToTop";

import HomeTemplate from "./container/HomeTemplate";
import AdminTemplate from "./container/AdminTemplate";

import PageNotFound from "./container/PageNotFound";
import { createAction } from "./container/HomeTemplate/ManagerUser/Login/modules/actionforLogin";
import { USER_LOGIN_SUCCESS } from "./container/HomeTemplate/ManagerUser/Login/modules/constant";

class App extends Component {
  render() {
    const showLayoutHome = (route) => {
      if (route && route.length > 0) {
        return route.map((item, index) => {
          return (
            <HomeTemplate
              key={index}
              exact={item.exact}
              path={item.path}
              Component={item.component}
            />
          );
        });
      }
    };
    const showLayoutAdmin = (route) => {
      if (route && route.length > 0) {
        return route.map((item, index) => {
          return (
            <AdminTemplate
              key={index}
              exact={item.exact}
              path={item.path}
              Component={item.component}
            />
          );
        });
      }
    };
    return (
      <BrowserRouter>
        <Switch>
          {showLayoutHome(routeHome)}
          {showLayoutAdmin(routesAdmin)}
          <Route path="" component={PageNotFound} />
        </Switch>
        <BackToTop />
      </BrowserRouter>
    );
  }
  _getLoginInLocal = () => {
    const user = localStorage.getItem("userKH");
    if (user) {
      this.props.dispatch(createAction(USER_LOGIN_SUCCESS, JSON.parse(user)));
    }
  };

  componentDidMount() {
    this._getLoginInLocal();
  }
}

export default connect()(App);
