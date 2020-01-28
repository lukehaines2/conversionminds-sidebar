import React from "react";

const Header = (props) => (
  <nav className="navbar navbar-dark bg-dark">
    <a className="navbar-brand" href="#">Hidden brand</a>
    <button onClick={props.toggleNavbar} className="navbar-toggler" type="button" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  </nav>
)

export default Header;
