import React, { Component } from 'react';
import Aux from '../../utils/Hoc';
import { Link, withRouter } from 'react-router-dom';

export class NeedItem extends Component {
  render() {
    const { needs } = this.props;
    return (
      <Aux>
        <tr>
          <td>
            <Link to={`/openItems/${needs.Id}`}>
              <strong>{needs.NeedType}</strong>
            </Link>
          </td>
          <td>{needs.Details}</td>
          <td className="center">
            <button
              className="btn-floating btn-small waves-effect waves-light ichn-green"
              onClick={() => this.props.history.push(`/openItems/${needs.Id}`)}
            >
              <i className="material-icons">loupe</i>
            </button>
          </td>
        </tr>
      </Aux>
    );
  }
}

export default withRouter(NeedItem);
