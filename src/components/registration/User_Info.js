import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { registerUser } from '../../actions/authActions';

export class User_Info extends Component {
  state = {
    FirstName: '',
    LastName: '',
    Email: '',
    Password: '',
    Password2: ''
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const newUser = {
      FirstName: this.state.FirstName,
      LastName: this.state.LastName,
      Email: this.state.Email,
      Password: this.state.Password,
      Password2: this.state.Password2
    };

    this.props.registerUser(newUser, this.props.history);
  };

  render() {
    return (
      <div>
        <div className="section profile center-align">
          <div className="row mt-2 mb-1 valign-wrapper">
            <div className="col s12">
              <span className="page-title">User Registration</span>
            </div>
          </div>
        </div>
        <div className="section section-register container">
          <div className="row">
            <form onSubmit={this.onSubmit}>
              <div className="col s12 m6 input-field">
                <input
                  name="FirstName"
                  type="text"
                  placeholder="First Name"
                  className="validate"
                  value={this.state.FirstName}
                  onChange={this.onChange}
                />
                <span
                  className="helper-text"
                  data-error="required"
                  data-success=" "
                />
              </div>

              <div className="col s12 m6 input-field">
                <input
                  name="LastName"
                  type="text"
                  placeholder="Last Name"
                  className="validate"
                  value={this.state.LastName}
                  onChange={this.onChange}
                />
                <span
                  className="helper-text"
                  data-error="required"
                  data-success=" "
                />
              </div>
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
                  data-error="please enter a valid email"
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
                  data-error="required"
                  data-success=" "
                />
              </div>
              <div className="col s12 m6 input-field">
                <input
                  name="Password2"
                  type="password"
                  placeholder="Confirm Your Password"
                  className="validate"
                  value={this.state.Password2}
                  onChange={this.onChange}
                />
                <span
                  className="helper-text"
                  data-error="required"
                  data-success=" "
                />
                <p>
                  {this.state.Password !== this.state.Password2
                    ? 'Passwords do not match'
                    : ''}
                </p>
              </div>
              <div className="col s12 form-submit">
                <button
                  className="btn ichn-blue"
                  type="submit"
                  name="action"
                  disabled={this.state.Password !== this.state.Password2}
                >
                  Register
                </button>
                <div className="row">
                  <div className="col s12">
                    <p>{this.props.error ? this.props.error.message : ''}</p>
                  </div>
                </div>
              </div>
            </form>
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
  { registerUser }
)(withRouter(User_Info));
