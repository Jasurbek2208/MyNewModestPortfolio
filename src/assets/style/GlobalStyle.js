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

    /* Loading styles */
    .loading__wrapper {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .loading {
        width: 80px;
        height: 80px;
        border-radius: 100%;
        border-left: 7px solid #333;
        border-right: 7px solid #333;
        animation: loading 1s ease-in-out infinite;
    }

    /* Define the individual loading bars */

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

    /* Loading animation */
    @keyframes loading {
        0% {
            transform: rotate(-180deg);
        }
        100% {
            transform: rotate(180deg);
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