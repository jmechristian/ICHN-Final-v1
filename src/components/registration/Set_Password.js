import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Set_Password extends Component {
  state = {
    password: '',
    password2: ''
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    this.props.history.push('/userapp/orgFollow');
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

  render() {
    return (
      <div className="section section-password">
        <div className="row">
          <div className="col s12">
            <h4>Set Password</h4>
          </div>
        </div>
        <div className="row">
          <form onSubmit={this.onSubmit}>
            <div className="col s12 m6 input-field">
              <input
                name="password"
                type="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.onChange}
              />
            </div>
            <div className="col s12 m6 input-field">
              <input
                name="password2"
                type="password"
                placeholder="Confirm Password"
                value={this.state.password2}
                onChange={this.onChange}
              />
            </div>
            <div className="col s12 form-submit">
              <button
                className="btn waves-effect waves-light blue darken-3"
                type="submit"
                name="action"
              >
                Set Organizations >
              </button>
            </div>
          </form>
          <div className="col s12 buttons ">
            <Link
              to="/userapp/register"
              className="btn blue waves-effect waves-light btn-back"
            >
              Back
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Set_Password;
