import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Org_Follow extends Component {
  state = {
    orgs: [
      {
        Id: 1,
        Name: 'Public',
        Code: 'PUB',
        IsActive: true
      },
      {
        Id: 2,
        Name: 'System',
        Code: 'SYS',
        IsActive: true
      },
      {
        Id: 3,
        Name: 'Many Helping Hands',
        Code: 'MHH',
        IsActive: true
      },
      {
        Id: 4,
        Name: 'Irving Bible Church',
        Code: 'IBC',
        IsActive: true
      },
      {
        Id: 99999,
        Name: 'Permanent Test Organization',
        Code: 'TEST',
        IsActive: true
      }
    ]
  };

  // componentDidMount() {
  //   this.getOrgs();
  // }

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
        {this.state.orgs.map(org => (
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

export default Org_Follow;
