import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getNeeds } from '../../actions/needsActions';
import NeedItem from './NeedItem';

export class OpenItems extends Component {
  componentDidMount() {
    this.props.getNeeds();
  }

  render() {
    const { needs } = this.props.needs;
    return (
      <div>
        <div className="section profile center-align">
          <div className="row mt-2 mb-1 valign-wrapper">
            <div className="col s12">
              <span className="page-title">Open Items</span>
            </div>
          </div>
        </div>
        <div className="container mt-2">
          <div className="row">
            <table>
              <thead>
                <tr>
                  <th>Need</th>
                  <th>Details</th>
                  <th className="center">More Info</th>
                </tr>
              </thead>
              <tbody>
                {needs.map(need => (
                  <NeedItem key={need.Id} needs={need} />
                ))}
              </tbody>
            </table>
          </div>
          <div className="row">
            <div className="col s12 buttons">
              <button
                className="btn waves-effect waves-light ichn-blue"
                type="submit"
                name="action"
                onClick={() => this.props.history.push('/myItems')}
              >
                See My Items
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
  { getNeeds }
)(OpenItems);
