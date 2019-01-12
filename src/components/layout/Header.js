import React from 'react';

function Header() {
  return (
    <div>
      <nav className="blue darken-1">
        <div className="nav-wrapper">
          <a href="/" className="brand-logo">
            iCanHelpNetwork
          </a>
          <a href="/" data-target="mobile-demo" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a>
          <ul className="right hide-on-med-and-down">
            <li>
              <a href="/">Register</a>
            </li>
            <li>
              <a href="/">Login</a>
            </li>
            <li>
              <a href="/">Admin</a>
            </li>
          </ul>
        </div>
      </nav>

      <ul className="sidenav" id="mobile-demo">
        <li>
          <a href="/">Register</a>
        </li>
        <li>
          <a href="/">Login</a>
        </li>
        <li>
          <a href="/">Admin</a>
        </li>
      </ul>
    </div>
  );
}

export default Header;
