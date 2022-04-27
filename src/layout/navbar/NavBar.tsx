import React from "react";
import { Link } from "react-router-dom";

interface Props {}

const NavBar = (props: Props) => {
  return (
    <nav>
      <Link to="/">Home</Link>
      {" | "}
      <Link to="/newVideo">New Video</Link>
    </nav>
  );
};

export default NavBar;
