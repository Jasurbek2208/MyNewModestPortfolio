import React from "react";
import styled from "styled-components";

// Icons
import github from "../assets/icons/github.png";
import instagram from "../assets/icons/instagram.png";
import linkedin from "../assets/icons/linkedin.png";
import telegram from "../assets/icons/telegram.png";

export default function Home() {
  return (
    <StyledMain id="header">
      <div className="container">
        <h1>Jasurbek Shomaqsudov</h1>
        <h2>Front-end Developer</h2>
        <div className="social-media">
          <a href="https://github.com/Jasurbek2208">
            <img className="icon" src={github} alt="github logo" />
          </a>
          <a href="https://www.instagram.com/jasurbekshomaqsudov_frontend">
            <img className="icon" src={instagram} alt="instagram logo" />
          </a>
          <a href="https://t.me/Joni2208">
            <img className="icon" src={telegram} alt="telegram logo" />
          </a>
          <a href="https://www.linkedin.com/in/jasurbek-shomaqsudov-09a8b5251">
            <img className="icon" src={linkedin} alt="linkedin logo" />
          </a>
        </div>
      </div>
    </StyledMain>
  );
}

const StyledMain = styled.header`
  height: calc(100vh - 50px - 53px);
  color: #fff;

  display: flex;
  align-items: center;
  justify-content: center;

  & > .container > h1 {
    font-size: 60px;
    color: #333;
    margin-bottom: 10px;
    text-shadow: 1.3px 1.3px #fff;
    animation: fadeIn ease 0.8s;
  }

  & > .container > h2 {
    font-size: 40px;
    font-weight: normal;
    text-shadow: 1.3px 1.3px #000;
    animation: fadeIn ease 0.9s;
    transition: 300ms ease-in-out;
  }

  & > .container > .social-media {
    margin-top: 30px;
    display: flex;
    align-items: center;
    gap: 20px;

    & > a {
      color: #333;
      transition: 300ms ease-in-out;

      &:hover,
      &:focus {
        transform: scale(110%);
      }

      & > .icon {
        max-width: 28px;
        max-height: 28px;
        font-size: 2.7rem !important;
        color: #000000 !important;
        animation: fadeIn ease 0.7s;
        transition: 300ms ease-in-out;
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
