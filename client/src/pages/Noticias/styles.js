import styled from 'styled-components';

export const Container = styled.div`
  //background-color: #A6A6A6;
  background-color: #e4eaec;
  /* width: 100vw;
  height: 100vh; */
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #fff6;
  
`;

export const Content = styled.div`
  margin-top: 50px;
  background-color: #fff6;
  
`;

// export const CardWrsapper = styled.div`
//   display: flex;
//   background-color: transparent;
//   height: 100vh;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
// `;

export const CardWrapper = styled.div`
  display: flex;
  background-color: transparent;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Card = styled.div`
  position: absolute;
  width: 750px;
  height: 450px;
  //background: rgba(255, 255, 255, 0.05);
  background: #fff6;
  margin: 20px;
  //box-shadow: 0 10px 15px rgba(0, 0, 0, 0.5);
  border-radius: 8px;

  justify-content: center;
  align-items: center;
  align-self: center;
  backdrop-filter: blur(3px);

  flex-direction: column;
  display: flex;
  flex-wrap: wrap;
  margin: 10%;

`;

export const CardAux = styled.div`
  width: 700px;
`;