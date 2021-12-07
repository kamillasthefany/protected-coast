import styled from 'styled-components';
import Button from "@material-ui/core/Button";

export const Container = styled.div`
  background-color: #e4eaec;  
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonCustom = styled(Button)`
  && {
  color: white;
  background-color: #454545;
  border: 1px solid white;
    :hover {
      background-color: #555555;
      color: white;
      border: 1px solid #555555;
      font-weight: bold;
    }
  }
`;