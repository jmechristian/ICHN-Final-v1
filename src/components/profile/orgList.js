import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setFollowing, unFollow } from '../../actions/authActions';

export class orgList extends Component {
  componentDidMount() {
    this.props.setFollowing();
  }

  removeOrgHandler = id => {
    this.props.unFollow(id);
  };

  render() {
    const { following } = this.props.auth;
    return (
      <div>
        {following.map(org => (
          <li className="collection-item" key={org.Id}>
            <div>
              {org.Name}
              <span
                className="secondary-content"
                onClick={this.removeOrgHandler.bind(this, org.Id)}
              >
                <i className="material-icons">remove_circle</i>
              </span>
            </div>
          </li>
        ))}
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
  { setFollowing, unFollow }
)(orgList);
