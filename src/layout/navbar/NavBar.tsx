import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
} from "reactstrap";

interface Props {}

const NavBar = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav>
      <nav>
        <Navbar fixed="top" expand="md" dark className="navigation shadow">
          <NavbarBrand href="#home" className="logo-container">
            My videos{/* <img src="../../../logobrand.png" alt="Logo" /> */}
          </NavbarBrand>
          <NavbarToggler className="me-2" onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav navbar className="nav-links">
              <NavItem className="my-2 my-md-0 mx-2">
                <NavLink to="/" className="links">
                  Home
                </NavLink>
              </NavItem>
              <NavItem className="my-2 my-md-0 mx-2">
                <NavLink to="/newVideo" className="links">
                  Add Video
                </NavLink>
              </NavItem>

              <NavItem className="my-2 my-md-0 mx-2">
                <a
                  href="https://blog.carlamontano.tech"
                  target="_blank"
                  onClick={() => {
                    isOpen && toggle();
                  }}
                  rel="noreferrer"
                  className="links"
                >
                  Blog
                </a>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </nav>
    </nav>
  );
};

export default NavBar;
