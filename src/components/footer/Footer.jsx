import React from "react";
import styled from "styled-components";

export default function Footer() {
  return (
    <StyledFooter id="footer">
      <div className="container">
        <p>Copyright &copy; 2023 Jasurbek Shomaqsudov</p>
      </div>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  padding: 16px 0;
  background-color: #333;
  animation: fadeIn ease 0.5s;

  p {
    text-align: center;
    color: #fff;
    font-weight: 500;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    animation: fadeIn ease 0.5s;
  }
  
  @media (max-width: 360px) {
    p {
      font-size: 14px;
    }
  }
`;
