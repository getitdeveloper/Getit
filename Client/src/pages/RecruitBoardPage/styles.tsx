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
  paper: {
    padding: theme.spacing(2),
    height: '320px',
    borderRadius: '25px',
    position: 'relative',
  },
}));

export const GridWrapper = styled.div`
  width: 80%;
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
    color: #000;
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
  height: auto;

  li {
    list-style: none;
    font-size: 0.9rem;
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
