import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getOrgs } from '../../actions/orgActions';
import { setFollowing } from '../../actions/authActions';
import OrganizationFeed from './organizations/organizationFeed';

export class Org_Follow extends Component {
  componentDidMount() {
    this.props.getOrgs();
    this.props.setFollowing();
  }

  render() {
    const { orgs } = this.props.orgs;

    return (
      <div>
        <div className="section profile center-align">
          <div className="row mt-2 mb-1 valign-wrapper">
            <div className="col s12">
              <span className="page-title">Organizations</span>
            </div>
          </div>
        </div>
        <div className="section section-password container">
          <div className="row section">
            <div className="col s12">
              <OrganizationFeed orgs={orgs} />
            </div>
          </div>

          <div className="col s12 buttons">
            <Link
              to="/Dashboard"
              className="btn ichn-blue waves-effect waves-light btn-back"
            >
              My Profile
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  orgs: state.organization
});

export default connect(
  mapStateToProps,
  { getOrgs, setFollowing }
)(Org_Follow);
