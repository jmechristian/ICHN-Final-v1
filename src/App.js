import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authActions';
import PrivateRoute from './utils/PrivateRoute';
import { Provider } from 'react-redux';
import store from './store';

import './App.css';

import Org_Follow from './components/registration/Org_Follow';
import Set_Password from './components/registration/Set_Password';
import User_Info from './components/registration/User_Info';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Landing from './components/layout/Landing';
import Forgot_Password from './components/registration/Forgot_Password';
import Dashboard from './components/profile/Dashboard';
import OpenItems from './components/needs/OpenItems';
import NeedDetail from './components/needs/NeedDetail';
import MyItems from './components/needs/MyItems';
import MyNeedDetail from './components/needs/MyNeedDetail';

// Check for token
if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = '/userapp/';
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Header />
            <Route exact path="/userapp/" component={Landing} />
            <div className="container">
              <Route exact path="/userapp/register" component={User_Info} />
              <Route
                exact
                path="/userapp/setPassword"
                component={Set_Password}
              />
              <Route
                exact
                path="/userapp/forgotPassword"
                component={Forgot_Password}
              />
              <Switch>
                <PrivateRoute
                  exact
                  path="/userapp/dashboard"
                  component={Dashboard}
                />
              </Switch>
              <Switch>
                <PrivateRoute
                  exact
                  path="/userapp/orgFollow"
                  component={Org_Follow}
                />
              </Switch>
              <Switch>
                <PrivateRoute
                  exact
                  path="/userapp/openItems"
                  component={OpenItems}
                />
              </Switch>
              <Switch>
                <PrivateRoute
                  exact
                  path="/userapp/openItems/:id"
                  component={NeedDetail}
                />
              </Switch>
              <Switch>
                <PrivateRoute
                  exact
                  path="/userapp/myItems"
                  component={MyItems}
                />
              </Switch>
              <Switch>
                <PrivateRoute
                  exact
                  path="/userapp/myItems/:id"
                  component={MyNeedDetail}
                />
              </Switch>
            </div>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
