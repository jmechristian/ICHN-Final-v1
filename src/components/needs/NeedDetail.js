import React, { Component } from 'react';
import { connect } from 'react-redux';

export class NeedDetail extends Component {
  render() {
    return (
      <div className="section">
        <div className="row">
          <div className="col s12">
            <h4>Item Detail</h4>
            <ul className="collection with-header">
              <li className="collection-header">
                <h5>Item Name</h5>
              </li>
              <li className="collection-item">
                <span className="title">Detail</span>
                <p>
                  <strong>Detail</strong>
                </p>
              </li>
              <li className="collection-item">
                <span className="title">Quantity</span>
                <p>
                  <strong>Quantity</strong>
                </p>
              </li>
              <li className="collection-item">
                <span className="title">Instructions</span>
                <p>
                  <strong>Instructions</strong>
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
              >
                Claim
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col s12 buttons">
              <button
                className="btn waves-effect waves-light blue darken-1"
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
    );
  }
}

const mapStateToProps = state => ({
  item: state.needs
});

export default connect(mapStateToProps)(NeedDetail);
