import React, { Component } from 'react';

export class User_Info extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    zipcode: ''
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    this.props.history.push('/setPassword');
  };

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
                name="firstName"
                type="text"
                placeholder="First Name"
                value={this.state.firstName}
                onChange={this.onChange}
              />
            </div>
            <div className="col s12 m6 input-field">
              <input
                name="lastName"
                type="text"
                placeholder="Last Name"
                value={this.state.lastName}
                onChange={this.onChange}
              />
            </div>
            <div className="col s12 m6 input-field">
              <input
                name="email"
                type="email"
                placeholder="Email"
                value={this.state.email}
                onChange={this.onChange}
              />
            </div>
            <div className="col s12 m6 input-field">
              <input
                name="zipcode"
                type="number"
                placeholder="Zipcode"
                value={this.state.zipcode}
                onChange={this.onChange}
              />
            </div>
            <div className="col s12 form-submit">
              <button
                className="btn waves-effect waves-light blue darken-3"
                type="submit"
                name="action"
              >
                Set Password >
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default User_Info;
