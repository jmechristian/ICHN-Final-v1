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
        <h4>Open Items</h4>
        <div>
          {needs.map(need => (
            <NeedItem key={need.Id} needs={need} />
          ))}
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
