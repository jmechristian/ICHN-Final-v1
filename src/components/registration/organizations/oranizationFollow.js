import React, { Component } from 'react';
import axios from 'axios';

export class oranizationFollow extends Component {
  state = {
    btnDisabled: false
  };

  addOrgHandler(id) {
    axios
      .post(
        `http://ichnserver.gear.host/User/FollowOrganization?organizationId=${id}`
      )
      .then(res => console.log(res))
      .catch(err => console.log(err));

    this.setState({ btnDisabled: true });
  }

  render() {
    const { org } = this.props;
    return (
      <div>
        <div className="row">
          <div className="col s8">{org.Name}</div>
          <div className="s4">
            <button
              onClick={this.addOrgHandler.bind(this, org.Id)}
              className="btn-small waves-effect waves-light secondary-content"
              type="submit"
              name="action"
              disabled={this.state.btnDisabled}
            >
              Follow
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default oranizationFollow;
