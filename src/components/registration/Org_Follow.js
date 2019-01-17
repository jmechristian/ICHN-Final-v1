import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Org_Follow extends Component {
  render() {
    return (
      <div className="section section-password">
        <div className="row">
          <div className="col s12">
            <h4>Choose Organizations To Follow</h4>
          </div>
        </div>
        <div className="row section">
          <div className="col s12">
            <div className="switch">
              <label>
                Many Helping Hands
                <input type="checkbox" />
                <span className="lever" />
              </label>
            </div>
          </div>
        </div>
        <div className="divider" />
        <div className="row section">
          <div className="col s12">
            <div className="switch">
              <label>
                Irving Bible Church
                <input type="checkbox" />
                <span className="lever" />
              </label>
            </div>
          </div>
        </div>
        <div className="divider" />
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
