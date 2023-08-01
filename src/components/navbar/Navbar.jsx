import Cookies from "js-cookie";
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
          to="/portfolios"
          className={"text" + (location === "/portfolios" ? "--active" : "")}
        >
          Portfolios
        </Link>
        {Cookies.get("token") ? (
          <>
            <Link
              to="/add-post"
              className={"text" + (location === "/add-post" ? "--active" : "")}
            >
              Add Post
            </Link>
            <Link
              to="/"
              className={"text" + (location === "/logout" ? "--active" : "")}
              onClick={() => Cookies.remove("token")}
            >
              Logout
            </Link>
          </>
        ) : (
          <>
            <Link
              to="/contact"
              className={"text" + (location === "/contact" ? "--active" : "")}
            >
              Contact
            </Link>
            <Link
              to="/login"
              className={"text" + (location === "/login" ? "--active" : "")}
            >
              Login
            </Link>
          </>
        )}
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
    max-width: 100vw;
    overflow-x: auto;

    & > a {
      padding: 16px 18px;
      display: inline-block;

      color: #fff;
      font-weight: bold;
      font-size: 17.2px;
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
