import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
        font-family: Arial, sans-serif;
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
    }

    
    h3 {
        text-align: center;
        font-size: 40px;
        color: #333;
        font-weight: bold;
        margin-bottom: 20px;
        animation: fadeIn ease 0.5s;
    }
    /* Animations */
    @keyframes fadeIn {
        from {
            margin-top: -30px;
            opacity: 0;
        }
        to {
            margin-top: 0px;
            opacity: 1;
        }
    }
    @keyframes fadeInRevers {
        from {
            margin-top: 30px;
            opacity: 0;
        }
        to {
            margin-top: 0px;
            opacity: 1;
        }
    }
    /* width */
    ::-webkit-scrollbar {
        width: 8px;
        height: 8px;
    }
    /* Track */
    ::-webkit-scrollbar-track {
        background: #f1f1f1; 
    } 
    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: #333; 
    }
    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: #555; 
    }
`