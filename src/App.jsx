import React from "react";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router-dom";
// Redux Store
import { store } from "./store";
// Router
import Router from "./router/Router";
// Global Style
import { GlobalStyle } from "./assets/style/GlobalStyle";

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Toaster />
      <Provider store={store}>
        <Router />
      </Provider>
    </BrowserRouter>
  );
}
