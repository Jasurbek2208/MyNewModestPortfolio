import React from "react";
import { Outlet } from "react-router-dom";

// Components
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import styled from "styled-components";

export default function MainLayout() {
  return (
    <StyledMainLayout>
      <Navbar />
      <Outlet />
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
