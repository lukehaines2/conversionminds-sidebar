import React, { useState } from "react";
import { Badge, Button } from 'reactstrap';

// import NavButton from "./navButton";

const Header = (props) => {

  const [count, setCount] = useState(0);
  const increment = () => setCount(prevCount => prevCount + 1);
  const decrement = () => setCount(prevCount => prevCount > 0 ? prevCount - 1 : 0);

  console.log('L18 === count', count);

  return (
    <nav className="navbar navbar-dark bg-dark">
      <a className="navbar-brand" href="#">Hidden brand</a>
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
