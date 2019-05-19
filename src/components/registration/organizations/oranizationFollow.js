import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

export class oranizationFollow extends Component {
  state = {
    btnDisabled: false
  };

  addOrgHandler(id) {
    axios.post(
      `http://ichnserver.gear.host/User/FollowOrganization?organizationId=${id}`
    );

    this.setState({ btnDisabled: true });
  }

  render() {
    const { org } = this.props;
    const { following } = this.props.auth;

    var newArray = following.map(org => org.Id);

    let buttonDisabled = newArray.lastIndexOf(org.Id);

    return (
      <div>
        <div className="row">
          <div className="col s8">{org.Name}</div>
          <div className="s4">
            <button
              onClick={this.addOrgHandler.bind(this, org.Id)}
              className="btn-small ichn-green waves-effect waves-light secondary-content"
              type="submit"
              name="action"
              disabled={
                buttonDisabled > -1 ? true : false || this.state.btnDisabled
              }
            >
              Follow
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(oranizationFollow);
