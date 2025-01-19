import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#ffffff",
  text: "#000000",
  buttonBg: "#007bff",
  buttonColor: "#ffffff",
  cardBg: "#f8f9fa",
};

export const darkTheme = {
  body: "#121212",
  text: "#ffffff",
  buttonBg: "#ffcc00",
  buttonColor: "#121212",
  cardBg: "#1f1f1f",
};

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${(props) => props.theme.body};
    color: ${(props) => props.theme.text};
    transition: all 0.3s ease-in-out;
    font-family: Arial, sans-serif;
  }
`;
