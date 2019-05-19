import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { setFollowing } from '../../actions/authActions';
import { getNeeds, getMyNeeds } from '../../actions/needsActions';

export class Dashboard extends Component {
  componentDidMount() {
    this.props.setFollowing();
    this.props.getNeeds();
    this.props.getMyNeeds();
  }

  removeOrgHandler(id) {
    axios.post(
      `http://ichnserver.gear.host/User/unfollowOrganization?organizationId=${id}`
    );
  }

  render() {
    const { user, following } = this.props.auth;
    const { needs, myNeeds } = this.props.needs;

    return (
      <div>
        <div className="section profile center-align">
          <div className="row mt-2 mb-2 valign-wrapper">
            <div className="col s12">
              <span className="page-title">Profile</span>
              <i className="material-icons circle white-text large">
                account_circle
              </i>
              <span className="profile-name">{user.unique_name}</span>
              <span className="profile-email">{user.email}</span>
            </div>
          </div>
        </div>
        <div className="section section-profile container">
          <div className="row">
            <div className="row">
              <div className="col s6 center-align">
                <div className="circle-outline">
                  <span className="open-number">{needs.length}</span>
                  <span className="open-descrip">Open Items</span>
                </div>
              </div>
              <div className="col s6 center-align">
                <div className="circle-outline">
                  <span className="open-number">{myNeeds.length}</span>
                  <span className="open-descrip">My Items</span>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col s6 buttons">
                <Link to="/openItems" className="btn blue">
                  Claim Items
                </Link>
              </div>
              <div className="col s6 buttons">
                <Link to="/myItems" className="btn blue">
                  See My Items
                </Link>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col s12">
              <ul className="collection with-header">
                <li className="collection-header">
                  <h5>My Organizations</h5>
                </li>

                {following.map(org => (
                  <li className="collection-item" key={org.Id}>
                    <div>
                      {org.Name}
                      <a
                        href="#!"
                        className="secondary-content"
                        onClick={this.removeOrgHandler.bind(this, org.Id)}
                      >
                        <i className="material-icons">remove_circle</i>
                      </a>
                    </div>
                  </li>
                ))}
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
  auth: state.auth,
  needs: state.needs
});

export default connect(
  mapStateToProps,
  { setFollowing, getNeeds, getMyNeeds }
)(Dashboard);
