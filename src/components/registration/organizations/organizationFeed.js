import React, { Component } from 'react';
import OrganizationFollow from './oranizationFollow';
// import { connect } from 'react-redux';

export class organizationFeed extends Component {
  // componentDidMount() {
  //   this.props.setFollowing();
  // }

  render() {
    const { orgs } = this.props;

    return orgs.map(org => <OrganizationFollow key={org.Id} org={org} />);
  }
}

export default organizationFeed;
