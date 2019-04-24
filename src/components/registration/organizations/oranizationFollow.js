import React, { Component } from 'react';
import { connect } from 'react-redux';
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
    const { following } = this.props.auth;

    var newArray = following.map(org => org.Id);
    console.log(newArray);

    let buttonDisabled = newArray.lastIndexOf(org.Id);
    console.log(buttonDisabled);

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
              disabled={buttonDisabled > -1 ? true : false}
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
