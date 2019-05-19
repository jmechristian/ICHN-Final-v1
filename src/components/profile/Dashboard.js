import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import OrgList from './orgList';
import { getNeeds, getMyNeeds } from '../../actions/needsActions';

export class Dashboard extends Component {
  componentDidMount() {
    this.props.getNeeds();
    this.props.getMyNeeds();
  }

  render() {
    const { user } = this.props.auth;
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
                <Link to="/openItems" className="btn ichn-blue">
                  Claim Items
                </Link>
              </div>
              <div className="col s6 buttons">
                <Link to="/myItems" className="btn ichn-blue">
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
                <OrgList />
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col s12 buttons">
              <Link to="/orgFollow" className="btn ichn-blue">
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
  { getNeeds, getMyNeeds }
)(Dashboard);
