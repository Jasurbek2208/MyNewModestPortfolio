import React from "react";
import styled from "styled-components";

export default function Home() {
  return (
    <StyledMain id="header">
      <div class="container">
        <h1>Jasurbek Shomaqsudov</h1>
        <h2>Front-end Developer</h2>
        <div class="social-media">
          <a href="#">
            <i class="fa fa-facebook"></i>
          </a>
          <a href="#">
            <i class="fa fa-twitter"></i>
          </a>
          <a href="#">
            <i class="fa fa-instagram"></i>
          </a>
          <a href="#">
            <i class="fa fa-linkedin"></i>
          </a>
        </div>
      </div>
    </StyledMain>
  );
}

const StyledMain = styled.header`
  background-image: url("header-bg.jpg");
  background-size: cover;
  background-position: center;
  height: calc(100vh - 53px - 46px);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  animation: fadeIn ease 0.5s;

  & > .container > h1 {
    font-size: 60px;
    color: #333;
    margin-bottom: 10px;
    text-shadow: 1.3px 1.3px #fff;
    animation: fadeIn ease 0.5s;
  }

  & > .container > h2 {
    font-size: 40px;
    font-weight: normal;
    text-shadow: 1.3px 1.3px #000;
    animation: fadeIn ease 0.5s;
  }

  & > .container > .social-media {
    margin-top: 30px;
    display: flex;
    align-items: center;
    gap: 15px;

    & > a {
      color: #333;

      &:hover,
      &:focus {
        transform: scale(110%);
      }

      & > i {
        display: inline-block;
        font-size: 2.4rem !important;
        color: #000000 !important;
      }
    }
  }

  @media (max-width: 768px) {
    & > .container > h1 {
      font-size: 40px;
    }

    & > .container > h2 {
      font-size: 30px;
    }
  }
`;
