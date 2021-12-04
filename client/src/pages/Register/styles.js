import styled, { keyframes } from 'styled-components';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import img from '../../assets/img/daniel-olahh.jpg'

export const TextFieldCustom = styled(TextField)({
  '& input': {
    color: 'white',
    backgroundColor: 'transparent',
  },
  '& label': {
    color: 'white',
  },
  '& label.Mui-focused': {
    color: 'white',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'white',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'white',
    },
    '&:hover fieldset': {
      borderColor: 'white',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'white',
    },
  },
});

export const ButtonCustom = styled(Button)`
  && {
  color: white;
  border: 1px solid white;
    :hover {
      background-color: white;
      color: #454545;
      border: 1px solid white;
      font-weight: bold;
    }
  }
`;

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
