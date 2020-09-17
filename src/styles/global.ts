import { createGlobalStyle } from "styled-components";

import GithubBg from "../assets/github-background.svg";

const fontStack =
  "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif";

export default createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
}

body{
  background: #f0f0f5 url(${GithubBg}) no-repeat 70% top;
  font: 1.6rem ${fontStack};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body, input, button {
  font: 1.6rem ${fontStack};
}

button {
  cursor: pointer;
}

#root {
  max-width: 960px;
  margin: 0 auto;
  padding: 40px 20px;
}
`;
