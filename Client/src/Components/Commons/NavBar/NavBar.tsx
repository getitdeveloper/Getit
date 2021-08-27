import * as React from 'react';
import { useCallback } from 'react';
import { Tab } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { StyledTabs, NavBarWrapper } from './styles';

function NavBar(): JSX.Element {
  const [selectTab, setSelectTab] = React.useState(0);

  const handleChange = useCallback(
    (event: React.ChangeEvent<{ event?: EventTarget }>, selection: number) => {
      setSelectTab(selection);
      // 선택된 탭
      // console.log(selection);
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
    <NavBarWrapper>
      <StyledTabs value={selectTab} onChange={handleChange} centered>
        <Tab
          style={activeStyle(selectTab === 0)}
          label='스터디 모집 게시판'
          component={Link}
          to='/'
        />
        <Tab
          style={activeStyle(selectTab === 1)}
          label='질문 게시판'
          component={Link}
          to='questionBoard'
        />
        <Tab
          style={activeStyle(selectTab === 2)}
          label='자유 게시판'
          component={Link}
          to='freeBoard'
        />
      </StyledTabs>
    </NavBarWrapper>
  );
}

export default NavBar;
