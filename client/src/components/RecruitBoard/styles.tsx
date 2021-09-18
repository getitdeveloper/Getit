import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';

// material ui css
export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '1rem',
    background: '#f5f5f5',
  },
  post: {
    padding: theme.spacing(2),
    minHeight: '324px',
    height: '100%',
    maxWidth: '400px',
    width: '100%',
    borderRadius: '25px',
    position: 'relative',
    margin: '0 auto',
  },
}));

export const RecruitBoardWrapper = styled.div`
  background-color: #f5f5f5;
`;

export const GridWrapper = styled.div`
  width: 50%;

  @media ${({ theme }) => theme.desktop} {
    width: 70%;
  }

  /* @media ${({ theme }) => theme.laptop} {
    width: 80%;
  } */

  @media ${({ theme }) => theme.tablet} {
    width: 90%;
  }

  /* @media ${({ theme }) => theme.mobile} {
    width: 80%;
  } */
`;

export const MemberTypeWrapper = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const Title = styled.div`
  padding-top: 0.8rem;

  h1 {
    font-size: 20px;
    color: ${(props) => props.theme.colors.blackText};
  }
`;

export const RecruitCondition = styled.ul`
  list-style: none;
  padding-top: 0.5rem;
  font-size: 12px;
  margin: 0;
  padding: 0;
  opacity: 0.55;
`;

export const Content = styled.div`
  height: 100%;
`;

export const ContentDetail = styled.div`
  position: absolute;
  right: 1rem;
  bottom: 0;
  padding: 2rem;
  height: auto;

  li {
    list-style: none;
    font-size: 1.5rem;
    display: inline-block;
    vertical-align: middle;
    padding-right: 0.5rem;
  }

  span {
    display: inline-block;
    vertical-align: middle;
    padding-right: 0.5rem;
  }
`;
