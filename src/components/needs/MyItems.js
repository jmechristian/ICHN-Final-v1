import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMyNeeds } from '../../actions/needsActions';
import MyNeedItem from './MyNeedItem';

export class MyItems extends Component {
  componentDidMount() {
    this.props.getMyNeeds();
  }

  render() {
    const { myNeeds } = this.props.needs;
    return (
      <div>
        <h4>My Items</h4>
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
              {myNeeds.map(myNeed => (
                <MyNeedItem key={myNeed.Id} myNeed={myNeed} />
              ))}
            </tbody>
          </table>
        </div>
        <div className="row mt-3">
          <div className="col s12 buttons">
            <button
              className="btn waves-effect waves-light blue darken-1"
              type="submit"
              name="action"
              onClick={() => this.props.history.push('/userapp/openItems')}
            >
              Back to Open Items
            </button>
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
  { getMyNeeds }
)(MyItems);
