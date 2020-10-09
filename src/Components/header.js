import React, { useState } from "react";
import { Badge, Button } from "reactstrap";
import { Link } from "react-router-dom";


const Header = (props) => {

  const [count, setCount] = useState(0);
  const increment = () => setCount(prevCount => prevCount + 1);
  const decrement = () => setCount(prevCount => prevCount > 0 ? prevCount - 1 : 0);

  return (
    <nav className="navbar navbar-dark bg-dark">
      <Link className="navbar-brand" to="/gridResponsive">Hidden brand</Link>
      <div>
        <Button color="primary" outline className="mr-3 gori" onClick={increment}>
          Notifications <Badge color="secondary">{count}</Badge>
        </Button>
        <Button color="danger" outline className="mr-3" onClick={decrement}>
          Take 1 away <Badge color="secondary">{count}</Badge>
        </Button>
        <button onClick={props.toggleNavbar} className="navbar-toggler" type="button" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
  )
}

export default Header;
