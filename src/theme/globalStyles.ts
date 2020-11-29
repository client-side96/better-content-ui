import { createGlobalStyle } from 'styled-components';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const rubik400Ttf = require('../fonts/Rubik400.ttf');

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: Rubik;
        src: url(${rubik400Ttf});
    }

    body {
        font-family: Rubik, sans-serif;
    }
`;

export default GlobalStyle;
