import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

export default function Navbar() {
  const location = useLocation().pathname;
  const { isAuth } = useSelector((store) => store);
  const dispatch = useDispatch();

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
        {isAuth ? (
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
              onClick={() => dispatch({ type: "LOGOUT" })}
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
    will-change: margin-top, opacity;
    animation: fadeIn ease 0.5s;

    width: 100% !important;
    max-width: 100vw !important;
    overflow-x: scroll !important;

    & > a {
      padding: 16px 18px;
      display: inline-block;
      min-width: max-content;

      color: #fff;
      font-weight: bold;
      font-size: 17.2px;
      text-decoration: none;

      border-bottom: 4px solid #fff0;
      transition: all 0.3s ease-in-out;
      will-change: margin-top, opacity, background-color, border-bottom, font-weight;
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

    @media (max-width: 450px) {
      padding: 0px !important;
      justify-content: flex-start;

      & > a {
        padding: 18px 15px 15px 15px;

        &.text--active {
          font-weight: bolder;
          border-bottom: 3px solid #fff;
        }
      }

      /* scroll height */
      &::-webkit-scrollbar {
        height: 3px;
      }
      /* Handle */
      &::-webkit-scrollbar-thumb {
        background: #555;
      }
    }
  }
`;