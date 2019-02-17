import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

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

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Header />
            <Route exact path="/" component={Landing} />
            <div className="container">
              <Route exact path="/register" component={User_Info} />
              <Route exact path="/setPassword" component={Set_Password} />
              <Route exact path="/orgFollow" component={Org_Follow} />
              <Route exact path="/forgotPassword" component={Forgot_Password} />
            </div>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
