import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';

import { loginUser } from '../../actions/authActions';

export class Landing extends Component {
  state = {
    Email: '',
    Password: '',
    isAuth: false,
    error: ''
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const user = {
      Email: this.state.Email,
      Password: this.state.Password
    };

    //this.props.loginUser(user);
    axios
      .post('https://ichnserver.gear.host/User/Login', user)
      .then(res => {
        console.log(res);
        this.props.history.push('/orgFollow');
      })
      .catch(err => this.setState({ error: err.response.data.Description }));
  };

  render() {
    return (
      <div className="section section-login">
        <div className="container">
          <div className="row">
            <form onSubmit={this.onSubmit}>
              <div className="col s12 m6 input-field">
                <input
                  name="Email"
                  type="email"
                  placeholder="Email"
                  className="validate"
                  value={this.state.Email}
                  onChange={this.onChange}
                />
                <span
                  className="helper-text"
                  data-error="Please Enter a Valid Email"
                  data-success=" "
                />
              </div>
              <div className="col s12 m6 input-field">
                <input
                  name="Password"
                  type="password"
                  placeholder="Password"
                  className="validate"
                  value={this.state.Password}
                  onChange={this.onChange}
                />
                <span
                  className="helper-text"
                  data-error="Please Enter Your Password"
                  data-success=" "
                />
              </div>
              <div className="row">
                <div className="col s12">
                  <p>{this.state.error}</p>
                </div>
              </div>

              <div className="col s12 form-submit">
                <button
                  className="btn waves-effect waves-light blue darken-3"
                  type="submit"
                  name="action"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div className="row">
            <div className="col s12 buttons">
              <Link to="/register" className="btn blue">
                Register
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="col s12 buttons">
              <Link to="/forgotPassword" className="btn blue">
                Forgot Password
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Landing);
