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
        <NavLink href="/PortfolioWebsite">Home</NavLink>
        </NavItem>
        <NavItem>
         <NavLink href="/about/">About</NavLink>
        </NavItem>
        <NavItem>
        <NavLink href="/components/">Components</NavLink>           
         </NavItem>
      </Nav>
      <NavbarText>Simple Text</NavbarText>
    {/* </Collapse> */}
    </Collapse>

  </Navbar>
    
  );
}

export default NavComponent; 