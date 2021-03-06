import React, { useState } from 'react';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
  } from 'reactstrap';
  import {
    HashRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
function NavComponent() {

    const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <Navbar color="light" light expand="md">
    <NavbarBrand href="/PortfolioWebsite">Reactstrap</NavbarBrand>
    {/* <Collapse isOpen={isOpen} navbar> */}
    <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
      <Nav className="mr-auto" navbar>
        <NavItem>
        <Link to="/PortfolioWebsite">Home</Link>
        </NavItem>
        <NavItem>
         <Link to="/About/">About</Link>
        </NavItem>
        <NavItem>
        <Link to="/components/">Components</Link>           
         </NavItem>
      </Nav>
      <NavbarText>Simple Text</NavbarText>
    {/* </Collapse> */}
    </Collapse>

  </Navbar>
    
  );
}

export default NavComponent; 