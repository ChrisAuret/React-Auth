import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Navbar extends Component {

renderLinks() {
  if(this.props.authenticated) {
    return <li className="nav-item">
              <Link to="/signout" className="nav-link">SignOut</Link>
            </li>
    } else {
        return [
            <li className="nav-item" key={1}>
                <Link to="/signin" className="nav-link"> Sign In </Link>
            </li>,
            <li className="nav-item"  key={2}>
                <Link to="/signup" className="nav-link"> Sign Up </Link>
            </li>
        ]
    }
  }

render() {
    return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <Link to="/" className="navbar-brand">Redux Auth</Link>
        </div>

        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav navbar-right">
              {this.renderLinks()}
          </ul>
        </div>
      </div>
    </nav>         
    );
  }
}

function mapStateToProps(state) {
return {
    authenticated: state.auth.authenticated
};
}

export default connect(mapStateToProps)(Navbar);