import React, { useCallback } from 'react';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import { Tab } from '@material-ui/core';
import { SELECT_TAB } from '@reducers/actions';
import { StyledTabs, StyledLabel, NavBarWrapper } from './styles';

function NavBar(): JSX.Element {
  const dispatch = useDispatch();
  const selectedTab = useSelector(
    (state: RootStateOrAny) => state.navbarTab.selectTab,
  );

  const handleChange = useCallback(
    (event: React.ChangeEvent<{ event?: EventTarget }>, selection: number) => {
      dispatch({
        type: SELECT_TAB,
        data: selection,
      });
    },
    [],
  );

  const activeStyle = useCallback(
    (isActive) => {
      return isActive ? { color: '#4dd28f' } : { color: '#000000' };
    },
    [selectedTab],
  );

  return (
    // 페이지 네이게이션
    <NavBarWrapper>
      <StyledTabs value={selectedTab} onChange={handleChange} centered>
        <Tab
          style={activeStyle(selectedTab === 0)}
          label={<StyledLabel>스터디 모집</StyledLabel>}
        />
        <Tab
          style={activeStyle(selectedTab === 1)}
          label={<StyledLabel>질문 게시판</StyledLabel>}
        />
        <Tab
          style={activeStyle(selectedTab === 2)}
          label={<StyledLabel>자유 게시판</StyledLabel>}
        />
      </StyledTabs>
    </NavBarWrapper>
  );
}

export default NavBar;
