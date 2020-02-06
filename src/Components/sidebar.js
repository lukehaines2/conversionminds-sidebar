import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import cx from 'classnames';
import '../style/sidebar.scss';

const Sidebar = (props) => {

  return (
    <div className={cx('sidebar', { 'show': !props.collapsed })}>

      <nav className="navbar sidebar-header">
        <span onClick={props.toggleNavbar}>&times;</span>
      </nav>

      <Nav vertical>
        <NavItem>
          <NavLink href="#">Page 1</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">View 1</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Page 2</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Page 3</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Page 4</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">LINK</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Link</NavLink>
        </NavItem>
      </Nav>

    </div>
  );
}

export default Sidebar;

// TODO: Fix triple CSS rendering
// https://github.com/BilalBouk/reactstrap-basic-sidebar

// React Socks
