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

  render() {
    return (
      <div className="section section-register">
        <div className="row">
          <div className="col s12">
            <h4>User Information</h4>
          </div>
        </div>
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
              >
                Required
              </span>
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
              >
                Required
              </span>
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
              >
                Required
              </span>
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
              >
                Required
              </span>
            </div>
            <div className="col s12 m6 input-field">
              <input
                name="Password2"
                type="password"
                placeholder="Confirm Password"
                className="validate"
                value={this.state.Password2}
                onChange={this.onChange}
              />
              <span
                className="helper-text"
                data-error="required"
                data-success=" "
              >
                Required
              </span>
            </div>
            <div className="col s12 form-submit">
              <div className="row">
                <div className="col s12">
                  <p>{this.props.error ? this.props.error.message : ''}</p>
                </div>
              </div>

              <button
                className="btn waves-effect waves-light blue darken-3"
                type="submit"
                name="action"
              >
                Register
              </button>
            </div>
          </form>
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
