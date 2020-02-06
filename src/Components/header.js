import React, { useState } from "react";
import { Badge, Button } from 'reactstrap';


const Header = (props) => {

  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <nav className="navbar navbar-dark bg-dark">
      <a className="navbar-brand" href="#">Hidden brand</a>
      <div>
        <Button color="primary" outline className="mr-3" onClick={increment}>
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
