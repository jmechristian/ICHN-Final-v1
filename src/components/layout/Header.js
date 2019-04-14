import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';
import Aux from '../../utils/Hoc';

class Header extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { isAuthenticated } = this.props.auth;

    const authLinks = (
      <Aux>
        <li className="sidenav-close">
          <Link to="/userapp/Dashboard">My Dashboard</Link>
        </li>
        <li className="sidenav-close">
          <Link to="/userapp/openItems">Open Items</Link>
        </li>
        <li className="sidenav-close">
          <Link to="/userapp/myItems">My Items</Link>
        </li>
        <li className="sidenav-close">
          <Link to="/userapp" onClick={this.onLogoutClick}>
            Logout
          </Link>
        </li>
      </Aux>
    );

    const guestLinks = (
      <Aux>
        <li className="sidenav-close">
          <Link to="/userapp">Register</Link>
        </li>
        <li className="sidenav-close">
          <Link to="/userapp">Login</Link>
        </li>
      </Aux>
    );

    return (
      <div>
        <nav className="blue darken-1">
          <div className="nav-wrapper">
            <Link to="/userapp/" className="brand-logo">
              iCanHelpNetwork
            </Link>
            <Link
              to="/userapp/"
              data-target="mobile-demo"
              className="sidenav-trigger"
            >
              <i className="material-icons">menu</i>
            </Link>
            <ul className="right hide-on-med-and-down">
              {isAuthenticated ? authLinks : guestLinks}
            </ul>
          </div>
        </nav>

        <ul className="sidenav" id="mobile-demo">
          {isAuthenticated ? authLinks : guestLinks}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Header);
