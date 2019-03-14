import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getOrgs } from '../../actions/orgActions';
import OrganizationFeed from './organizations/organizationFeed';

export class Org_Follow extends Component {
  componentDidMount() {
    this.props.getOrgs();
  }

  render() {
    const { orgs } = this.props.orgs;

    return (
      <div className="section section-password">
        <div className="row section">
          <div className="col s12">
            <h4 className="mb-3">Organizations to Follow</h4>
            <OrganizationFeed orgs={orgs} />
          </div>
        </div>

        <div className="col s12 buttons">
          <Link
            to="/Dashboard"
            className="btn blue waves-effect waves-light btn-back"
          >
            My Profile
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  orgs: state.organization
});

export default connect(
  mapStateToProps,
  { getOrgs }
)(Org_Follow);
