import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getOrgs } from '../../actions/orgActions';

export class Org_Follow extends Component {
  componentDidMount() {
    this.props.getOrgs();
  }

  addOrgHandler(id) {
    console.log(id);
  }

  render() {
    const { orgs } = this.props.orgs;

    return (
      <div className="section section-password">
        <div className="row section">
          <div className="col s12">
            <h4 className="mb-3">Organizations to Follow</h4>
            {orgs.map(org => (
              <div className="row" key={org.Id}>
                <div className="col s8">{org.Name}</div>
                <div className="s4">
                  <button
                    onClick={this.addOrgHandler.bind(this, org.Id)}
                    className="btn-small waves-effect waves-light secondary-content"
                    type="submit"
                    name="action"
                  >
                    Follow
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="col s12 form-submit mt-3">
          <button
            className="btn waves-effect waves-light blue darken-3"
            type="submit"
            name="action"
          >
            Submit >
          </button>
        </div>
        <div className="col s12 buttons">
          <Link
            to="/setPassword"
            className="btn blue waves-effect waves-light btn-back"
          >
            Back
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
