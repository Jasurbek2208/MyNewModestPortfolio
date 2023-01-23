import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
        font-family: Arial, sans-serif;
        transition: all 0.3s ease-in-out;
        animation: fadeIn ease 0.5s;
    }

    .container {
        padding: 0px 16px;
        margin: 0 auto; 
        max-width: 900px;
    }

    
    body {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: #f1f1f1;
        animation: fadeIn ease 0.5s;
    }

    
    h3 {
        text-align: center;
        font-size: 40px;
        color: #333;
        font-weight: bold;
        margin-bottom: 20px;
        animation: fadeIn ease 0.5s;
    }
`