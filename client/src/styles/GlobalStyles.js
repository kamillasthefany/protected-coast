import styled, { createGlobalStyle } from 'styled-components';

// export const CSSReset = createGlobalStyle`
//   body {
//     box-sizing: border-box !important;
//     margin: 0 !important;
//     padding: 0 !important;
//     font-family: asap; 
//   }
// `;

export default createGlobalStyle`
  *{
    box-sizing: border-box !important;
    margin: 0 !important;
    padding: 0 !important;

    &::-webkit-scrollbar {
      height: 8px;
      width: 8px;
    }

    &::-webkit-scrollbar-track {
      background: transparent;
      border-radius: 4px;
    }

    &::-webkit-scrollbar-thumb {
      background: #A6A6A6;
      border-radius: 4px;
    }

    &::-webkit-scrollbar-thumb:hover {
    background: #555555;
    }
  }

  html, body, #root{
    height: 100%auto;
  }
  
  *, button, input {
    border: 0;
    outline: 0;
    font-family: 'Roboto', sans-serif;
  }

  button{
    cursor: pointer;
  }
`;

export const MainContainer = styled.div`
  box-sizing: border-box !important;
  margin: 0 !important;
  padding: 0 !important;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`;