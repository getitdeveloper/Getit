import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import CreateIcon from '@material-ui/icons/Create';

export const useStyles = makeStyles((theme) => {
  return {
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
    radioButton: {
      padding: '1rem',
    },
  };
});

export const PostSubHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 118rem;
  width: 100%;
  margin: 0 auto;
  background-color: #f5f5f5;
  padding: 2rem 1rem;

  @media ${({ theme }) => theme.tablet} {
    width: 90%;
  }

  @media ${({ theme }) => theme.mobile} {
    width: 100%;
    padding: 1rem 0rem;
  }
`;

export const LeftContainer = styled.div``;

export const RightContainer = styled.div`
  display: flex;
`;

export const WritePostText = styled.span`
  @media ${({ theme }) => theme.mobile} {
    display: none;
  }
`;

export const WritePostIcon = styled(CreateIcon)`
  margin: 0;
  padding: 0;
`;
