import React from "react";
import { Toaster } from 'react-hot-toast';
import { BrowserRouter } from "react-router-dom";

import Router from "./router/Router";

import { GlobalStyle } from "./assets/style/GlobalStyle";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Toaster />
      <Router />
    </BrowserRouter>
  );
}

export default App;
