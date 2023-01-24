import React from "react";
import styled from "styled-components";

export default function Portfolio() {
  return (
    <StyledPortfolio>
      <div className="loading__wrapper">
        <div className="loading">
          <div className="loading-bar"></div>
          <div className="loading-bar"></div>
          <div className="loading-bar"></div>
          <div className="loading-bar"></div>
        </div>
      </div>
    </StyledPortfolio>
  );
}

const StyledPortfolio = styled.div`
  height: calc(100vh - 50px - 53px);
`;
