import React from "react";
import styled from "styled-components";
import img from "./unsplash.jpg";
import img1 from "./img1.png";
import img2 from "./img2.png";
import img3 from "./img3.png";

export default function Home() {
  return (
    <StyledMain id="header">
      <div className="container">
        <h1>Jasurbek Shomaqsudov</h1>
        <h2>Front-end Developer</h2>
        <div className="social-media">
          <a href="#">
            <i className="fa fa-facebook"></i>
          </a>
          <a href="#">
            <i className="fa fa-twitter"></i>
          </a>
          <a href="#">
            <i className="fa fa-instagram"></i>
          </a>
          <a href="#">
            <i className="fa fa-linkedin"></i>
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

  /* background-image: url(${img3}); */
  background-position: center;
  background-size: cover;

  /* animation: fadeIn ease 0.5s; */
  /* transition: background-image 2s; */

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
