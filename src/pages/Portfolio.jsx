import React, { useEffect, useState } from "react";
import { myAxios } from "../service/axios";
import styled from "styled-components";

export default function Portfolio() {
  const [portfolios, setPortfolios] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [error, setError] = useState(false);

  // Get Portfolio posts
  async function getPortfolios() {
    try {
      const response = await myAxios.get("/portfolios");
      setPortfolios(response.data);

      setError(false);
    } catch (err) {
      setError(true);
    }
  }

  useEffect(() => {
    getPortfolios();
  }, []);

  // Carrousel left click
  const previous = () => {
    const newIndex = currentIndex - 1;
    setCurrentIndex(newIndex < 0 ? portfolios?.length - 1 : newIndex);
  };

  // Carrousel right click
  const next = () => {
    const newIndex = currentIndex + 1;
    setCurrentIndex(newIndex % portfolios?.length);
  };
  return (
    <StyledPortfolio>
      {error || portfolios?.length === 0 ? (
        <div className="error-content">
          <h1 className="error-content-text">Portfolios not found!</h1>
          <h5>
            View my Github profile:{" "}
            <a href="https://github.com/Jasurbek2208">Click here!</a>
          </h5>
        </div>
      ) : portfolios === null ? (
        <div className="loading__wrapper">
          <div className="loading"></div>
        </div>
      ) : (
        <div className="carousel__wrapper">
          <img
            className="carousel__image"
            src={portfolios[currentIndex]?.img}
            alt={portfolios[currentIndex]?.title}
          />
          <div className="carousel__content">
            <h3 className="carousel__title">
              {portfolios[currentIndex]?.title}
            </h3>
            <p className="carousel__description">
              {portfolios[currentIndex]?.description}
            </p>
            <div className="carrousel__link__wrapper">
              <a
                className="carousel__link"
                href={portfolios[currentIndex]?.project_link}
              >
                View Project
              </a>
              <a
                className="carousel__link"
                href={portfolios[currentIndex]?.github_link}
              >
                View GitHub
              </a>
            </div>
          </div>
          <button className="carousel__previous" onClick={previous}>
            Previous
          </button>
          <button className="carousel__next" onClick={next}>
            Next
          </button>
        </div>
      )}
    </StyledPortfolio>
  );
}

const StyledPortfolio = styled.div`
  padding: 40px 16px 0px;

  .error-content {
    height: calc(100vh - 50px - 53px - 80px);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    row-gap: 10px;
  }

  .carousel__wrapper {
    padding: 0 0 10px;
    position: relative;
    margin: 0 auto;
    max-width: 400px;
    min-width: 280px;

    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;

    border-radius: 15px;
    border: 2px solid #333;
    animation: fadeIn ease 0.5s;
    overflow: hidden;

    .carousel__image {
      width: 100%;
      height: 250px;
    }

    .carousel__content {
      padding: 7px 12px;
      max-width: 400px;
      min-width: 300px;
      width: 100%;

      display: flex;
      flex-direction: column;
      gap: 6px;

      .carousel__title {
        margin: 0;
        color: #333;
        font-weight: 600;
        font-size: 1.8rem;
        text-align: left;
      }

      .carousel__description {
        margin: 10px 0px;
        color: #333;
        font-size: 1rem;
        font-weight: 400;
        text-align: left;
      }

      .carrousel__link__wrapper {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 15px;

        .carousel__link {
          cursor: pointer;
          padding: 10px 12px;
          width: 120px;

          color: #fff;
          font-size: 0.8rem;
          font-weight: 600;
          text-align: center;
          text-decoration: none;

          border: none;
          border-radius: 10px;
          background-color: #333;

          &:hover,
          &:focus {
            outline: none;
            box-shadow: 0px 0px 0px 2px #fff, 0px 0px 0px 4px #333;
          }
        }
      }
    }

    .carousel__previous,
    .carousel__next {
      cursor: pointer;
      padding: 10px 12px;
      width: 80px;

      position: absolute;
      top: 50%;
      transform: translateY(-50%);

      color: #fff;
      font-weight: 600;
      text-align: center;
      text-decoration: none;

      border: none;
      border-radius: 10px;
      background-color: #333;

      &:hover,
      &:focus {
        outline: none;
        box-shadow: 0px 0px 0px 2px #fff, 0px 0px 0px 4px #333;
      }
    }

    .carousel__previous {
      left: 7px;
    }

    .carousel__next {
      right: 7px;
    }
  }
`;
