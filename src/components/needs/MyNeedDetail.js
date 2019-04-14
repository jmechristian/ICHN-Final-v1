import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getDetails, releaseNeed } from '../../actions/needsActions';

export class MyNeedDetail extends Component {
  componentDidMount() {
    this.props.getDetails(this.props.match.params.id);
  }

  onReleaseNeed = async (itemId, organizationId) => {
    await this.props.releaseNeed(itemId, organizationId);
    this.props.history.push('/userapp/myItems');
  };

  render() {
    const { item } = this.props.needs;
    return (
      <div className="section">
        <div className="row">
          <div className="col s12">
            <h4>Item Detail</h4>
            <ul className="collection with-header">
              <li className="collection-header">
                <h5>{item.NeedType}</h5>
              </li>
              <li className="collection-item">
                <span className="title">Details</span>
                <p>
                  <strong>{item.Details}</strong>
                </p>
              </li>
              <li className="collection-item">
                <span className="title">Quantity</span>
                <p>
                  <strong>{item.Quantity}</strong>
                </p>
              </li>
              <li className="collection-item">
                <span className="title">Instructions</span>
                <p>
                  <strong>{item.Instructions}</strong>
                </p>
              </li>
            </ul>
          </div>
          <div className="row">
            <div className="col s12 buttons">
              <button
                className="btn waves-effect waves-light blue darken-3"
                type="submit"
                name="action"
                onClick={this.onReleaseNeed.bind(
                  this,
                  item.Id,
                  item.OrganizationId
                )}
              >
                Release Item
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col s12 buttons">
              <button
                className="btn waves-effect waves-light blue darken-1"
                type="submit"
                name="action"
                onClick={() => this.props.history.push('/userapp/myItems')}
              >
                Back to My Items
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  needs: state.needs
});

export default connect(
  mapStateToProps,
  { getDetails, releaseNeed }
)(MyNeedDetail);
