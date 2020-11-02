import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';
import cx from 'classnames';
import '../style/sidebar.scss';

import NavButton from "./navButton";

const Sidebar = (props) => {

  return (
    <div className={cx('sidebar', { 'show': !props.collapsed })}>

      <nav className="navbar sidebar-header">
        <span onClick={props.toggleNavbar}>&times;</span>
      </nav>

      <Nav vertical>
        <NavItem>
          <NavLink tag={RRNavLink} to="/gridResponsive">Grid cards</NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={RRNavLink} to="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavButton label="I'm Accessible" />
        </NavItem>
        <NavItem>
          <NavLink tag={RRNavLink} to="/">Page 3</NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={RRNavLink} to="/">Page 4</NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={RRNavLink} to="/">Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={RRNavLink} to="/">LINK</NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={RRNavLink} to="/">Link</NavLink>
        </NavItem>
      </Nav>

    </div>
  );
}

export default Sidebar;

// TODO: Fix triple CSS rendering
// https://github.com/BilalBouk/reactstrap-basic-sidebar
// React Socks
