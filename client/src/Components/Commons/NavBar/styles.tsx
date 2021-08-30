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

export const JobSelectButtonWrapper = styled.div`
  padding: 2rem;
  text-align: center;
`;

export const JobSelectButton = styled(Button)`
  border-radius: 1.2rem;
  font-size: 1.5rem;
  margin: 1rem;
  padding: 0.7rem;
  width: 10rem;
  background-color: #ffffff;

  &:hover {
    background-color: ${(props) => props.theme.colors.main};
  }
`;

export const HorizontalLine = styled.hr`
  width: 80%;
  border: 0.1px dashed #d2d2d2;
  border-style: none none dotted;
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

export const WritePost = styled(Button)`
  margin-left: 0.5rem;
  border-radius: 25px;
  background-color: ${(props) => props.theme.colors.main};
  font-size: 1.5rem;
  color: ${(props) => props.theme.colors.whiteText};

  &:hover {
    background-color: ${(props) => props.theme.colors.main};
  }
`;
