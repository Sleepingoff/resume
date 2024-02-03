import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  ${reset}
  * {
  margin: 0;
  padding: 0;
  color: inherit;
}

html {
  font-size: calc(16px / 10px * 100);
}

body {
  font-family: 'SUIT', sans-serif;
  font-size: 1.4rem;
}

a {
  text-decoration: none;
}

img {
  max-width: 100%;
  vertical-align: middle;
}

h2 {
  font-size: 2.4rem;
  font-weight: 400;
  border-bottom: 3px solid black;
}

h3 {
  font-weight: inherit;
  font-size: 1.5rem;
}

h1 {
  margin: 0;
  padding: 0;
  text-align: right;
}

section {
  padding: 5vh 0;
}

article {
  padding: 1vh 0;
}

ul,
ol {
  list-style-position: inside;
}

ul {
  list-style: none;
}

ul>li::before {
  content: "▪️";
  padding: 0 0.5rem 0 0.3rem;
  font-size: small;
}

ol>li {
  padding-bottom: 0.5rem;
}

li {
  line-height: 1.6;
}

p {
  line-height: 1.4;
  text-indent: 1.2rem;
}

b {
  font-size: 1.8rem;
}

q {
  quotes: ">" "";
}

details {
  margin-bottom: 1.6rem;
}

details summary {
  list-style-type: "+";
  line-height: 1.8;
  color: #555;
  font-size: 1.6rem;
  font-weight: 700;
}

details summary::before {
  content: "";
  padding-right: 1rem;
}

details[open] summary {
  list-style-type: "-";
}

address {
  font-size: 1.2rem;
  font-style: normal;
  margin: 1rem 0;
}

code {
  font-weight: 600;
  font-size: 0.8rem;
  background-color: #eee;
  color: #ff5b5b;
  padding: 0.3rem;
  border-radius: 0.5rem;
}
`;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>
);
