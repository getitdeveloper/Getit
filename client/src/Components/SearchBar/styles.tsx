import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';

const SearchBarStyles = makeStyles((theme: Theme) =>
  createStyles({
    inputRoot: {
      width: '90%',
      color: 'inherit',
      // padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(1)}px)`,
      fontSize: '1.5rem',
    },
  }),
);

export default SearchBarStyles;

export const SearchBarWrapper = styled.div`
  width: 36.75rem;
  display: flex;
  justify-content: space-between;
`;

export const SearchBarInput = styled.div`
  position: relative;
  border-radius: 23px;
  background-color: #f5f5f5;
  margin-left: 0;
  width: 100%;
`;

export const SearchIconWrapper = styled.div`
  padding: 0 1.5rem;
  height: 100%;
  position: absolute;
  right: 0;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;
