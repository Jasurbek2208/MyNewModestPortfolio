import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

export default function Navbar() {
  const location = useLocation().pathname;

  return (
    <StyledNavbar id="navbar">
      <div className="container">
        <Link
          to="/home"
          className={"text" + (location === "/home" ? "--active" : "")}
        >
          Home
        </Link>
        <Link
          to="/portfolio"
          className={"text" + (location === "/portfolio" ? "--active" : "")}
        >
          Portfolio
        </Link>
        <Link
          to="/contact"
          className={"text" + (location === "/contact" ? "--active" : "")}
        >
          Contact
        </Link>
      </div>
    </StyledNavbar>
  );
}

const StyledNavbar = styled.nav`
  background-color: #333;
  animation: fadeIn ease 0.5s;

  & > .container {
    display: flex;
    justify-content: flex-end;
    animation: fadeIn ease 0.5s;

    & > a {
      padding: 14px 20px;
      display: inline-block;
      color: #fff;
      font-weight: bold;
      text-decoration: none;
      border-bottom: 4px solid #fff0;
      transition: all 0.3s ease-in-out;
      animation: fadeIn ease 0.5s;

      &.text--active {
        font-weight: bolder;
        border-bottom: 4px solid #fff;
      }

      &:focus {
        outline: none;
        background-color: #444;
      }
    }
  }
`;
