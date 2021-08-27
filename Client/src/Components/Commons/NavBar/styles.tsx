import styled from 'styled-components';
import { Tabs } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

// material ui css
export const StyledTabs = withStyles({
  indicator: {
    backgroundColor: '#4dd28f',
  },
  root: {
    color: 'black',
  },
})(Tabs);

export const NavBarWrapper = styled.div`
  position: sticky;
  top: 0;
  background: #ffffff;
  box-shadow: 0 3px 6px 0 #bababa;
  z-index: 100;
`;
