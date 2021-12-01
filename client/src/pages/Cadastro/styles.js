import styled, { keyframes } from 'styled-components';
import img from '../../assets/img/daniel-olahh.jpg'

export const Container = styled.div`
    height: 100vh;
    background:url(${img});
    background-size:cover;
    overflow: hidden;

  a {
    color: #ECF2FA;
    cursor: pointer;
  }
`;

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
  width: 450px;
  height: 450px;
  margin: 20px;
  
  background: rgba(255, 255, 255, 0.05);
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(7px);

  border-radius: 8px;

  justify-content: center;
  align-items: center;
  align-self: center;

  flex-direction: column;
  display: flex;
  flex-wrap: wrap;
  margin: 10%;

`;

export const Title = styled.span`
  color: #FFF;
`;
