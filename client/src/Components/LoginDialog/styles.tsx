import styled from 'styled-components';
import { DialogTitle, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  buttonList: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '1rem',
    margin: '1.5rem 0 4.1rem 0',
  },
  button: {
    maxWidth: '32.4rem',
    width: '100vw',
    height: '4.1rem',
    margin: '0.5rem 0',
    fontSize: '100%',
  },
});

export const IconButtonContainer = styled(IconButton)`
  align-self: flex-end;
  padding: 2rem;
`;

export const Title = styled(DialogTitle)`
  font-size: 1.8rem;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.67;
  text-align: center;
  color: #000000;
`;
