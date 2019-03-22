import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Aux from '../../utils/Hoc';

export class NeedItem extends Component {
  render() {
    const { needs } = this.props;
    return (
      <Aux>
        <tr>
          <td>
            <Link to={`/openItems/${needs.Id}`} needs={needs}>
              <strong>{needs.NeedType}</strong>
            </Link>
          </td>
          <td>{needs.Details}</td>
          <td>
            <button className="btn-floating btn-small waves-effect waves-light blue darken-3">
              <i className="material-icons">add</i>
            </button>
          </td>
        </tr>
      </Aux>
    );
  }
}

export default NeedItem;
