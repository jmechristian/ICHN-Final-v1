import React, { Component } from 'react';

export class orgItem extends Component {
  render() {
    return (
      <div className="row section">
        <div className="col s12">
          <div className="switch">
            <label>
              name
              <input type="checkbox" />
              <span className="lever" />
            </label>
          </div>
        </div>
      </div>
    );
  }
}

export default orgItem;
