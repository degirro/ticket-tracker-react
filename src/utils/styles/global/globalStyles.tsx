import { createGlobalStyle } from "styled-components";

type ThemeType = {
  body: string;
  text: string;
};

export const GlobalStyles = createGlobalStyle<{ theme: ThemeType }>`
  html {
    background: #141414;
  }

  * {
    box-sizing: border-box;
  }

  body {
    font-family: Inter;
  }

  p {
    font-weight: 500;
  }

  h1, h2, h3, h4, h5, p {
    margin: 0;
  }
`;
