import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Navbar,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
class NavBar extends Component {
  render() {
    return (
      <Container className="mt-5">
        <Navbar color="light" light expand="sm">
          <h1 className="ml-auto title" href="/">
            Letters!
          </h1>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="#">Pen Pals</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/login">
                Log In
              </NavLink>
            </NavItem>
            {this.props.user !== undefined && (
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  {this.props.user.username}
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem href="#">Account</DropdownItem>
                  <DropdownItem href="#">Help</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem href="#">Log Out</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            )}
          </Nav>
        </Navbar>
      </Container>
    );
  }
}

export default NavBar;
