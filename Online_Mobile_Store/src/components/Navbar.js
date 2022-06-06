import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ButtonContainer } from "./Button";
export default class Navbar extends Component {
  render() {
    return (
      <Nav className="navbar navbar-expand-sm  navbar-dark px-sm-5">
        <Link to="/Login" className="nav-link">
          Logout
        </Link>

        <ul className="navbar-nav align-items-center">
            <Link to="/ProductList" className="nav-link">
            <li className="nav-item ml-5 fas fa-home mr-2"/>
              Home
            </Link>
        </ul>
        <Link to="/Payment" className="ml-auto">
          <ButtonContainer>Payment</ButtonContainer>
        </Link>
        <Link to="/cart" className="ml-auto">
          <ButtonContainer>
            <span className="mr-2">
              <i className="fas fa-cart-plus " />
            </span>
            my cart
          </ButtonContainer>
        </Link>
      </Nav>
    );
  }
}

const Nav = styled.nav`
  background: var(--lightGreen);
  .nav-link {
    color: var(--mainWhite) !important;
    font-size:1.3rem;
    text-transform:capitalize;
  }
  @media (max-width: 576px) {
    .navbar-nav {
      flex-direction: row !important;
`;