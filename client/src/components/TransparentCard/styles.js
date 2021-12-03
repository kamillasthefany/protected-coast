import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  //z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;
`;

export const CardBox = styled.div`
  position: relative;
  //width: 600px;
  width: 95%;
  height: 150px;
  color: black;
  background-color: #A6A6A6;
  //background: rgba(255, 255, 255, 0.05);
  margin: 5px;
 // box-shadow: 0 15px 35px rgba(0, 0, 0, 0.5);
  border-radius: 15px;
  display: flex;
  //justify-content: space-evenly;
  align-items: center;
  backdrop-filter: blur(10px);
  flex-direction: column;
  flex-wrap: wrap;
`;

export const Title = styled.div`
  display: flex;
  max-height: 50px;
  padding: 0.5rem;
  //color: black;
`;
export const Text = styled.div`
    max-height: 50px;
    display: flex;
  padding: 0.5rem;
`;

export const Tags = styled.div`
  max-height: 50px;
  display: flex;
  padding: 0.5rem;
`;

export const CardWrapper = styled.div`
  display: flex;
  background-color: transparent;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TweetWrapper = styled.div`
  display: flex;
  background-color: blue;
  //height: 90vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ContentWrapper = styled.div`
  display: flex;
  background-color: white;
  width: 100%;
  //height: 90vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;


export const CardContent = styled.div`
  position: absolute;
  width: 650px;
  height: 150px;
  background: rgba(255, 255, 255, 0.05);
  margin: 10px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
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