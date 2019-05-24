import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { loginUser } from '../../actions/authActions';
import logo from '../../img/SVG/ich-horizontal.svg';

export class Landing extends Component {
  state = {
    Email: '',
    Password: '',
    passwordIsMasked: true
  };

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
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

  togglePasswordMask = () => {
    this.setState(prevState => ({
      passwordIsMasked: !prevState.passwordIsMasked
    }));
  };

  render() {
    return (
      <div className="section section-login">
        <div className="container">
          <div className="row ">
            <div className="col s10 offset-s1">
              <img src={logo} alt="logo" className="img-responsive" />
            </div>
          </div>
          <div className="row">
            <form onSubmit={this.onSubmit}>
              <div className="col s12 m6 input-field">
                <i className="material-icons prefix">account_circle</i>
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
                <i className="material-icons prefix">vpn_key</i>
                <input
                  name="Password"
                  type={this.state.passwordIsMasked ? 'Password' : 'text'}
                  placeholder="Password"
                  className="validate"
                  value={this.state.Password}
                  onChange={this.onChange}
                />
                <i
                  className="material-icons post"
                  onClick={this.togglePasswordMask}
                >
                  remove_red_eye
                </i>
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
                <button className="btn ichn-blue" type="submit" name="action">
                  Login
                </button>
              </div>
            </form>
          </div>
          <div className="row">
            <div className="col s12 buttons">
              <Link to="/register" className="btn ichn-grey">
                Sign Up
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="col s12 center-align">
              <Link to="/forgotPassword">Forgot Password?</Link>
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
