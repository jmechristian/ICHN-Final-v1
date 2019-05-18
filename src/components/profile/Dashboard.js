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
      <div>
        <div className="section profile center-align">
          <div className="row mt-2 mb-2 valign-wrapper">
            <div className="col s12">
              <i className="material-icons circle white-text medium">
                account_circle
              </i>
              <span className="profile-name">{user.unique_name}</span>
              <span className="profile-email">{user.email}</span>
            </div>
          </div>
        </div>
        <div className="section section-profile container">
          <div className="row">
            <div className="col s12">
              <ul className="collection with-header">
                <li className="collection-item avatar">
                  <i className="material-icons circle red white-text">
                    favorite
                  </i>
                  <span className="title">Organizations I Follow:</span>
                  {following.map(org => (
                    <p key={org.Id}>
                      <Link to="/openItems">
                        <strong>{org.Name}</strong>
                      </Link>
                    </p>
                  ))}
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
