import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Forgot_Password extends Component {
  state = {
    newPassword: ''
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <div className="section section-password">
        <div className="row">
          <div className="col s12">
            <h4>Request Password</h4>
          </div>
        </div>
        <div className="row">
          <form onSubmit={this.onSubmit}>
            <div className="col s12 m6 input-field">
              <input
                name="newPassword"
                type="email"
                placeholder="Please Enter the Email You Signed Up With"
                value={this.state.newPassword}
                onChange={this.onChange}
              />
            </div>
          </form>
          <div className="col s12 buttons ">
            <Link to="/" className="btn blue waves-effect waves-light btn-back">
              Submit Request
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Forgot_Password;
