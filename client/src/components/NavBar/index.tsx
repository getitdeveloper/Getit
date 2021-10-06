import * as React from 'react';
import { useCallback } from 'react';
import { Tab } from '@material-ui/core';
import { StyledTabs, StyledLabel, NavBarWrapper } from './styles';
import { ISelectTab } from './types';

function NavBar({ selectTab, setSelectTab }: ISelectTab): JSX.Element {
  const handleChange = useCallback(
    (event: React.ChangeEvent<{ event?: EventTarget }>, selection: number) => {
      setSelectTab(selection);
    },
    [],
  );

  const activeStyle = useCallback(
    (isActive) => {
      return isActive ? { color: '#4dd28f' } : { color: '#000000' };
    },
    [selectTab],
  );

  return (
    // 페이지 네이게이션
    <NavBarWrapper>
      <StyledTabs value={selectTab} onChange={handleChange} centered>
        <Tab
          style={activeStyle(selectTab === 0)}
          label={<StyledLabel>스터디 모집</StyledLabel>}
        />
        <Tab
          style={activeStyle(selectTab === 1)}
          label={<StyledLabel>질문 게시판</StyledLabel>}
        />
        <Tab
          style={activeStyle(selectTab === 2)}
          label={<StyledLabel>자유 게시판</StyledLabel>}
        />
      </StyledTabs>
    </NavBarWrapper>
  );
}

export default NavBar;
