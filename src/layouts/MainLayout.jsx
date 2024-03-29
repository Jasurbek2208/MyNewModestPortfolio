import React from "react";
import styled from "styled-components";

// Components
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

export default function MainLayout({ children }) {
  return (
    <StyledMainLayout>
      <Navbar />
      {children}
      <Footer />
    </StyledMainLayout>
  );
}

const StyledMainLayout = styled.div`
  height: 100%;
  min-height: 100vh;

  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;