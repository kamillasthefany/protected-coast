import styled from 'styled-components';
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';

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
  border-radius: 3px;
  padding: 12px 30px;
  margin: .3125rem 1px;
  font-size: 12px;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0;
  /* line-height: 1.42857143; */
  text-align: center;
  vertical-align: middle;
  cursor: pointer;

  :hover {
    background-color: #555555;
    color: white;
    border: 1px solid #555555;
    font-weight: bold;
  }
  }
`;

export const CustomTextField = styled(TextField)({
  '& input': {
    color: 'black',
    backgroundColor: 'transparent',
    borderBottomColor: '#a6a6a6',
  },
  '& label': {
    color: '#a6a6a6',
  },
  '& label.Mui-focused': {
    color: '#a6a6a6',
    borderBottomColor: '#a6a6a6',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#a6a6a6',
  },
  '&.MuiOutlinedInput-notchedOutline': {
    '& fieldset': {
      backgroundColor: '#a6a6a6',
    },
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      backgroundColor: '#a6a6a6',
    },
    '&:hover fieldset': {
      backgroundColor: '#a6a6a6',
    },
    '&.Mui-focused fieldset': {
      backgroundColor: '#a6a6a6',
    },
  },
});

export const TextFieldCustom = styled(TextField)({
  '& input': {
    color: 'white',
    backgroundColor: 'transparent',
    borderBottomColor: '#a6a6a6',
  },
  '& label': {
    color: '#a6a6a6',
  },
  '& label.Mui-focused': {
    color: '#a6a6a6',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#a6a6a6',
  },
  '&.MuiOutlinedInput-notchedOutline': {
    '& fieldset': {
      backgroundColor: 'green',
    },
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'white',
    },
    '&:hover fieldset': {
      borderColor: 'white',
      // backgroundColor: 'green',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'white',
      // backgroundColor: '#a6a6a6',
    },
  },
});