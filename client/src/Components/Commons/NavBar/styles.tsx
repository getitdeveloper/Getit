import styled from 'styled-components';
import { Tabs } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

// material ui css
export const StyledTabs = withStyles({
  indicator: {
    backgroundColor: '#4dd28f',
  },
})(Tabs);

export const StyledLabel = styled.span`
  font-size: 1.6rem;
`;

export const NavBarWrapper = styled.div`
  position: sticky;
  top: 0;
  background: #ffffff;
  box-shadow: 0 3px 6px 0 #d2d2d2;
  z-index: 100;
`;
