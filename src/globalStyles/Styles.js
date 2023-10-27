import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    font-family: "Kumbh Sans", sans-serif;
  }

  body {
    height:100vh;
    overflow:hidden;
    overflow-y:auto;
    display: flex;
    justify-content: center; 
  }

  body::-webkit-scrollbar {
    display:none;
  }

  #root {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 800px;
  }

  a {
    text-decoration:none;
  }

  button {
    cursor: pointer;
    background: none;
  }

  
`;
