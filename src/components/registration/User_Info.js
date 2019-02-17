import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
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

    //this.props.registerUser(newUser);
    axios
      .post('https://ichnserver.gear.host/User/Register', newUser)
      .then(res => {
        console.log(res.data);
        this.props.history.push('/');
      })
      .catch(err => console.log(err));
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
                name="FirstName"
                type="text"
                placeholder="First Name"
                value={this.state.FirstName}
                onChange={this.onChange}
              />
            </div>
            <div className="col s12 m6 input-field">
              <input
                name="LastName"
                type="text"
                placeholder="Last Name"
                value={this.state.LastName}
                onChange={this.onChange}
              />
            </div>
            <div className="col s12 m6 input-field">
              <input
                name="Email"
                type="email"
                placeholder="Email"
                value={this.state.Email}
                onChange={this.onChange}
              />
            </div>
            <div className="col s12 m6 input-field">
              <input
                name="Password"
                type="password"
                placeholder="Password"
                value={this.state.Password}
                onChange={this.onChange}
              />
            </div>
            <div className="col s12 m6 input-field">
              <input
                name="Password2"
                type="password"
                placeholder="Confirm Password"
                value={this.state.Password2}
                onChange={this.onChange}
              />
            </div>
            <div className="col s12 form-submit">
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
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { registerUser }
)(User_Info);
