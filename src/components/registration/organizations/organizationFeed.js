import React, { Component } from 'react';
import OrganizationFollow from './oranizationFollow';

export class organizationFeed extends Component {
  render() {
    const { orgs } = this.props;
    return orgs.map(org => <OrganizationFollow key={org.Id} org={org} />);
  }
}

export default organizationFeed;
