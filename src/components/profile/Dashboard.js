import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setFollowing } from '../../actions/authActions';

export class Dashboard extends Component {
  componentDidMount() {
    this.props.setFollowing();
  }

  render() {
    const { user, following } = this.props.auth;
    return (
      <div className="section section-profile">
        <div className="row">
          <div className="col s12">
            <h4>Welcome, {user.unique_name}</h4>
          </div>
        </div>
        <div className="row">
          <div className="col s12">
            <ul className="collection with-header">
              <li className="collection-header">
                <h5>My Profile</h5>
              </li>
              <li className="collection-item avatar">
                <i className="material-icons circle green white-text">
                  account_circle
                </i>
                <span className="title">Name</span>
                <p>
                  <strong>{user.unique_name}</strong>
                </p>
              </li>
              <li className="collection-item avatar">
                <i className="material-icons circle blue white-text">email</i>
                <span className="title">Email</span>
                <p>
                  <strong>{user.email}</strong>
                </p>
              </li>
              <li className="collection-item avatar">
                <i className="material-icons circle red white-text">favorite</i>
                <span className="title">Organizations I Follow:</span>
                <p>
                  {following.map(org => (
                    <strong>{org.Name}</strong>
                  ))}
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col s12 buttons">
            <Link to="/orgFollow" className="btn blue">
              Find Organizations To Follow
            </Link>
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
  { setFollowing }
)(Dashboard);
