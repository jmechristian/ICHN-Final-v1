import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { loginUser } from '../../actions/authActions';

export class Landing extends Component {
  state = {
    Email: '',
    Password: ''
  };

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/userapp/dashboard');
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push('/userapp/dashboard');
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const user = {
      Email: this.state.Email,
      Password: this.state.Password
    };

    this.props.loginUser(user);
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
                  <p>{this.props.error}</p>
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
              <Link to="/userapp/register" className="btn blue">
                Register
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="col s12 buttons">
              <Link to="/userapp/forgotPassword" className="btn blue">
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
  auth: state.auth,
  error: state.error
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Landing);
