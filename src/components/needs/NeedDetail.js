import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getDetails, claimNeed } from '../../actions/needsActions';

export class NeedDetail extends Component {
  componentDidMount() {
    this.props.getDetails(this.props.match.params.id);
  }

  onClaimNeed = async (itemId, organizationId) => {
    await this.props.claimNeed(itemId, organizationId);
    this.props.history.push('/myItems');
  };

  render() {
    const { item } = this.props.needs;
    return (
      <div>
        <div className="section profile center-align">
          <div className="row mt-2 mb-1 valign-wrapper">
            <div className="col s12">
              <span className="page-title">Item Detail</span>
            </div>
          </div>
        </div>
        <div className="section container">
          <div className="row">
            <div className="col s12">
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
              <div className="col s12 buttons mb-1">
                <button
                  className="btn waves-effect waves-light ichn-blue"
                  type="submit"
                  name="action"
                  onClick={this.onClaimNeed.bind(
                    this,
                    item.Id,
                    item.OrganizationId
                  )}
                >
                  Claim
                </button>
              </div>
              <div className="col s12 buttons">
                <button
                  className="btn waves-effect waves-light ichn-grey"
                  type="submit"
                  name="action"
                  onClick={() => this.props.history.push('/openItems')}
                >
                  Back to Items
                </button>
              </div>
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
  { getDetails, claimNeed }
)(NeedDetail);
