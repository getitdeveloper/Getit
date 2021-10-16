import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

export const useStyles = makeStyles((theme) => {
  return {
    radioButton: {
      padding: '1rem',
    },
    typography: {
      padding: '0.8rem 1rem',
      fontSize: '1.4rem',
      textAlign: 'center',
      cursor: 'pointer',
      '&:hover': {
        backgroundColor: '#f5f5f5',
      },
    },
  };
});

export const SortButton = styled(Button)`
  span {
    font-size: 1.4rem;
    opacity: 80%;
  }
`;
