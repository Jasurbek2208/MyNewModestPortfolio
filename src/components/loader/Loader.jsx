import React from "react";
import styled from "styled-components";

export default function Loader() {
  return (
    <StyledLoader className="loading__wrapper">
      <div className="loading"></div>
    </StyledLoader>
  );
}

const StyledLoader = styled.div`
  &.loading__wrapper {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -10;

    & > .loading {
      width: 80px;
      height: 80px;
      border-radius: 100%;
      border-left: 7px solid #333;
      border-right: 7px solid #333;
      will-change: transform;
      animation: loading 1s ease-in-out infinite;
    }
  }
  @keyframes loading {
    0% {
      transform: rotate(-180deg);
    }
    100% {
      transform: rotate(180deg);
    }
  }
`;