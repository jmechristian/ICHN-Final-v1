import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getOrgs } from '../../actions/orgActions';

export class Org_Follow extends Component {
  // state = {
  //   orgs: []
  // };

  componentDidMount() {
    this.props.getOrgs();
  }

  // getOrgs = async () => {
  //   const response = await fetch(
  //     'https://ichnserver.gear.host/Organization/GetOrganizationView'
  //   );
  //   const json = await response.json();
  //   this.setState({ orgs: json });
  //   console.log(json);
  // };

  render() {
    return (
      <div className="section section-password">
        {this.props.orgs.orgs.map(org => (
          <div className="row section" key={org.Id}>
            <div className="col s12">
              <div className="switch">
                <label>
                  {org.Name}
                  <input type="checkbox" />
                  <span className="lever" />
                </label>
              </div>
            </div>
          </div>
        ))}
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
