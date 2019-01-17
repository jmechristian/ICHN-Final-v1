import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Landing extends Component {
  state = {
    email: '',
    password: ''
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const user = {
      email: this.state.email,
      password: this.state.password
    };

    console.log(user);
  };

  render() {
    return (
      <div className="section section-login">
        <div className="container">
          <div className="row">
            <form onSubmit={this.onSubmit}>
              <div className="col s12 m6 input-field">
                <input
                  name="email"
                  type="text"
                  placeholder="Email"
                  value={this.state.email}
                  onChange={this.onChange}
                />
              </div>
              <div className="col s12 m6 input-field">
                <input
                  name="password"
                  type="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.onChange}
                />
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
              <Link to="/forgot" className="btn blue">
                Forgot Password
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
