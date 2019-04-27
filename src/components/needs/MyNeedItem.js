import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Aux from '../../utils/Hoc';

export class MyNeedItem extends Component {
  render() {
    const { myNeed } = this.props;

    return (
      <Aux>
        <tr>
          <td>
            <strong>{myNeed.NeedType}</strong>
          </td>
          <td>{myNeed.Details}</td>
          <td className="center">
            <button
              className="btn-floating btn-small waves-effect waves-light blue darken-3"
              onClick={() => this.props.history.push(`/myItems/${myNeed.Id}`)}
            >
              <i className="material-icons">loupe</i>
            </button>
          </td>
        </tr>
      </Aux>
    );
  }
}

export default withRouter(MyNeedItem);
