import React from "react";
import { BrowserRouter } from "react-router-dom";

import Router from "./router/Router";

import { GlobalStyle } from "./assets/style/GlobalStyle";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Router />
    </BrowserRouter>
  );
}

export default App;
