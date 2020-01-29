import React from 'react';
import cx from 'classnames';
import '../style/sidebar.scss';

const Sidebar = (props) => {

  return (
    <div className={cx('sidebar', { 'show': !props.collapsed })}>

      <nav className="navbar sidebar-header">
        <span onClick={props.toggleNavbar}>&times;</span>
      </nav>

    </div>
  );
}

export default Sidebar;

// TODO: Fix triple CSS rendering
// https://github.com/BilalBouk/reactstrap-basic-sidebar

// React Socks
