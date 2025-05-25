import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
*,
*::after,
*::before {
  box-sizing: border-box;
}
html {
  scroll-behavior: smooth;
}

img {
  display: block;
  max-width: 100%;
}

a {
  text-decoration: none;
  color: inherit;
}

nav ul {
  list-style: none;
  padding-left: 0;
  margin-top: 0;
  margin-bottom: 0;
}

body {
  margin: 0;
font-family: "Mouse Memoirs", sans-serif;
  background-image: url(/assets/images/background-mobile.svg);
  background-size: cover;
  color:#fff ;
}
`;
