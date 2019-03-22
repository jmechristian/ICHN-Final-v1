import React, { Component } from 'react';
import { connect } from 'react-redux';

export class NeedDetail extends Component {
  render() {
    return (
      <div>
        <h1>This is a Needs' Details page</h1>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  needs: state.needs
});

export default connect(mapStateToProps)(NeedDetail);
