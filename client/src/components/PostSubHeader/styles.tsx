import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  jobButton: {
    borderRadius: '1.2rem',
    fontSize: '1.5rem',
    margin: '1rem',
    padding: '0.7rem',
    width: '10rem',
    backgroundColor: '#FFFFFF',
    '&:hover': {
      backgroundColor: '#4dd290',
    },
  },
  writePostButton: {
    marginLeft: '0.5rem',
    borderRadius: '25px',
    backgroundColor: '#4dd290',
    fontSize: '1.5rem',
    color: '#FFFFFF',
    '&:hover': {
      backgroundColor: '#4dd290',
    },
  },
});

export const PostSubHeaderWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  background-color: #f5f5f5;
`;

export const JobSelectButtonWrapper = styled.div`
  padding: 2rem;
  text-align: center;
`;

export const SortAndWriteWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 1.5rem 3rem;
  background: ${(props) => props.theme.colors.background};

  select {
    border: none;
    font-size: 1.5rem;
    background: ${(props) => props.theme.colors.background};
  }
`;
