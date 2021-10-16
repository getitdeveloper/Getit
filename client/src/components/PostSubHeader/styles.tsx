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
  max-width: 118rem;
  width: 100%;
  margin: 0 auto;
  background-color: #f5f5f5;

  @media ${({ theme }) => theme.tablet} {
    width: 90%;
  }

  @media ${({ theme }) => theme.mobile} {
    width: 100%;
  }
`;

export const LeftContainer = styled.div`
  margin-left: 2rem;
  width: 50%;
  display: flex;

  select {
    border: none;
    font-size: 1.5rem;
    opacity: 60%;
    background: ${({ theme }) => theme.colors.background};
    margin-right: 1rem;

    @media ${({ theme }) => theme.desktop} {
      display: none;
      margin-right: 0;
    }
    @media ${({ theme }) => theme.tablet} {
      display: initial;
      width: fit-content;
    }
    @media ${({ theme }) => theme.mobile} {
      font-size: 1.2rem;
    }
  }
`;

export const RightContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-end;
  margin: 0 auto;
  padding: 1.5rem 3rem;
  background: ${({ theme }) => theme.colors.background};

  select {
    border: none;
    font-size: 1.5rem;
    opacity: 60%;
    background: ${({ theme }) => theme.colors.background};
    margin-right: 1rem;

    @media ${({ theme }) => theme.tablet} {
      margin-right: 0;
    }

    @media ${({ theme }) => theme.mobile} {
      font-size: 1.2rem;
    }
  }

  @media ${({ theme }) => theme.tablet} {
    width: 100%;
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
