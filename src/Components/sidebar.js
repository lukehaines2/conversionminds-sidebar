import React from 'react';
import cx from 'classnames';
import '../style/sidebar.scss';

const Sidebar = (props) => {

  return (
    <div className={cx('sidebar', { 'show': !props.collapsed })}>

      <div className="navbar sidebar-header">
        <span onClick={props.toggleNavbar}>&times;</span>
      </div>

    </div>
  );
}

export default Sidebar;
