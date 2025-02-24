import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family:  'Open Sans', sans-serif;
    }

    body,
    #root {
        width: 100%;
        min-height: 100vh;
    }

    .navbar {
        background-color: #393939 !important;
    }

`;
