import React, { Component } from 'react';

export class NeedItem extends Component {
  render() {
    const { needs } = this.props;
    return (
      <div className="row">
        <div className="col s8">{needs.NeedType}</div>
        <div className="s4">
          <button
            className="btn-small waves-effect waves-light secondary-content"
            type="submit"
            name="action"
          >
            Details
          </button>
        </div>
      </div>
    );
  }
}

export default NeedItem;
