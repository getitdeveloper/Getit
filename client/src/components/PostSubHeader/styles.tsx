import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import CreateIcon from '@material-ui/icons/Create';

export const useStyles = makeStyles((theme) => {
  return {
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
      [theme.breakpoints.down(600)]: {
        fontSize: '1.2rem',
        margin: '0.5rem',
        width: '6.5rem',
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
  };
});

export const PostSubHeaderWrapper = styled.div`
  width: 70%;
  margin: 0 auto;
  background-color: #f5f5f5;

  @media ${({ theme }) => theme.desktop} {
    width: 70%;
  }

  @media ${({ theme }) => theme.laptop} {
    width: 80%;
  }

  @media ${({ theme }) => theme.tablet} {
    width: 90%;
  }

  @media ${({ theme }) => theme.mobile} {
    width: 100%;
  }
`;

export const JobSelectButtonWrapper = styled.div`
  padding: 2rem;
  text-align: center;
  @media ${({ theme }) => theme.mobile} {
    padding: 1rem;
  }
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

    @media ${({ theme }) => theme.mobile} {
      font-size: 1.2rem;
    }
  }

  @media ${({ theme }) => theme.tablet} {
    width: 90%;
    margin: 0 auto;
  }

  @media ${({ theme }) => theme.mobile} {
    padding: 1rem;
  }
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
