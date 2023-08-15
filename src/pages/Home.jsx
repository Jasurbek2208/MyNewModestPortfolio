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
        <h2>Frontend Developer</h2>
        <div className="social-media">
          <a href="https://github.com/Jasurbek2208">
            <img className="icon" src={github} alt="github logo" />
          </a>
          <a href="https://www.instagram.com/jasurbek_shomaqsudov">
            <img className="icon" src={instagram} alt="instagram logo" />
          </a>
          <a href="https://t.me/Joni2208">
            <img className="icon" src={telegram} alt="telegram logo" />
          </a>
          <a href="https://www.linkedin.com/in/jasurbek-shomaqsudov">
            <img className="icon" src={linkedin} alt="linkedin logo" />
          </a>
        </div>
        <a href="https://cdn.glitch.global/ebe6044e-04ea-46ed-8ac3-98d332171519/Jasurbek_Shomaqsudov_Resume.pdf?v=1692107825264" download="Jasurbek_Shomaqsudov_Resume.pdf" className="download_resume">
          Download Resume
        </a>
      </div>
    </StyledMain>
  );
}

const StyledMain = styled.header`
  color: #fff;

  display: grid;
  place-items: center;

  & > .container > h1 {
    font-size: 60px;
    color: #333;
    margin-bottom: 10px;
    text-shadow: 1.3px 1.3px #fff;
    will-change: margin-top, opacity;
    animation: fadeIn ease 0.8s;
  }

  & > .container > h2 {
    font-size: 40px;
    font-weight: normal;
    text-shadow: 1.3px 1.3px #000;
    will-change: margin-top, opacity;
    animation: fadeIn ease 0.9s;
    transition: 300ms ease-in-out;
  }

  & > .container {
    & > .social-media {
      margin: 30px 0px 40px;
      display: flex;
      align-items: center;
      gap: 20px;

      & > a {
        color: #333;
        will-change: transform;
        transition: 300ms ease-in-out;

        &:hover,
        &:focus {
          outline: none;
          transform: scale(110%);
        }

        & > .icon {
          max-width: 28px;
          max-height: 28px;
          font-size: 2.7rem !important;
          color: #000000 !important;
          will-change: margin-top, opacity;
          animation: fadeIn ease 2s;
          transition: 300ms ease-in-out;
        }
      }
    }

    & > .download_resume {
      padding: 10px;
      
      color: #333;
      font-size: 18px;
      font-weight: 700;
      text-decoration: none;

      border-radius: 6px;
      border: 2px solid #333;
      
      will-change: margin-top, opacity, color, background-color;
      animation: fadeIn ease 0.9s;
      transition: 300ms ease-in-out;

      &:hover,
      &:focus {
        color: #fff;
        outline: none;
        background-color: #333;
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
