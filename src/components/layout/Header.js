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
        <li>
          <a href="/Dashboard">My Dashboard</a>
        </li>
        <li>
          <a href="/openItems">Open Items</a>
        </li>
        <li>
          <a href="/myItems">My Items</a>
        </li>
        <li>
          <a href="/" onClick={this.onLogoutClick}>
            Logout
          </a>
        </li>
      </Aux>
    );

    const guestLinks = (
      <Aux>
        <li>
          <Link to="/">Register</Link>
        </li>
        <li>
          <Link to="/">Login</Link>
        </li>
      </Aux>
    );

    return (
      <div>
        <nav className="blue darken-1">
          <div className="nav-wrapper">
            <Link to="/" className="brand-logo">
              iCanHelpNetwork
            </Link>
            <Link to="/" data-target="mobile-demo" className="sidenav-trigger">
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
