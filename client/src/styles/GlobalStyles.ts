import styled, { createGlobalStyle, DefaultTheme } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
    
    @keyframes loading {
    to {
      transform: rotate(1turn);
    }
  }
  }
  body{
    font-family: 'Poppins', sans-serif;
  }
  html, body, #root{
    height: 100%;
  }
  button{
    cursor: pointer;
  }
  a{
    text-decoration: none;
  }
  ul{
    list-style: none;
  }
`;

export const MainTheme: DefaultTheme = {
  colors: {
    primary: "#FF0000",
    primaryDarker: "#CC0000",
    primaryDark: "#990000",
    secondary: "#ffffff",
    secondaryDarker: "#F2F2F2",
    secondaryDark: "#CCCCCC",
  },
};

export const Spinner = styled.div<{
  size?: string;
}>`
  animation: loading 1s infinite;
  border: 6px solid #ccc;
  border-radius: 50%;
  border-top-color: #ff0000;
  height: ${({ size }) => (size ? size : "20px")};
  width: ${({ size }) => (size ? size : "20px")};
  display: block;
  margin: auto;
`;

export const Container = styled.main`
  max-width: 1220px;
  margin: 10px auto;
  height: calc(100vh - 110px);
  @media (max-width: 1220px) {
    padding: 0 15px;
  }
`;

export const ButtonSubmit = styled.button<{
  isLoading?: boolean;
  buttonWidth?: string;
  buttonHeight?: string;
  buttonFont?: string;
}>`
  &:hover {
    border-color: #000;
    color: #ff0000;
    box-shadow: 7px 7px 13px 0px rgba(50, 50, 50, 0.22);
  }
  transition: color 0.4s, border-color 0.4s, box-shadow 0.4s;
  width: ${({ buttonWidth }) => (buttonWidth ? buttonWidth : "120px")};
  height: ${({ buttonHeight }) => (buttonHeight ? buttonHeight : "42px")};
  border: 1px solid ${(props) => (props.isLoading ? "#ccc" : "#ff0000")};
  background-color: #fff;
  border-radius: 5px;
  font-size: ${({ isLoading, buttonFont }) => {
    const mainFont = buttonFont || "16px";
    return isLoading ? "0" : mainFont;
  }};
  font-weight: bold;

  &::after {
    content: ${(props) => (props.isLoading ? "''" : "unset")};
    animation: loading 1s infinite;
    border: 6px solid #ccc;
    border-radius: 50%;
    border-top-color: #ff0000;
    height: 20px;
    width: 20px;
    display: block;
    margin: auto;
  }
`;
