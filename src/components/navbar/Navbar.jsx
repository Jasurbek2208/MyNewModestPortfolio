import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Navbar() {
  return (
    <StyledNavbar id="navbar">
      <div className="container">
        <Link to="/home">Home</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </StyledNavbar>
  );
}

const StyledNavbar = styled.nav`
  background-color: #333;
  animation: fadeIn ease 0.5s;

  a {
    padding: 14px 20px;
    display: inline-block;
    color: #fff;
    font-weight: bold;
    text-decoration: none;
    transition: all 0.3s ease-in-out;
    animation: fadeIn ease 0.5s;
  }

  & > .container {
    display: flex;
    justify-content: flex-end;
    animation: fadeIn ease 0.5s;
  }
`;
