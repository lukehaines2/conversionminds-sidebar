import React from "react";
import cx from "classnames";

import "../style/buttons.scss";

// This component is made because of warnings coming for empty href's, and to generally play with ACCESSIBILITY

const NavButton = (props) => {
  return (
    <button type="button" className={cx("link-button", props.className)}>
      {props.label}
    </button>
  )
}

export default NavButton;
